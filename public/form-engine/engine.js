/**
 * FormEngine — 모듈 기반 신청서 엔진
 *
 * 사용법:
 *   <div id="application-form"></div>
 *   <script src="https://{host}/form-engine/engine.js"></script>
 *   <script>
 *     FormEngine.init({
 *       site:   'tesol',
 *       formId: 'expert_part1',
 *       container: '#application-form',
 *       apiUrl: 'https://{host}',
 *       recordId: null,    // part2 재진입 시 지정
 *       token:    null,    // part2 재진입 HMAC 토큰
 *       onComplete: function(id, data){}
 *     });
 *   </script>
 *
 * 필드 소스: /api/form-config/:site/:formId — form_modules + form_templates 조립
 * 저장:     /api/applications (POST/PUT)
 * 파일:     /api/upload/presign → S3 PUT
 */
(function () {
  'use strict';

  // ============================================================
  //  STYLES
  // ============================================================

  const CSS = `
.fe-wrap{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,sans-serif;max-width:720px;margin:0 auto;color:#1f2937;padding:8px}
.fe-wrap *{box-sizing:border-box}
.fe-head{display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:2px solid #e5e7eb;margin-bottom:12px}
.fe-head .fe-site{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:700;color:#fff}
.fe-head .fe-form{font-size:13px;font-weight:600;color:#374151}
.fe-progress{display:flex;gap:0;margin-bottom:16px}
.fe-step-dot{flex:1;text-align:center;padding:8px 0;font-size:11px;font-weight:600;border-bottom:3px solid #e5e7eb;color:#9ca3af;transition:.2s}
.fe-step-dot.active{border-color:#1a365d;color:#1a365d}
.fe-step-dot.done{border-color:#16a34a;color:#16a34a}
.fe-section{margin-bottom:18px;padding:10px 12px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px}
.fe-section-title{font-size:12px;font-weight:700;color:#1a365d;margin-bottom:8px;padding-bottom:4px;border-bottom:1px dashed #d1d5db}
.fe-group{margin-bottom:10px}
.fe-label{display:block;font-size:11px;font-weight:600;color:#4b5563;margin-bottom:3px}
.fe-label .req{color:#e53e3e;margin-left:2px}
.fe-input,.fe-select,.fe-textarea{width:100%;padding:7px 10px;border:1px solid #d1d5db;border-radius:6px;font-size:12px;outline:none;transition:.15s;background:#fff}
.fe-input:focus,.fe-select:focus,.fe-textarea:focus{border-color:#1a365d;box-shadow:0 0 0 2px rgba(26,54,93,.12)}
.fe-textarea{resize:vertical;min-height:64px}
.fe-check-row{display:flex;align-items:flex-start;gap:6px;padding:4px 0}
.fe-check-row input[type=checkbox]{width:15px;height:15px;margin-top:1px;accent-color:#1a365d}
.fe-check-row label{font-size:11px;color:#4b5563;cursor:pointer;line-height:1.4}
.fe-chips{display:flex;flex-wrap:wrap;gap:4px;margin-top:2px}
.fe-chip{padding:4px 10px;border:1px solid #d1d5db;border-radius:999px;font-size:11px;cursor:pointer;transition:.15s;user-select:none;background:#fff}
.fe-chip:hover{border-color:#1a365d}
.fe-chip.sel{background:#1a365d;color:#fff;border-color:#1a365d}
.fe-chip-sq{border-radius:4px}
.fe-file{display:flex;flex-direction:column;gap:4px}
.fe-file-zone{border:2px dashed #d1d5db;border-radius:6px;padding:12px;text-align:center;font-size:11px;color:#6b7280;cursor:pointer;transition:.15s}
.fe-file-zone:hover{border-color:#1a365d;color:#1a365d}
.fe-file-zone .fname{font-weight:600;color:#1a365d}
.fe-btns{display:flex;gap:6px;margin-top:16px}
.fe-btn{flex:1;padding:9px;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;transition:.15s}
.fe-btn-prev{background:#e5e7eb;color:#4b5563}.fe-btn-prev:hover{background:#d1d5db}
.fe-btn-next{background:#1a365d;color:#fff}.fe-btn-next:hover{background:#2d4a7c}
.fe-btn-submit{background:#16a34a;color:#fff}.fe-btn-submit:hover{background:#15803d}
.fe-btn:disabled{opacity:.5;cursor:not-allowed}
.fe-error{font-size:10px;color:#e53e3e;margin-top:2px;min-height:12px}
.fe-saved{display:inline-block;padding:3px 10px;background:#dcfce7;color:#16a34a;border-radius:4px;font-size:10px;font-weight:600;margin-bottom:8px;animation:fe-fade 2s forwards}
@keyframes fe-fade{0%,70%{opacity:1}100%{opacity:0}}
.fe-success{text-align:center;padding:40px 16px}
.fe-success h2{font-size:18px;color:#16a34a;margin-bottom:6px}
.fe-success p{font-size:12px;color:#6b7280;margin:4px 0}
.fe-loading{text-align:center;padding:40px;font-size:12px;color:#6b7280}
.fe-fatal{padding:16px;border:1px solid #fecaca;background:#fef2f2;color:#b91c1c;border-radius:6px;font-size:12px}
`;

  // ============================================================
  //  CORE ENGINE
  // ============================================================

  const FormEngine = {
    _cfg: null,
    _config: null,         // response from /api/form-config
    _stepGroups: null,     // [['M-COM-IDENT'], ['M-COM-TAX','M-EXP-Q']]
    _curStep: 1,
    _totalSteps: 1,
    _data: {},             // flat { fieldKey: value }
    _files: {},            // { fieldKey: {name,url} }
    _recordId: null,
    _container: null,
    _nsPrefix: '',         // 'part1' | 'part2'

    init(cfg) {
      this._cfg = {
        site: cfg.site || null,
        formId: cfg.formId || null,
        apiUrl: (cfg.apiUrl || '').replace(/\/$/, ''),
        container: cfg.container || '#application-form',
        recordId: cfg.recordId || null,
        token: cfg.token || null,
        onComplete: cfg.onComplete || null
      };

      this._container = typeof cfg.container === 'string'
        ? document.querySelector(cfg.container)
        : cfg.container;

      if (!this._container) {
        console.error('[FormEngine] Container not found:', cfg.container);
        return;
      }

      // Inject styles once
      if (!document.getElementById('fe-styles')) {
        const style = document.createElement('style');
        style.id = 'fe-styles';
        style.textContent = CSS;
        document.head.appendChild(style);
      }

      this._recordId = this._cfg.recordId;
      this._renderLoading();
      this._loadConfig().catch(err => {
        console.error('[FormEngine] load failed:', err);
        this._renderFatal('신청서 설정을 불러올 수 없습니다. (' + err.message + ')');
      });
    },

    // --- Config loading ---

    async _loadConfig() {
      if (!this._cfg.site || !this._cfg.formId) {
        throw new Error('site/formId 필수');
      }
      const url = `${this._cfg.apiUrl}/api/form-config/${encodeURIComponent(this._cfg.site)}/${encodeURIComponent(this._cfg.formId)}`;
      const res = await fetch(url);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      this._config = await res.json();
      this._nsPrefix = this._config.phase || '';   // 'part1' | 'part2'

      // Build step groups. If template.steps absent, each section = one step.
      if (this._config.steps && this._config.steps.length) {
        this._stepGroups = this._config.steps;
      } else {
        this._stepGroups = (this._config.sections || []).map(s => [s.moduleId]);
      }
      this._totalSteps = this._stepGroups.length;
      this._curStep = 1;

      // If recordId given, hydrate existing record
      if (this._recordId) {
        await this._hydrateFromRecord();
      }

      this.render();
    },

    async _hydrateFromRecord() {
      try {
        const url = `${this._cfg.apiUrl}/api/applications/${this._recordId}`;
        const res = await fetch(url + (this._cfg.token ? '?t=' + encodeURIComponent(this._cfg.token) : ''));
        if (!res.ok) return;
        const row = await res.json();
        const data = JSON.parse(row.data || '{}');
        const ns = data[this._nsPrefix] || {};
        this._data = { ...ns };
        // File urls restore
        if (data._files && data._files[this._nsPrefix]) {
          this._files = data._files[this._nsPrefix];
        }
      } catch (e) {
        console.warn('[FormEngine] hydrate skipped:', e.message);
      }
    },

    // --- Rendering ---

    _renderLoading() {
      this._container.innerHTML = '<div class="fe-wrap"><div class="fe-loading">신청서 불러오는 중…</div></div>';
    },

    _renderFatal(msg) {
      this._container.innerHTML = `<div class="fe-wrap"><div class="fe-fatal">${msg}</div></div>`;
    },

    render() {
      const wrap = document.createElement('div');
      wrap.className = 'fe-wrap';

      // Header with site + form chip
      const head = document.createElement('div');
      head.className = 'fe-head';
      const si = this._config.siteInfo || {};
      const siteEl = document.createElement('span');
      siteEl.className = 'fe-site';
      siteEl.style.background = si.color || '#475569';
      siteEl.textContent = (si.icon ? si.icon + ' ' : '') + (si.name || this._config.site);
      const formEl = document.createElement('span');
      formEl.className = 'fe-form';
      formEl.textContent = this._config.shortName || this._config.displayName || this._config.formId;
      head.appendChild(siteEl);
      head.appendChild(formEl);
      wrap.appendChild(head);

      // Progress bar
      if (this._totalSteps > 1) {
        const prog = document.createElement('div');
        prog.className = 'fe-progress';
        for (let i = 1; i <= this._totalSteps; i++) {
          const dot = document.createElement('div');
          dot.className = 'fe-step-dot';
          if (i < this._curStep) dot.classList.add('done');
          if (i === this._curStep) dot.classList.add('active');
          dot.textContent = `${i} / ${this._totalSteps}`;
          prog.appendChild(dot);
        }
        wrap.appendChild(prog);
      }

      // Render sections for current step
      const sectionsInStep = this._getSectionsForStep(this._curStep);
      for (const sec of sectionsInStep) {
        wrap.appendChild(this._renderSection(sec));
      }

      // Buttons
      const btns = document.createElement('div');
      btns.className = 'fe-btns';
      if (this._curStep > 1) {
        const prev = document.createElement('button');
        prev.className = 'fe-btn fe-btn-prev';
        prev.textContent = '이전';
        prev.onclick = () => this._prevStep();
        btns.appendChild(prev);
      }
      if (this._curStep < this._totalSteps) {
        const next = document.createElement('button');
        next.className = 'fe-btn fe-btn-next';
        next.textContent = '저장 후 다음';
        next.onclick = () => this._nextStep();
        btns.appendChild(next);
      }
      if (this._curStep === this._totalSteps) {
        const submit = document.createElement('button');
        submit.className = 'fe-btn fe-btn-submit';
        submit.textContent = '최종 제출';
        submit.onclick = () => this._submit();
        btns.appendChild(submit);
      }
      wrap.appendChild(btns);

      this._container.innerHTML = '';
      this._container.appendChild(wrap);
    },

    _getSectionsForStep(step) {
      const wantedIds = this._stepGroups[step - 1] || [];
      return (this._config.sections || []).filter(s => wantedIds.includes(s.moduleId));
    },

    _renderSection(sec) {
      const box = document.createElement('div');
      box.className = 'fe-section';
      if (sec.name) {
        const title = document.createElement('div');
        title.className = 'fe-section-title';
        title.textContent = sec.name;
        box.appendChild(title);
      }
      for (const f of (sec.fields || [])) {
        box.appendChild(this._renderField(f));
      }
      return box;
    },

    _renderField(f) {
      const g = document.createElement('div');
      g.className = 'fe-group';

      // Checkbox: label on the right of the box
      if (f.type === 'checkbox') {
        const row = document.createElement('div');
        row.className = 'fe-check-row';
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.id = 'fe-' + f.key;
        cb.checked = !!this._data[f.key];
        cb.onchange = () => { this._data[f.key] = cb.checked; };
        const lbl = document.createElement('label');
        lbl.htmlFor = cb.id;
        lbl.textContent = f.label + (f.required ? ' *' : '');
        row.appendChild(cb);
        row.appendChild(lbl);
        g.appendChild(row);
        this._attachError(g, f.key);
        return g;
      }

      // Section title / info
      if (f.type === 'section_title') {
        const h = document.createElement('div');
        h.className = 'fe-section-title';
        h.textContent = f.label || '';
        g.appendChild(h);
        return g;
      }
      if (f.type === 'info') {
        const p = document.createElement('div');
        p.style.fontSize = '11px';
        p.style.color = '#6b7280';
        p.textContent = f.label || '';
        g.appendChild(p);
        return g;
      }

      // Label
      const label = document.createElement('label');
      label.className = 'fe-label';
      label.textContent = f.label;
      if (f.required) {
        const req = document.createElement('span');
        req.className = 'req';
        req.textContent = '*';
        label.appendChild(req);
      }
      g.appendChild(label);

      // Body by type
      if (f.type === 'select') {
        const sel = document.createElement('select');
        sel.className = 'fe-select';
        sel.dataset.key = f.key;
        const def = document.createElement('option');
        def.value = ''; def.textContent = '선택';
        sel.appendChild(def);
        (f.options || []).forEach(o => {
          const opt = document.createElement('option');
          opt.value = o; opt.textContent = o;
          if (this._data[f.key] === o) opt.selected = true;
          sel.appendChild(opt);
        });
        sel.onchange = () => { this._data[f.key] = sel.value; };
        g.appendChild(sel);
      } else if (f.type === 'multiselect') {
        const box = document.createElement('div');
        box.className = 'fe-chips';
        const selected = Array.isArray(this._data[f.key]) ? this._data[f.key] : [];
        (f.options || []).forEach(o => {
          const chip = document.createElement('span');
          chip.className = 'fe-chip' + (selected.includes(o) ? ' sel' : '');
          chip.textContent = o;
          chip.onclick = () => {
            if (!Array.isArray(this._data[f.key])) this._data[f.key] = [];
            const idx = this._data[f.key].indexOf(o);
            if (idx >= 0) { this._data[f.key].splice(idx, 1); chip.classList.remove('sel'); }
            else { this._data[f.key].push(o); chip.classList.add('sel'); }
          };
          box.appendChild(chip);
        });
        g.appendChild(box);
      } else if (f.type === 'radio') {
        const box = document.createElement('div');
        box.className = 'fe-chips';
        (f.options || []).forEach(o => {
          const chip = document.createElement('span');
          chip.className = 'fe-chip fe-chip-sq' + (this._data[f.key] === o ? ' sel' : '');
          chip.textContent = o;
          chip.onclick = () => {
            this._data[f.key] = o;
            Array.from(box.children).forEach(c => c.classList.remove('sel'));
            chip.classList.add('sel');
          };
          box.appendChild(chip);
        });
        g.appendChild(box);
      } else if (f.type === 'textarea') {
        const ta = document.createElement('textarea');
        ta.className = 'fe-textarea';
        ta.dataset.key = f.key;
        ta.placeholder = f.placeholder || '';
        ta.value = this._data[f.key] || '';
        ta.oninput = () => { this._data[f.key] = ta.value; };
        g.appendChild(ta);
      } else if (f.type === 'file') {
        const wrap = document.createElement('div');
        wrap.className = 'fe-file';
        const zone = document.createElement('div');
        zone.className = 'fe-file-zone';
        const existing = this._files[f.key];
        zone.innerHTML = existing
          ? `<div class="fname">${existing.name} ✓</div><div>클릭하여 변경</div>`
          : '클릭하여 파일 선택';
        const input = document.createElement('input');
        input.type = 'file';
        input.style.display = 'none';
        input.onchange = async () => {
          const file = input.files[0];
          if (!file) return;
          zone.innerHTML = '<div>업로드 중…</div>';
          try {
            const url = await this._uploadFile(file);
            this._data[f.key] = url;
            this._files[f.key] = { name: file.name, url };
            zone.innerHTML = `<div class="fname">${file.name} ✓</div><div>클릭하여 변경</div>`;
          } catch (e) {
            zone.innerHTML = '<div style="color:#e53e3e">업로드 실패. 다시 시도</div>';
          }
        };
        zone.onclick = () => input.click();
        wrap.appendChild(zone);
        wrap.appendChild(input);
        g.appendChild(wrap);
      } else {
        // text | tel | email | number | date | url | password
        const inp = document.createElement('input');
        inp.className = 'fe-input';
        inp.type = f.type || 'text';
        inp.dataset.key = f.key;
        inp.placeholder = f.placeholder || '';
        if (f.min != null) inp.min = f.min;
        if (f.max != null) inp.max = f.max;
        inp.value = this._data[f.key] || '';
        inp.oninput = () => { this._data[f.key] = inp.value; };
        g.appendChild(inp);
      }

      this._attachError(g, f.key);
      return g;
    },

    _attachError(group, key) {
      const err = document.createElement('div');
      err.className = 'fe-error';
      err.id = 'fe-err-' + key;
      group.appendChild(err);
    },

    // --- Validation ---

    _validate() {
      const sections = this._getSectionsForStep(this._curStep);
      let valid = true;
      for (const sec of sections) {
        for (const f of (sec.fields || [])) {
          const errEl = document.getElementById('fe-err-' + f.key);
          if (errEl) errEl.textContent = '';
          const val = this._data[f.key];

          if (f.required) {
            let empty = false;
            if (f.type === 'checkbox') empty = !val;
            else if (f.type === 'multiselect') empty = !Array.isArray(val) || val.length === 0;
            else empty = val == null || val === '' || (typeof val === 'string' && !val.trim());
            if (empty) {
              if (errEl) errEl.textContent = f.label + ' 필수 입력';
              valid = false;
              continue;
            }
          }
          if (f.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            if (errEl) errEl.textContent = '올바른 이메일 형식이 아닙니다';
            valid = false;
          }
          if (f.type === 'tel' && val && !/^[0-9\-+\s()]{7,20}$/.test(val)) {
            if (errEl) errEl.textContent = '연락처 형식이 올바르지 않습니다';
            valid = false;
          }
          if (f.type === 'url' && val && !/^https?:\/\//i.test(val)) {
            if (errEl) errEl.textContent = 'http(s):// 로 시작해야 합니다';
            valid = false;
          }
          if (f.type === 'number' && val != null && val !== '') {
            const n = Number(val);
            if (Number.isNaN(n)) { if (errEl) errEl.textContent = '숫자여야 합니다'; valid = false; }
            else if (f.min != null && n < f.min) { if (errEl) errEl.textContent = `최소 ${f.min}`; valid = false; }
            else if (f.max != null && n > f.max) { if (errEl) errEl.textContent = `최대 ${f.max}`; valid = false; }
          }
        }
      }
      return valid;
    },

    // --- Navigation ---

    async _nextStep() {
      if (!this._validate()) return;
      await this._save(false);
      this._curStep++;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    _prevStep() {
      this._curStep--;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // --- Payload builder ---

    _buildPayload(submitted) {
      const payload = {
        _site:        this._config.site,
        _formId:      this._config.formId,
        _role:        this._config.role,
        _phase:       this._config.phase,
        _templateVer: this._config.version,
        _step:        this._curStep,
        _totalSteps:  this._totalSteps,
        _submitted:   !!submitted,
        _status:      submitted ? 1 : 0,
        _updatedAt:   new Date().toISOString()
      };
      if (this._nsPrefix) {
        payload[this._nsPrefix] = { ...this._data };
      } else {
        Object.assign(payload, this._data);
      }
      if (Object.keys(this._files).length) {
        payload._files = { [this._nsPrefix || 'root']: this._files };
      }
      if (this._cfg.token) payload._token = this._cfg.token;
      return payload;
    },

    // --- API calls ---

    async _save(silent) {
      const payload = this._buildPayload(false);
      try {
        if (!this._recordId) {
          const res = await fetch(this._cfg.apiUrl + '/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const json = await res.json();
          this._recordId = json.id;
        } else {
          await fetch(this._cfg.apiUrl + '/api/applications/' + this._recordId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        }
        if (!silent) this._flashSaved();
      } catch (e) {
        console.error('[FormEngine] save failed:', e);
        alert('저장에 실패했습니다. 다시 시도해주세요.');
      }
    },

    _flashSaved() {
      const wrap = this._container.querySelector('.fe-wrap');
      if (!wrap) return;
      const tag = document.createElement('div');
      tag.className = 'fe-saved';
      tag.textContent = '저장 완료';
      wrap.insertBefore(tag, wrap.firstChild.nextSibling);
    },

    async _submit() {
      if (!this._validate()) return;
      const payload = this._buildPayload(true);
      try {
        if (!this._recordId) {
          const res = await fetch(this._cfg.apiUrl + '/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const json = await res.json();
          this._recordId = json.id;
        } else {
          await fetch(this._cfg.apiUrl + '/api/applications/' + this._recordId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        }
        this._renderSuccess();
        if (this._cfg.onComplete) this._cfg.onComplete(this._recordId, payload);
      } catch (e) {
        console.error('[FormEngine] submit failed:', e);
        alert('제출에 실패했습니다. 다시 시도해주세요.');
      }
    },

    _renderSuccess() {
      const siteName = this._config.siteInfo?.name || this._config.site;
      const phase = (this._config.phase === 'part1') ? '1부' : (this._config.phase === 'part2' ? '2부' : '');
      this._container.innerHTML = `
        <div class="fe-wrap">
          <div class="fe-success">
            <h2>신청이 접수되었습니다</h2>
            <p>${siteName} · ${this._config.shortName || ''}</p>
            <p>접수번호: APP-${String(this._recordId).padStart(5, '0')}</p>
            <p>${phase === '1부' ? '검토 후 담당자가 연락드립니다.' : '추가 서류·검토 후 결과를 안내드립니다.'}</p>
          </div>
        </div>`;
    },

    async _uploadFile(file) {
      const res = await fetch(this._cfg.apiUrl + '/api/upload/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type || 'application/octet-stream',
          folder: 'applications/' + this._config.site + '/' + this._config.formId
        })
      });
      const { uploadUrl, fileUrl } = await res.json();
      await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type || 'application/octet-stream' },
        body: file
      });
      return fileUrl;
    }
  };

  window.FormEngine = FormEngine;
})();

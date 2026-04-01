/**
 * FormEngine — 통합 신청 폼 엔진
 *
 * 사용법:
 *   <div id="application-form"></div>
 *   <script src="https://{host}/form-engine/engine.js"></script>
 *   <script>
 *     FormEngine.init({
 *       source: 'trans_legal',
 *       type: 'user',                    // 'user' | 'expert' | 'b2b'
 *       container: '#application-form',
 *       apiUrl: 'https://{host}',
 *       step1Extra: ['company'],          // 선택적 공용 필드 on
 *       step3: [ { key, label, type, required, options } ]
 *     });
 *   </script>
 */
(function () {
  'use strict';

  // ============================================================
  //  1. FIELD DEFINITIONS
  // ============================================================

  // Step 1: 100% 공용
  const STEP1_CORE = [
    { key: 'name',  label: '성명',   type: 'text',  required: true,  placeholder: '홍길동' },
    { key: 'phone', label: '연락처', type: 'tel',   required: true,  placeholder: '010-1234-5678' },
    { key: 'email', label: '이메일', type: 'email', required: true,  placeholder: 'example@email.com' },
  ];

  // Step 1: 선택적 공용 (config에서 on/off)
  const STEP1_OPTIONAL = {
    company:   { key: 'company',   label: '소속/회사',  type: 'text', required: false, placeholder: '(주)회사명' },
    birthDate: { key: 'birthDate', label: '생년월일',   type: 'date', required: false },
    nationality: { key: 'nationality', label: '내/외국인', type: 'select', required: false, options: ['내국인', '외국인', '재외국인'] },
  };

  // Step 2 Base: 공용
  const STEP2_BASE = [
    { key: 'privacyConsent', label: '개인정보 수집 및 이용에 동의합니다', type: 'checkbox', required: true },
  ];

  // Step 2 Base: 선택적 공용
  const STEP2_OPTIONAL = {
    job:      { key: 'job', label: '직업', type: 'select', required: false, options: ['학생', '대학생', '직장인', '교사', '프리랜서', '기타'] },
    channel:  { key: 'channel', label: '알게 된 경로', type: 'multiselect', required: false, options: ['네이버 검색', '인스타그램', '유튜브', '지인 추천', '기타'] },
    intro:    { key: 'intro', label: '자기소개/요청사항', type: 'textarea', required: false, placeholder: '간단히 적어주세요' },
  };

  // Step 2: 유형별 추가 필드
  const STEP2_TYPE = {
    user: [
      { key: 'serviceType',  label: '서비스 종류',  type: 'text',     required: false, placeholder: '원하시는 서비스' },
      { key: 'deadline',     label: '희망 일정',    type: 'date',     required: false },
      { key: 'budget',       label: '예산',         type: 'text',     required: false, placeholder: '예산 범위' },
      { key: 'description',  label: '요청 사항',    type: 'textarea', required: false, placeholder: '상세 내용을 입력해주세요' },
    ],
    expert: [
      { key: 'specialty',    label: '전문 분야',    type: 'text',     required: true, placeholder: '주요 전문 분야' },
      { key: 'careerYears',  label: '경력(년)',     type: 'number',   required: false },
      { key: 'experience',   label: '경력 요약',    type: 'textarea', required: true, placeholder: '주요 경력 및 프로젝트' },
      { key: 'portfolio',    label: '포트폴리오',   type: 'file',     required: false },
      { key: 'resume',       label: '이력서',       type: 'file',     required: false },
    ],
    b2b: [
      { key: 'orgName',      label: '기관/기업명',       type: 'text', required: true, placeholder: '(주)회사명' },
      { key: 'bizNumber',    label: '사업자등록번호',     type: 'text', required: false, placeholder: '000-00-00000' },
      { key: 'managerName',  label: '담당자명',          type: 'text', required: true },
      { key: 'contractType', label: '계약 유형',         type: 'select', required: false, options: ['단건', '연간', '프로젝트', '기타'] },
      { key: 'volume',       label: '예상 물량/규모',     type: 'text', required: false },
      { key: 'proposal',     label: '제안/요청 내용',     type: 'textarea', required: false, placeholder: '상세 내용' },
    ],
  };

  // ============================================================
  //  2. STYLES
  // ============================================================

  const CSS = `
.fe-wrap{font-family:'Pretendard',-apple-system,BlinkMacSystemFont,sans-serif;max-width:640px;margin:0 auto;color:#333}
.fe-wrap *{box-sizing:border-box}
.fe-progress{display:flex;gap:0;margin-bottom:24px}
.fe-step-dot{flex:1;text-align:center;padding:10px 0;font-size:12px;font-weight:600;border-bottom:3px solid #e2e8f0;color:#999;transition:.2s}
.fe-step-dot.active{border-color:#1a365d;color:#1a365d}
.fe-step-dot.done{border-color:#16a34a;color:#16a34a}
.fe-group{margin-bottom:16px}
.fe-label{display:block;font-size:12px;font-weight:600;color:#555;margin-bottom:4px}
.fe-label .req{color:#e53e3e;margin-left:2px}
.fe-input,.fe-select,.fe-textarea{width:100%;padding:10px 12px;border:1px solid #d1d5db;border-radius:8px;font-size:13px;outline:none;transition:.15s}
.fe-input:focus,.fe-select:focus,.fe-textarea:focus{border-color:#1a365d;box-shadow:0 0 0 3px rgba(26,54,93,.1)}
.fe-textarea{resize:vertical;min-height:80px}
.fe-select{appearance:none;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%23666' fill='none'/%3E%3C/svg%3E") right 12px center no-repeat #fff}
.fe-check-row{display:flex;align-items:center;gap:8px;padding:8px 0}
.fe-check-row input[type=checkbox]{width:18px;height:18px;accent-color:#1a365d}
.fe-check-row label{font-size:12px;color:#555;cursor:pointer}
.fe-multi{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}
.fe-chip{padding:6px 14px;border:1px solid #d1d5db;border-radius:20px;font-size:12px;cursor:pointer;transition:.15s;user-select:none}
.fe-chip:hover{border-color:#1a365d}
.fe-chip.sel{background:#1a365d;color:#fff;border-color:#1a365d}
.fe-file-zone{border:2px dashed #d1d5db;border-radius:8px;padding:20px;text-align:center;font-size:12px;color:#888;cursor:pointer;transition:.15s}
.fe-file-zone:hover{border-color:#1a365d;color:#1a365d}
.fe-file-zone .name{margin-top:6px;font-weight:600;color:#333}
.fe-btns{display:flex;gap:8px;margin-top:24px}
.fe-btn{flex:1;padding:12px;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;transition:.15s}
.fe-btn-prev{background:#e2e8f0;color:#555}.fe-btn-prev:hover{background:#cbd5e1}
.fe-btn-next{background:#1a365d;color:#fff}.fe-btn-next:hover{background:#2d4a7c}
.fe-btn-submit{background:#16a34a;color:#fff}.fe-btn-submit:hover{background:#15803d}
.fe-btn:disabled{opacity:.5;cursor:not-allowed}
.fe-error{font-size:11px;color:#e53e3e;margin-top:2px;display:none}
.fe-success{text-align:center;padding:60px 20px}
.fe-success h2{font-size:20px;color:#16a34a;margin-bottom:8px}
.fe-success p{font-size:13px;color:#666}
.fe-saved{display:inline-block;padding:4px 12px;background:#f0fdf4;color:#16a34a;border-radius:4px;font-size:11px;font-weight:600;margin-bottom:12px;animation:fe-fade 2s forwards}
@keyframes fe-fade{0%,70%{opacity:1}100%{opacity:0}}
`;

  // ============================================================
  //  3. ENGINE
  // ============================================================

  const FormEngine = {
    _cfg: null,
    _data: {},
    _step: 1,
    _id: null,
    _container: null,
    _totalSteps: 3,
    _fileUrls: {},

    init(cfg) {
      this._cfg = {
        source: cfg.source || 'unknown',
        type: cfg.type || 'user',
        apiUrl: (cfg.apiUrl || '').replace(/\/$/, ''),
        container: cfg.container || '#application-form',
        step1Extra: cfg.step1Extra || [],
        step2Extra: cfg.step2Extra || [],
        step3: cfg.step3 || [],
        allowedTypes: cfg.allowedTypes || null,
        labels: cfg.labels || {},
        onComplete: cfg.onComplete || null,
      };

      if (!this._cfg.step3.length) this._totalSteps = 2;

      this._container = typeof cfg.container === 'string'
        ? document.querySelector(cfg.container)
        : cfg.container;

      if (!this._container) {
        console.error('[FormEngine] Container not found:', cfg.container);
        return;
      }

      // Inject styles
      if (!document.getElementById('fe-styles')) {
        const style = document.createElement('style');
        style.id = 'fe-styles';
        style.textContent = CSS;
        document.head.appendChild(style);
      }

      this._data = {
        _source: this._cfg.source,
        _type: this._cfg.type,
        _step: 1,
        _status: 0,
      };

      this.render();
    },

    // --- Field builders ---

    _getStep1Fields() {
      const fields = [...STEP1_CORE];
      for (const key of this._cfg.step1Extra) {
        if (STEP1_OPTIONAL[key]) fields.push(STEP1_OPTIONAL[key]);
      }
      return fields;
    },

    _getStep2Fields() {
      const fields = [];
      // Type-specific fields first
      const typeFields = STEP2_TYPE[this._cfg.type] || [];
      fields.push(...typeFields);
      // Optional base fields
      for (const key of this._cfg.step2Extra) {
        if (STEP2_OPTIONAL[key]) fields.push(STEP2_OPTIONAL[key]);
      }
      // Consent always last
      fields.push(...STEP2_BASE);
      return fields;
    },

    _getStep3Fields() {
      return this._cfg.step3 || [];
    },

    // --- Rendering ---

    render() {
      const wrap = document.createElement('div');
      wrap.className = 'fe-wrap';

      // Progress bar
      const prog = document.createElement('div');
      prog.className = 'fe-progress';
      const stepLabels = ['기본 정보', '상세 정보'];
      if (this._totalSteps === 3) stepLabels.push('추가 정보');
      stepLabels.forEach((label, i) => {
        const dot = document.createElement('div');
        dot.className = 'fe-step-dot';
        if (i + 1 < this._step) dot.classList.add('done');
        if (i + 1 === this._step) dot.classList.add('active');
        dot.textContent = `${i + 1}. ${label}`;
        prog.appendChild(dot);
      });
      wrap.appendChild(prog);

      // Fields
      let fields;
      if (this._step === 1) fields = this._getStep1Fields();
      else if (this._step === 2) fields = this._getStep2Fields();
      else fields = this._getStep3Fields();

      const form = document.createElement('div');
      form.className = 'fe-fields';
      fields.forEach(f => form.appendChild(this._renderField(f)));
      wrap.appendChild(form);

      // Buttons
      const btns = document.createElement('div');
      btns.className = 'fe-btns';

      if (this._step > 1) {
        const prev = document.createElement('button');
        prev.className = 'fe-btn fe-btn-prev';
        prev.textContent = '이전';
        prev.onclick = () => this._prevStep();
        btns.appendChild(prev);
      }

      if (this._step < this._totalSteps) {
        const next = document.createElement('button');
        next.className = 'fe-btn fe-btn-next';
        next.textContent = '저장 후 다음';
        next.onclick = () => this._nextStep();
        btns.appendChild(next);
      }

      if (this._step === this._totalSteps) {
        const save = document.createElement('button');
        save.className = 'fe-btn fe-btn-next';
        save.textContent = '저장하기';
        save.onclick = () => this._save();
        btns.appendChild(save);

        const submit = document.createElement('button');
        submit.className = 'fe-btn fe-btn-submit';
        submit.textContent = '최종 제출';
        submit.onclick = () => this._submit();
        btns.appendChild(submit);
      }

      wrap.appendChild(btns);

      this._container.innerHTML = '';
      this._container.appendChild(wrap);

      // Restore values
      this._restoreValues();
    },

    _renderField(f) {
      const group = document.createElement('div');
      group.className = 'fe-group';

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
        lbl.textContent = f.label;
        if (f.required) lbl.innerHTML += ' <span style="color:#e53e3e">*</span>';
        row.appendChild(cb);
        row.appendChild(lbl);
        group.appendChild(row);
        return group;
      }

      const label = document.createElement('label');
      label.className = 'fe-label';
      label.textContent = f.label;
      if (f.required) label.innerHTML += '<span class="req">*</span>';
      group.appendChild(label);

      if (f.type === 'select') {
        const sel = document.createElement('select');
        sel.className = 'fe-select';
        sel.dataset.key = f.key;
        const defOpt = document.createElement('option');
        defOpt.value = '';
        defOpt.textContent = '선택해주세요';
        sel.appendChild(defOpt);
        (f.options || []).forEach(o => {
          const opt = document.createElement('option');
          opt.value = o;
          opt.textContent = o;
          if (this._data[f.key] === o) opt.selected = true;
          sel.appendChild(opt);
        });
        sel.onchange = () => { this._data[f.key] = sel.value; };
        group.appendChild(sel);
      } else if (f.type === 'multiselect') {
        const multi = document.createElement('div');
        multi.className = 'fe-multi';
        const selected = this._data[f.key] || [];
        (f.options || []).forEach(o => {
          const chip = document.createElement('span');
          chip.className = 'fe-chip' + (selected.includes(o) ? ' sel' : '');
          chip.textContent = o;
          chip.onclick = () => {
            if (!this._data[f.key]) this._data[f.key] = [];
            const idx = this._data[f.key].indexOf(o);
            if (idx >= 0) { this._data[f.key].splice(idx, 1); chip.classList.remove('sel'); }
            else { this._data[f.key].push(o); chip.classList.add('sel'); }
          };
          multi.appendChild(chip);
        });
        group.appendChild(multi);
      } else if (f.type === 'textarea') {
        const ta = document.createElement('textarea');
        ta.className = 'fe-textarea';
        ta.dataset.key = f.key;
        ta.placeholder = f.placeholder || '';
        ta.value = this._data[f.key] || '';
        ta.oninput = () => { this._data[f.key] = ta.value; };
        group.appendChild(ta);
      } else if (f.type === 'file') {
        const zone = document.createElement('div');
        zone.className = 'fe-file-zone';
        zone.dataset.key = f.key;
        const existing = this._fileUrls[f.key];
        zone.innerHTML = existing
          ? `<div class="name">${existing.name} &#10004;</div><div>클릭하여 변경</div>`
          : '클릭하여 파일 선택';
        const input = document.createElement('input');
        input.type = 'file';
        input.style.display = 'none';
        input.onchange = async () => {
          const file = input.files[0];
          if (!file) return;
          zone.innerHTML = '<div class="name">업로드 중...</div>';
          try {
            const url = await this._uploadFile(file, f.key);
            this._data[f.key] = url;
            this._fileUrls[f.key] = { name: file.name, url };
            zone.innerHTML = `<div class="name">${file.name} &#10004;</div><div>클릭하여 변경</div>`;
          } catch (e) {
            zone.innerHTML = '<div style="color:#e53e3e">업로드 실패. 다시 시도해주세요.</div>';
          }
        };
        zone.onclick = () => input.click();
        zone.appendChild(input);
        group.appendChild(zone);
      } else {
        const inp = document.createElement('input');
        inp.className = 'fe-input';
        inp.type = f.type || 'text';
        inp.dataset.key = f.key;
        inp.placeholder = f.placeholder || '';
        inp.value = this._data[f.key] || '';
        inp.oninput = () => { this._data[f.key] = inp.value; };
        group.appendChild(inp);
      }

      const err = document.createElement('div');
      err.className = 'fe-error';
      err.id = 'fe-err-' + f.key;
      group.appendChild(err);

      return group;
    },

    _restoreValues() {
      this._container.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (this._data[key] !== undefined && this._data[key] !== null) {
          if (el.tagName === 'SELECT') el.value = this._data[key];
          else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = this._data[key];
        }
      });
    },

    // --- Validation ---

    _validate() {
      let fields;
      if (this._step === 1) fields = this._getStep1Fields();
      else if (this._step === 2) fields = this._getStep2Fields();
      else fields = this._getStep3Fields();

      let valid = true;
      for (const f of fields) {
        const errEl = document.getElementById('fe-err-' + f.key);
        const val = this._data[f.key];

        if (f.required) {
          let empty = false;
          if (f.type === 'checkbox') empty = !val;
          else if (f.type === 'multiselect') empty = !val || !val.length;
          else empty = !val || (typeof val === 'string' && !val.trim());

          if (empty) {
            if (errEl) { errEl.textContent = f.label + ' 필수 입력'; errEl.style.display = 'block'; }
            valid = false;
            continue;
          }
        }

        if (f.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          if (errEl) { errEl.textContent = '올바른 이메일 형식이 아닙니다'; errEl.style.display = 'block'; }
          valid = false;
          continue;
        }

        if (errEl) errEl.style.display = 'none';
      }
      return valid;
    },

    // --- Navigation ---

    async _nextStep() {
      if (!this._validate()) return;
      await this._save();
      this._step++;
      this._data._step = this._step;
      this.render();
    },

    _prevStep() {
      this._step--;
      this.render();
    },

    // --- API ---

    async _save() {
      if (!this._validate()) return;
      this._data._step = this._step;

      try {
        if (!this._id) {
          const res = await fetch(this._cfg.apiUrl + '/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this._data),
          });
          const json = await res.json();
          this._id = json.id;
        } else {
          await fetch(this._cfg.apiUrl + '/api/applications/' + this._id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this._data),
          });
        }

        // Show saved indicator
        const saved = document.createElement('div');
        saved.className = 'fe-saved';
        saved.textContent = '저장 완료';
        const wrap = this._container.querySelector('.fe-wrap');
        if (wrap) wrap.insertBefore(saved, wrap.firstChild);
      } catch (e) {
        console.error('[FormEngine] Save failed:', e);
        alert('저장에 실패했습니다. 다시 시도해주세요.');
      }
    },

    async _submit() {
      if (!this._validate()) return;
      this._data._step = this._totalSteps;
      this._data._submitted = true;

      try {
        if (!this._id) {
          const res = await fetch(this._cfg.apiUrl + '/api/applications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this._data),
          });
          const json = await res.json();
          this._id = json.id;
        } else {
          await fetch(this._cfg.apiUrl + '/api/applications/' + this._id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this._data),
          });
        }

        // Success screen
        this._container.innerHTML = `
          <div class="fe-wrap">
            <div class="fe-success">
              <h2>신청이 완료되었습니다</h2>
              <p>접수번호: APP-${String(this._id).padStart(4, '0')}</p>
              <p>검토 후 연락드리겠습니다. 감사합니다.</p>
            </div>
          </div>`;

        if (this._cfg.onComplete) this._cfg.onComplete(this._id, this._data);
      } catch (e) {
        console.error('[FormEngine] Submit failed:', e);
        alert('제출에 실패했습니다. 다시 시도해주세요.');
      }
    },

    async _uploadFile(file, fieldKey) {
      const res = await fetch(this._cfg.apiUrl + '/api/upload/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
          folder: 'applications/' + this._cfg.source,
        }),
      });
      const { uploadUrl, fileUrl } = await res.json();

      await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      });

      return fileUrl;
    },
  };

  // Expose globally
  window.FormEngine = FormEngine;
})();

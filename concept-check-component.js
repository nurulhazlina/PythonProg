// ═══════════════════════════════════════════════════════════════
//  concept-check-component.js  v2
//  Per-step 5-question MCQ concept check.
//  After submit: unlocks the Reflective Journal (id="tierJ")
//  and enables the tj-submit button.
// ═══════════════════════════════════════════════════════════════

function initConceptCheck(opts) {
  var step = opts.step;
  var wrap = document.getElementById(opts.containerId || 'concept-check-wrap');
  if (!wrap) return;

  var questions = STEP_CHECK_QUESTIONS[step];
  if (!questions || questions.length === 0) return;

  /* ── Restore state ────────────────────────────────────────── */
  var d = lmsGet();
  if (d.concept_step && d.concept_step.submitted) {
    renderSubmittedFull(wrap, d.concept_step, questions);
    _unlockJournal();
    return;
  }

  /* ── Build HTML ───────────────────────────────────────────── */
  var html = '<div class="concept-check-inner">';
  html += '<p class="concept-desc">Answer all 5 questions, then the Reflective Journal will unlock.</p>';

  questions.forEach(function(q, qi) {
    html += '<div class="concept-q" id="cq-' + qi + '">';
    html += '<p class="concept-q-text"><strong>' + (qi + 1) + '.</strong> ' + q.q.replace(/\n/g, '<br>') + '</p>';
    html += '<div class="concept-opts">';
    q.opts.forEach(function(opt, oi) {
      var id = 'cq' + qi + '_' + oi;
      html += '<label class="concept-opt" for="' + id + '">';
      html += '<input type="radio" name="cq' + qi + '" id="' + id + '" value="' + oi + '">';
      html += '<span>' + opt + '</span>';
      html += '</label>';
    });
    html += '</div>';
    html += '<div class="concept-feedback" id="cfb-' + qi + '" hidden></div>';
    html += '</div>';
  });

  html += '<div id="concept-global-fb" style="margin-top:10px"></div>';
  html += '<button class="btn" id="concept-submit" style="background:var(--blue);margin-top:12px">Submit Answers &amp; Unlock Journal</button>';
  html += '</div>';
  wrap.innerHTML = html;

  document.getElementById('concept-submit').addEventListener('click', function() {
    submitConceptCheck(step, questions, wrap);
  });
}

function submitConceptCheck(step, questions, wrap) {
  var answers = [];
  var allAnswered = true;

  questions.forEach(function(q, qi) {
    var sel = wrap.querySelector('input[name="cq' + qi + '"]:checked');
    if (!sel) { allAnswered = false; answers.push(null); return; }
    var chosen = parseInt(sel.value, 10);
    answers.push({ answer: chosen, correct: (chosen === q.ans) });
  });

  if (!allAnswered) {
    var gfb = document.getElementById('concept-global-fb');
    gfb.textContent = 'Please answer all 5 questions before submitting.';
    gfb.style.color = 'var(--red, #c0392b)';
    gfb.removeAttribute('hidden');
    return;
  }

  /* Show per-question feedback */
  questions.forEach(function(q, qi) {
    var fb = document.getElementById('cfb-' + qi);
    var a = answers[qi];
    fb.removeAttribute('hidden');
    if (a && a.correct) {
      fb.textContent = '✓ Correct!';
      fb.style.color = 'var(--green, #27ae60)';
    } else {
      fb.textContent = '✗ Correct answer: ' + q.opts[q.ans];
      fb.style.color = 'var(--red, #c0392b)';
    }
    wrap.querySelectorAll('input[name="cq' + qi + '"]').forEach(function(r){ r.disabled = true; });
  });

  var correctCount = answers.filter(function(a){ return a && a.correct; }).length;
  var scorePct = Math.round((correctCount / questions.length) * 100);

  var btn = document.getElementById('concept-submit');
  btn.disabled = true;
  btn.textContent = 'Answers submitted ✓';

  var gfb = document.getElementById('concept-global-fb');
  gfb.removeAttribute('hidden');
  gfb.innerHTML = '<strong>Score: ' + correctCount + ' / ' + questions.length + ' (' + scorePct + '%).</strong> The Reflective Journal is now unlocked below!';
  gfb.style.color = scorePct >= 60 ? 'var(--green, #27ae60)' : 'var(--orange, #e67e22)';

  /* Save to localStorage */
  var payload = { submitted: true, answers: answers, score_pct: scorePct, ts: Date.now() };
  var d = lmsGet();
  d.concept_step = payload;
  lmsSet(d);

  /* Post to Google Sheets */
  postToSheets({
    type: 'concept',
    step: step,
    test_type: 'step',
    answers: answers.map(function(a, i){
      return {
        answer: questions[i].opts[a ? a.answer : 0],
        correct: a ? (a.correct ? 1 : 0) : 0
      };
    }),
    score_pct: scorePct
  });

  /* Unlock the journal */
  _unlockJournal();
}

function _unlockJournal() {
  var journalCard = document.getElementById('tierJ');
  if (journalCard) {
    journalCard.classList.remove('tier-locked');
    journalCard.removeAttribute('aria-disabled');
    var li = journalCard.querySelector('.lock-icon');
    if (li) li.textContent = '📖';
  }
  var tjBtn = document.getElementById('tj-submit');
  if (tjBtn) tjBtn.disabled = false;
  /* scroll into view */
  setTimeout(function() {
    if (journalCard) journalCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 400);
}

function renderSubmittedFull(wrap, saved, questions) {
  var sc = saved.score_pct !== undefined ? saved.score_pct : '—';
  var html = '<div class="concept-check-inner concept-done">';
  html += '<p><strong>✓ Concept check completed.</strong> Score: <strong>' + sc + '%</strong></p>';
  if (saved.answers && questions) {
    saved.answers.forEach(function(a, qi) {
      var q = questions[qi];
      if (!q || a === null) return;
      var isCorrect = a && a.correct;
      html += '<div class="concept-q">';
      html += '<p class="concept-q-text"><strong>' + (qi+1) + '.</strong> ' + q.q.replace(/\n/g,'<br>') + '</p>';
      html += '<div class="concept-feedback" style="color:' + (isCorrect ? 'var(--green,#27ae60)' : 'var(--red,#c0392b)') + ';font-size:14px">';
      if (isCorrect) {
        html += '✓ ' + (q.opts[a.answer] || '');
      } else {
        html += '✗ Your answer: ' + (q.opts[a.answer] || '?') + ' — Correct: ' + q.opts[q.ans];
      }
      html += '</div></div>';
    });
  }
  html += '</div>';
  wrap.innerHTML = html;
}

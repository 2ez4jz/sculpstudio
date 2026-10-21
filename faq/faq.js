(function () {
  'use strict';
  var root = document.getElementById('sculp-site');
  root.classList.add('js');
  var input = document.getElementById('faq-search');
  var clear = document.getElementById('clear-search');
  var status = document.getElementById('search-status');
  var categories = Array.from(document.querySelectorAll('.faq-category'));
  var items = Array.from(document.querySelectorAll('.faq-item'));
  var links = Array.from(document.querySelectorAll('[data-category]'));
  var initialOpen = new Set();
  var searching = false;
  var timer;
  var menu = document.getElementById('sculp-nav');
  var toggle = document.querySelector('.mobile-toggle');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Reuse collectors only when already present. Never install or queue a new one.
  // Search analytics contain known guide terms, never arbitrary visitor text.
  function track(name, params) {
    var detail = Object.assign({ page: 'bridal_guide' }, params || {});
    document.dispatchEvent(new CustomEvent('sculp:analytics', { detail: { event: name, params: detail } }));
    if (typeof window.gtag === 'function') window.gtag('event', name, detail);
    if (typeof window.clarity === 'function') window.clarity('event', name);
  }
  function normal(value) {
    return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  var index = items.map(function (item) {
    return normal(item.querySelector('h3').textContent + ' ' + item.querySelector('.answer p').textContent);
  });
  function activeCategory(id) {
    links.forEach(function (link) {
      if (link.dataset.category === id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function filter() {
    var query = normal(input.value);
    var terms = query.split(' ').filter(Boolean);
    if (terms.length && !searching) initialOpen = new Set(items.filter(function (item) { return item.open; }));
    searching = terms.length > 0;
    var count = 0;
    items.forEach(function (item, i) {
      var match = terms.every(function (term) { return index[i].includes(term); });
      item.hidden = !match;
      if (match) count++;
      item.open = searching ? match : initialOpen.has(item);
    });
    categories.forEach(function (cat) {
      cat.hidden = !Array.from(cat.querySelectorAll('.faq-item')).some(function (item) { return !item.hidden; });
      var link = links.find(function (a) { return a.dataset.category === cat.id; });
      link.hidden = cat.hidden;
      var matches = cat.querySelectorAll('.faq-item:not([hidden])').length;
      link.querySelector('.category-count').textContent = String(matches).padStart(2, '0');
      link.querySelector('.category-count').setAttribute('aria-label', matches + (matches === 1 ? ' question' : ' questions'));
    });
    var first = categories.find(function (cat) { return !cat.hidden; });
    activeCategory(first ? first.id : '');
    clear.hidden = !input.value;
    document.getElementById('no-results').hidden = count !== 0;
    status.textContent = searching ? count + (count === 1 ? ' answer found.' : ' answers found.') : '20 questions, thoughtfully answered.';
    window.clearTimeout(timer);
    if (searching) timer = window.setTimeout(function () {
      var known = terms.filter(function (term) { return /^(book|booking|trial|trials|travel|artist|hair|makeup|wedding|day|full|half|price|allergies|cancel|services|location|family|schedule)$/.test(term); });
      track(count ? 'faq_search' : 'faq_search_no_results', { search_terms: known.join(' '), result_count: count });
    }, 550);
  }
  function reset() { input.value = ''; filter(); input.focus({ preventScroll: true }); }
  input.addEventListener('input', filter);
  input.addEventListener('keydown', function (e) { if (e.key === 'Escape') reset(); });
  clear.addEventListener('click', reset);
  document.getElementById('reset-search').addEventListener('click', reset);
  document.querySelector('.search-area').hidden = false;
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open && !searching) track('faq_open', { question_id: item.id, category: item.closest('.faq-category').id });
    });
  });
  function openHash() {
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
    var target = document.getElementById(id);
    if (!target || (!target.classList.contains('faq-item') && !target.classList.contains('faq-category'))) return;
    if (input.value) { input.value = ''; filter(); }
    if (target.classList.contains('faq-item')) target.open = true;
    activeCategory(target.classList.contains('faq-category') ? target.id : target.closest('.faq-category').id);
    requestAnimationFrame(function () { target.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' }); });
  }
  window.addEventListener('hashchange', openHash);
  openHash();
  links.forEach(function (link) { link.addEventListener('click', function () { activeCategory(link.dataset.category); }); });
  if ('IntersectionObserver' in window) {
    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target); });
      var first = categories.find(function (cat) { return visible.has(cat) && !cat.hidden; });
      if (first) activeCategory(first.id);
    }, { rootMargin: '-150px 0px -50% 0px', threshold: 0 });
    categories.forEach(function (cat) { observer.observe(cat); });
  }
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !e.target.closest('.mast')) { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
  var mast = document.querySelector('.mast');
  window.addEventListener('scroll', function () { mast.classList.toggle('scrolled', window.scrollY > 28); }, { passive: true });
  var journey = document.querySelector('.journey-nav');
  var stages = Array.from(journey.querySelectorAll('[data-stage]'));
  var panels = Array.from(document.querySelectorAll('.journey-panel'));
  journey.setAttribute('role', 'tablist'); journey.dataset.enhanced = '';
  document.querySelector('.journey-panels').dataset.enhanced = '';
  function selectStage(n, focus, animate) {
    stages.forEach(function (stage, i) { stage.setAttribute('aria-selected', String(i === n)); stage.tabIndex = i === n ? 0 : -1; });
    panels.forEach(function (panel, i) { panel.hidden = i !== n; panel.classList.toggle('is-entering', i === n && animate && !reduce.matches); });
    journey.style.setProperty('--stage', String(n));
    journey.querySelector('.journey-track span').style.transform = 'scaleX(' + n / 3 + ')';
    if (focus) stages[n].focus({ preventScroll: true });
    if (animate) {
      var stageRect = stages[n].getBoundingClientRect(), navRect = journey.getBoundingClientRect();
      if (stageRect.left < navRect.left || stageRect.right > navRect.right) journey.scrollTo({ left: stages[n].offsetLeft - 8, behavior: reduce.matches ? 'auto' : 'smooth' });
      track('bridal_journey_stage', { stage: stages[n].id.replace('stage-', '') });
    }
  }
  stages.forEach(function (stage, n) {
    stage.setAttribute('role', 'tab');
    panels[n].setAttribute('role', 'tabpanel'); panels[n].tabIndex = 0;
    stage.addEventListener('click', function () { selectStage(n, false, true); });
    stage.addEventListener('keydown', function (e) {
      var next = n;
      if (e.key === 'ArrowRight') next = (n + 1) % 4;
      else if (e.key === 'ArrowLeft') next = (n + 3) % 4;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = 3;
      else return;
      e.preventDefault(); selectStage(next, true, true);
    });
  });
  selectStage(0, false, false);
  root.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (a && (a.getAttribute('href') || '').startsWith('/#book')) track('faq_enquiry_click', { placement: a.dataset.enquiry || 'navigation' });
  });
  track('faq_view');
})();

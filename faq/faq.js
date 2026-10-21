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
  var marker = journey.querySelector('.journey-marker');
  var rail = journey.querySelector('.journey-track');
  var controls = document.querySelector('.journey-controls');
  var previous = controls.querySelector('.journey-previous');
  var next = controls.querySelector('.journey-next');
  var current = 0;
  var entrance = [];
  var scenes = Array.from(document.querySelectorAll('.journey-scene'));
  var sceneMotion = [];
  function cancelEntrance() { entrance.forEach(function (animation) { animation.cancel(); }); entrance = []; }
  function cancelScene() { sceneMotion.forEach(function (animation) { animation.cancel(); }); sceneMotion = []; }
  function playScene(n) {
    cancelScene();
    if (reduce.matches || typeof scenes[n].animate !== 'function') return;
    sceneMotion.push(scenes[n].animate([{ opacity: 0.5 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' }));
    var turns = { 'nod-left': -7, 'nod-right': 6, reach: -8, calendar: -2, point: 8, mirror: -5, brush: -13, turn: 8, arrange: -8, 'bride-step': 10, 'groom-step': -9, 'joined-hands': -5, wave: -12 };
    Array.from(scenes[n].querySelectorAll('[data-motion]')).forEach(function (part, i) {
      part.style.transformOrigin = part.dataset.pivot.split(' ').map(function (value) { return value + 'px'; }).join(' ');
      var middle = 'rotate(' + (turns[part.dataset.motion] || 0) + 'deg)';
      if (part.dataset.motion === 'veil') middle = 'skewX(-4deg) scaleX(1.04)';
      if (part.dataset.motion === 'skirt') middle = 'rotate(3deg) scaleX(1.04)';
      sceneMotion.push(part.animate([
        { transform: 'none' }, { transform: middle, offset: 0.45 }, { transform: 'none' }
      ], { duration: 680, delay: i % 3 * 35, easing: 'cubic-bezier(.45,0,.25,1)' }));
    });
  }
  function positionJourney(immediate) {
    var bounds = journey.getBoundingClientRect();
    var nodes = stages.map(function (stage) { return stage.querySelector('.stage-node').getBoundingClientRect(); });
    var first = nodes[0], last = nodes[nodes.length - 1], selected = nodes[current];
    if (immediate) journey.classList.add('is-positioning');
    rail.style.left = (first.left + first.width / 2 - bounds.left) + 'px';
    rail.style.top = (first.top + first.height / 2 - bounds.top) + 'px';
    rail.style.width = (last.left + last.width / 2 - first.left - first.width / 2) + 'px';
    marker.style.width = selected.width + 'px'; marker.style.height = selected.height + 'px';
    marker.style.transform = 'translate(' + (selected.left - bounds.left) + 'px,' + (selected.top - bounds.top) + 'px)';
    if (immediate) { marker.getBoundingClientRect(); journey.classList.remove('is-positioning'); }
  }
  function revealPanel(n, direction) {
    if (reduce.matches || typeof panels[n].animate !== 'function') return;
    var parts = panels[n].querySelectorAll('h3, .journey-copy p, .text-link, li');
    Array.from(parts).forEach(function (part, i) {
      entrance.push(part.animate([
        { opacity: 0.35, transform: 'translateX(' + direction * 14 + 'px)' },
        { opacity: 1, transform: 'translateX(0)' }
      ], { duration: 340, delay: Math.min(i, 4) * 35, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
    });
  }
  journey.setAttribute('role', 'tablist'); journey.dataset.enhanced = '';
  document.querySelector('.journey-panels').dataset.enhanced = '';
  controls.hidden = false;
  function selectStage(n, focus, animate) {
    var changed = n !== current;
    var direction = n > current ? 1 : -1;
    current = n;
    cancelEntrance();
    cancelScene();
    scenes.forEach(function (scene, i) { scene.toggleAttribute('hidden', i !== n); });
    stages.forEach(function (stage, i) { stage.setAttribute('aria-selected', String(i === n)); stage.tabIndex = i === n ? 0 : -1; });
    panels.forEach(function (panel, i) { panel.hidden = i !== n; });
    marker.querySelector('span').textContent = String(n + 1).padStart(2, '0');
    rail.querySelector('span').style.transform = 'scaleX(' + n / (stages.length - 1) + ')';
    previous.disabled = n === 0; next.disabled = n === stages.length - 1;
    previous.setAttribute('aria-label', n > 0 ? 'Previous: ' + stages[n - 1].getAttribute('aria-label') : 'Previous journey stage');
    next.setAttribute('aria-label', n < stages.length - 1 ? 'Next: ' + stages[n + 1].getAttribute('aria-label') : 'Next journey stage');
    controls.querySelector('.journey-count').textContent = (n + 1) + ' of ' + stages.length;
    positionJourney(!animate || reduce.matches);
    if (focus) stages[n].focus({ preventScroll: true });
    if (animate) playScene(n);
    if (animate && changed) {
      revealPanel(n, direction);
      controls.querySelector('.journey-status').textContent = stages[n].getAttribute('aria-label') + ': ' + panels[n].querySelector('h3').textContent;
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
  previous.addEventListener('click', function () { if (current > 0) selectStage(current - 1, false, true); });
  next.addEventListener('click', function () { if (current < stages.length - 1) selectStage(current + 1, false, true); });
  selectStage(0, false, false);
  // A single short gesture on first view; further gestures follow stage selection.
  if ('IntersectionObserver' in window) {
    var sceneObserver = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) { playScene(current); sceneObserver.disconnect(); }
    }, { threshold: 0.3 });
    sceneObserver.observe(document.querySelector('.journey-visual'));
  }
  // Re-measure after responsive layout/font changes, without animating a resize.
  if ('ResizeObserver' in window) new ResizeObserver(function () { positionJourney(true); }).observe(journey);
  else window.addEventListener('resize', function () { positionJourney(true); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { positionJourney(true); });
  function motionPreferenceChanged() {
    if (reduce.matches) { cancelEntrance(); cancelScene(); positionJourney(true); }
  }
  if (reduce.addEventListener) reduce.addEventListener('change', motionPreferenceChanged);
  else if (reduce.addListener) reduce.addListener(motionPreferenceChanged);
  root.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (a && (a.getAttribute('href') || '').startsWith('/#book')) track('faq_enquiry_click', { placement: a.dataset.enquiry || 'navigation' });
  });
  track('faq_view');
})();

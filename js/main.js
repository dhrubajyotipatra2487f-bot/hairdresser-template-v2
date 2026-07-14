// hairdresser-landing v2 — site logic (no dependencies)
// motion-anything recipe scripts self-initialize; this file adds nav, tabs, quiz, sticky bar and modals.
(function () {
  'use strict';
  function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  function $(s, c){ return (c||document).querySelector(s); }
  function $all(s, c){ return [].slice.call((c||document).querySelectorAll(s)); }

  ready(function () {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var nav = $('nav');

    // preloader — fade out shortly after load (snappy under reduced-motion)
    var pre = $('#preloader');
    function killPre(){ if (!pre) return; pre.classList.add('done'); setTimeout(function(){ if (pre && pre.parentNode) pre.parentNode.removeChild(pre); }, 700); }
    if (pre) { if (reduce) { setTimeout(killPre, 200); } else { window.addEventListener('load', function(){ setTimeout(killPre, 900); }); setTimeout(killPre, 3500); } }

    // nav shadow on scroll
    function onScroll(){ if (nav) nav.classList.toggle('scrolled', window.scrollY > 10); }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // --- modals (generic: any [data-open="name"] opens #name) ---
    var modals = {};
    $all('.modal').forEach(function (m){ modals[m.id] = m; });
    var lastFocus = null;
    function openModal(name, trigger){
      if (!modals[name]) return;
      $all('.modal.open').forEach(function (m){ m.classList.remove('open'); m.setAttribute('aria-hidden','true'); });
      lastFocus = trigger || null;
      modals[name].classList.add('open');
      modals[name].setAttribute('aria-hidden','false');
      document.body.classList.add('modal-open');
      var d = modals[name].querySelector('.dialog'); if (d) d.scrollTop = 0;
      var f = modals[name].querySelector('input,textarea,button.x'); if (f) f.focus();
    }
    function closeModal(m){
      m.classList.remove('open'); m.setAttribute('aria-hidden','true');
      document.body.classList.remove('modal-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    $all('[data-open]').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); openModal(b.getAttribute('data-open'), b); });
    });
    $all('.modal').forEach(function (m) {
      m.querySelector('.x').addEventListener('click', function () { closeModal(m); });
      m.querySelector('.backdrop').addEventListener('click', function () { closeModal(m); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') $all('.modal.open').forEach(closeModal);
    });

    // --- hero tab switcher (gooey-nav handles the pill; we swap panels) ---
    $all('.gnav').forEach(function (gnav) {
      var showcase = gnav.closest('.hero-showcase');
      if (!showcase) return;
      var panels = $all('.tabpanel', showcase);
      gnav.addEventListener('click', function (e) {
        var btn = e.target.closest('button[data-tab]'); if (!btn) return;
        var key = btn.getAttribute('data-tab');
        gnav.querySelectorAll('button').forEach(function (x){ x.classList.toggle('on', x === btn); });
        panels.forEach(function (p){ p.classList.toggle('on', p.getAttribute('data-panel') === key); });
      });
    });

    // --- diagnostic quiz (3 steps + result) ---
    var quiz = $('#quiz');
    if (quiz) {
      var steps = $all('.qstep', quiz), bar = $('.qprogress span', quiz), resultEl = $('#qresult', quiz), chosen = 'coupe';
      var copy = { coupe:'Une coupe sur-mesure pour rafraîchir votre ligne.', couleur:'Un balayage ou une coloration pour transformer votre regard.', soin:'Un soin ou une coiffure d\'exception pour votre événement.' };
      function goto(i){
        steps.forEach(function (s, idx){ s.classList.toggle('on', idx === i); });
        if (bar) bar.style.width = Math.round((i / (steps.length - 1)) * 100) + '%';
      }
      $all('.qopt', quiz).forEach(function (opt) {
        opt.addEventListener('click', function () {
          var go = opt.getAttribute('data-go'); chosen = go;
          var cur = steps.findIndex(function (s){ return s.classList.contains('on'); });
          var next = Math.min(cur + 1, steps.length - 1);
          if (next === steps.length - 1 && resultEl) resultEl.textContent = copy[go] || copy.coupe;
          goto(next);
        });
      });
    }

    // --- nav active link on scroll ---
    var links = $all('.navlinks a[href^="#"]');
    if ('IntersectionObserver' in window && links.length) {
      var map = {}; links.forEach(function (a){ var id = a.getAttribute('href'); if (id.length > 1) map[id.slice(1)] = a; });
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { links.forEach(function (l){ l.classList.remove('active'); }); var a = map[en.target.id]; if (a) a.classList.add('active'); }
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      Object.keys(map).forEach(function (id){ var s = document.getElementById(id); if (s) so.observe(s); });
    }

    // --- desktop sticky conversion bar at 60% scroll ---
    var conv = $('#convbar');
    if (conv) {
      function convScroll(){
        var h = document.documentElement.scrollHeight - window.innerHeight;
        conv.classList.toggle('show', h > 0 && (window.scrollY / h) > 0.6);
      }
      window.addEventListener('scroll', convScroll, { passive: true }); convScroll();
    }

    // --- smooth-scroll for in-page anchors (skip modal triggers / tel links) ---
    $all('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href'); if (id.length < 2) return;
        var t = document.querySelector(id);
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
      });
    });

    var y = $('[data-year]'); if (y) y.textContent = new Date().getFullYear();
  });
})();

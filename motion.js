(function(){
  'use strict';
  var root=document.getElementById('sculp-site');
  if(!root)return;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var progress=document.createElement('div');
  progress.className='sculp-progress';
  progress.setAttribute('aria-hidden','true');
  document.body.appendChild(progress);
  var ticking=false;
  function updateProgress(){
    var max=document.documentElement.scrollHeight-window.innerHeight;
    var value=max>0?Math.max(0,Math.min(1,window.scrollY/max)):0;
    progress.style.transform='scaleX('+value+')';
    ticking=false;
  }
  window.addEventListener('scroll',function(){
    if(!ticking){ticking=true;requestAnimationFrame(updateProgress)}
  },{passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});
  window.addEventListener('hashchange',function(){requestAnimationFrame(updateProgress)});
  updateProgress();

  if(!reduce&&'IntersectionObserver' in window){
    var selector=[
      '.view h1','.view h2','.view .photo','.view .price-card',
      '.view .home-service','.view .card','.view .team-person',
      '.view .concierge-ui','.view .trust-item','.view details'
    ].join(',');
    var targets=Array.from(root.querySelectorAll(selector));
    targets.forEach(function(el,index){
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay',(index%3)*55+'ms');
    });
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:'0px 0px 55px 0px'});
    targets.forEach(function(el){observer.observe(el)});
    root.classList.add('motion-ready');
  }

})();

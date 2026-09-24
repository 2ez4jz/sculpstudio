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

  var gallery=Array.from(root.querySelectorAll('.view[data-page="portfolio"] .photo img'));
  if(!gallery.length)return;

  var modal=document.createElement('div');
  modal.className='sculp-lightbox';
  modal.setAttribute('role','dialog');
  modal.setAttribute('aria-modal','true');
  modal.setAttribute('aria-label','Portfolio image viewer');
  modal.innerHTML='<button class="close" type="button" aria-label="Close image">×</button><button class="prev" type="button" aria-label="Previous image">←</button><img alt=""><button class="next" type="button" aria-label="Next image">→</button><span class="count" aria-live="polite"></span>';
  document.body.appendChild(modal);

  var image=modal.querySelector('img');
  var count=modal.querySelector('.count');
  var index=0,lastFocus=null;
  function show(nextIndex){
    index=(nextIndex+gallery.length)%gallery.length;
    image.src=gallery[index].src;
    image.alt=gallery[index].alt||'SCULP Studio portfolio image';
    count.textContent=String(index+1).padStart(2,'0')+' / '+String(gallery.length).padStart(2,'0');
  }
  function open(frame,nextIndex){
    lastFocus=frame;show(nextIndex);modal.classList.add('open');
    document.body.style.overflow='hidden';
    modal.querySelector('.close').focus();
  }
  function close(){
    modal.classList.remove('open');document.body.style.overflow='';
    image.removeAttribute('src');if(lastFocus)lastFocus.focus();
  }
  gallery.forEach(function(img,i){
    var frame=img.parentElement;
    frame.setAttribute('role','button');
    frame.setAttribute('tabindex','0');
    frame.setAttribute('aria-label','Open portfolio image '+(i+1)+' of '+gallery.length);
    frame.addEventListener('click',function(){open(frame,i)});
    frame.addEventListener('keydown',function(event){
      if(event.key==='Enter'||event.key===' '){event.preventDefault();open(frame,i)}
    });
  });
  modal.querySelector('.close').addEventListener('click',close);
  modal.querySelector('.prev').addEventListener('click',function(){show(index-1)});
  modal.querySelector('.next').addEventListener('click',function(){show(index+1)});
  modal.addEventListener('click',function(event){if(event.target===modal)close()});
  window.addEventListener('keydown',function(event){
    if(!modal.classList.contains('open'))return;
    if(event.key==='Escape')close();
    if(event.key==='ArrowLeft')show(index-1);
    if(event.key==='ArrowRight')show(index+1);
    if(event.key==='Tab'){
      var controls=Array.from(modal.querySelectorAll('button'));
      var at=controls.indexOf(document.activeElement);
      if(at<0||(event.shiftKey&&at===0)){
        event.preventDefault();controls[controls.length-1].focus();
      }else if(!event.shiftKey&&at===controls.length-1){
        event.preventDefault();controls[0].focus();
      }
    }
  });

  if(!reduce&&window.matchMedia('(hover: hover) and (pointer: fine)').matches){
    var cursor=document.createElement('div');
    cursor.className='sculp-view-cursor';
    cursor.setAttribute('aria-hidden','true');
    document.body.appendChild(cursor);
    gallery.forEach(function(img){
      var frame=img.parentElement;
      frame.addEventListener('pointerenter',function(){cursor.classList.add('visible')});
      frame.addEventListener('pointerleave',function(){cursor.classList.remove('visible')});
      frame.addEventListener('pointermove',function(event){
        cursor.style.left=event.clientX+'px';cursor.style.top=event.clientY+'px';
      });
    });
  }
})();

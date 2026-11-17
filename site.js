// On preview hosts that serve files from raw.githubusercontent.com (which blocks media), load media from jsDelivr instead.
function mediaUrl(u){try{var a=new URL(u,document.baseURI);if(a.hostname==='raw.githubusercontent.com'){return a.href.replace('https://raw.githubusercontent.com/Americanjuice/teso-parents-schools/main/','https://cdn.jsdelivr.net/gh/Americanjuice/teso-parents-schools@main/');}return u;}catch(e){return u;}}
document.querySelectorAll('img[src]').forEach(function(i){var n=mediaUrl(i.getAttribute('src'));if(n!==i.getAttribute('src'))i.src=n;});
document.querySelectorAll('a.poster-link').forEach(function(a){a.href=mediaUrl(a.getAttribute('href'));});
document.querySelectorAll('video').forEach(function(v){var c=false;if(v.getAttribute('poster')){v.poster=mediaUrl(v.getAttribute('poster'));}
  v.querySelectorAll('source').forEach(function(s){var n=mediaUrl(s.getAttribute('src'));if(n!==s.getAttribute('src')){s.src=n;c=true;}});if(c)v.load();});
function toggleNav(b){var n=document.getElementById('nav');var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);}
document.querySelectorAll('#nav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('nav').classList.remove('open');});});
if(!window.TESO_REVIEW_MODE){var rb=document.getElementById('reviewBanner');if(rb)rb.remove();}
document.querySelectorAll('.ph').forEach(function(el){
  var src=el.getAttribute('data-src');
  if(src){el.style.backgroundImage='url('+mediaUrl(src)+')';el.classList.add('has-img');}
  else if(window.TESO_REVIEW_MODE){var s=document.createElement('span');s.className='ph-label';s.textContent='Photo needed: '+el.getAttribute('data-photo');el.appendChild(s);}
});
document.querySelectorAll('.hl-form').forEach(function(el){
  var cfg=(window.TESO_FORMS||{})[el.getAttribute('data-form')];if(!cfg)return;
  if(cfg.id){
    var f=document.createElement('iframe');
    f.src='https://api.leadconnectorhq.com/widget/form/'+encodeURIComponent(cfg.id);
    f.title=cfg.name;f.id='inline-'+cfg.id;f.style.cssText='width:100%;height:100%;min-height:640px;border:none;border-radius:8px';
    f.setAttribute('data-layout',"{'id':'INLINE'}");f.setAttribute('data-trigger-type','alwaysShow');f.setAttribute('data-trigger-value','');
    f.setAttribute('data-activation-type','alwaysActivated');f.setAttribute('data-activation-value','');f.setAttribute('data-deactivation-type','neverDeactivate');
    f.setAttribute('data-deactivation-value','');f.setAttribute('data-form-name',cfg.name);f.setAttribute('data-height','640');
    f.setAttribute('data-layout-iframe-id','inline-'+cfg.id);f.setAttribute('data-form-id',cfg.id);
    el.appendChild(f);
    if(!document.getElementById('hl-embed')){var s=document.createElement('script');s.id='hl-embed';s.src='https://link.msgsndr.com/js/form_embed.js';document.body.appendChild(s);}
  } else {
    var box=document.createElement('div');box.className='form-slot';
    box.innerHTML='<p class="slot-title">Form slot: '+cfg.name+'</p><p class="slot-note">This HighLevel form will appear here. Fields:</p>';
    var ul=document.createElement('ul');cfg.fields.forEach(function(x){var li=document.createElement('li');li.textContent=x;ul.appendChild(li);});box.appendChild(ul);
    var p=document.createElement('p');p.className='slot-note';p.innerHTML='Until then, email <a href="mailto:tesoparents@gmail.com">tesoparents@gmail.com</a>.';box.appendChild(p);
    el.appendChild(box);
  }
});
document.querySelectorAll('[data-interest]').forEach(function(a){a.addEventListener('click',function(){try{sessionStorage.setItem('tesoInterest',a.getAttribute('data-interest'));}catch(e){}});});

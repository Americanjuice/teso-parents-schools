function toggleNav(b){var n=document.getElementById('nav');var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);}
document.querySelectorAll('#nav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('nav').classList.remove('open');});});
if(!window.TESO_REVIEW_MODE){var rb=document.getElementById('reviewBanner');if(rb)rb.remove();}
document.querySelectorAll('.ph').forEach(function(el){
  var src=el.getAttribute('data-src');
  if(src){el.style.backgroundImage='url('+src+')';el.classList.add('has-img');}
  else if(window.TESO_REVIEW_MODE){var s=document.createElement('span');s.className='ph-label';s.textContent='Photo needed: '+el.getAttribute('data-photo');el.appendChild(s);}
});
document.querySelectorAll('.hl-form').forEach(function(el){
  var cfg=(window.TESO_FORMS||{})[el.getAttribute('data-form')];if(!cfg)return;
  if(cfg.id){
    var f=document.createElement('iframe');
    f.src='https://api.leadconnectorhq.com/widget/form/'+encodeURIComponent(cfg.id);
    f.title=cfg.name;f.loading='lazy';f.style.cssText='width:100%;min-height:640px;border:none;border-radius:8px';
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

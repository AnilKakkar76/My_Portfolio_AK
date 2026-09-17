const nav=document.querySelector('.nav'),menu=document.querySelector('.menu');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.job,.skill-grid article,.edu-grid article').forEach(el=>{el.style.opacity=0;el.style.transform='translateY(18px)';el.style.transition='.6s ease';obs.observe(el)});
const s=document.createElement('style');s.textContent='.show{opacity:1!important;transform:none!important}';document.head.appendChild(s);

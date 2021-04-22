const bg=document.getElementById('bg');
const frame1=document.getElementById('frame1');
const text=document.getElementById('text');

window.addEventListener('scroll',function(){
    const value = window.scrollY;
    bg.style.top = value + 'px';
    text.style.top = value*0.6-210 +'px';
})

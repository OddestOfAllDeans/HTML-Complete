
AOS.init();
const header=document.querySelector('header');
const scroll_btn=document.querySelector("#scroll");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 10);
    scroll_btn.classList.toggle("active",window.scrollY > 50);
});

let nav=document.querySelector("#navlist")
let bars=document.querySelector("#menu-icon")

bars.addEventListener("click",()=>{
    nav.classList.toggle("show_nav")
})  

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});


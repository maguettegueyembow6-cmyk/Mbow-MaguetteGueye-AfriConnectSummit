/*=============DARK MODE===============*/                       
const toggle = document.getElementById("theme-toggle");
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}
toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
});
window.addEventListener("scroll", ()=>{
    const header = document.querySelector("header");
    if(window.scrollY>50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        topBnt.style.display="block";
    }else{
        topBtn.style.display="none";
    }
});
topBtn.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
});
topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
/*===========filtrage===========*/
function filterSelection(category) {
    const cards = document.querySelectorAll(".speaker-card");
    cards.forEach(card => {
        if(category === "all" || card.classList.contains(category)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
}
/*================ANIMATION=============*/
const counter = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;
            const update = () => {
                const increment = target / 100;
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            };
            update();
            observer.unobserve(counter);
        }
    });
});
counter.forEach(counter => observer.observe(counter));
const section = document.querySelectorAll(".fade-in");
const fadeObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
sections.forEach(section => {
    fadeObserver.observe (section);
});
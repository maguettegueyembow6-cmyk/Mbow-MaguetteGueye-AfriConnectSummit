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
section.forEach(section => {
    fadeObserver.observe (section);
});
/*===================PROGRAMME==============*/
function showDay(dayId) {
    //Récupérer tous les contenus
    const contents = document.querySelectorAll(".tab-content");
    //cacher tous les jours
    contents.forEach(content =>{
        content.style.display = "none"
    });
    //Afficher le jour séléctionné
    const selectedDay = document.getElementById(dayId);
    if (selectedDay){
        selectedDay.style.display = "block";
    }
    //Gérer le bouton actif
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(button =>{
        button.classList.remove("active");
    });
    //trouver le bouton correspondant
    buttons.forEach(button => {
        if (button.getAttribute("onclick")=== `showDay('${dayId}')`) {
            button.classList.add("active");
        }
    });
}
//=========================
//COMPTE A REBOURS
//=========================
const dateEvenement = new Date ("2026-10-08T09:00:00").getTime();
function countdown(){
    const maintenant = new Date().getTime();
    const difference = dateEvenement - maintenant;
    if(difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minute").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }
    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minute = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const secondes = Math.floor(
        (difference / 1000) % 60
    );
    document.getElementById("days").textContent = jours;
    document.getElementById("hours").textContent = heures
        .toString().padStart(2, "0");
    document.getElementById("minute").textContent = minute
        .toString().padStart(2,"0");
    document.getElementById("seconds").textContent = secondes
        .toString().padStart(2, "0");        
}
countdown();
setInterval(countdown, 1000);
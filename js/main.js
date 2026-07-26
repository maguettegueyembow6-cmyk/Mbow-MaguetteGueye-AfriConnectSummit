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
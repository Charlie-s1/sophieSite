window.addEventListener("load",()=>{
    document.querySelector("#menuIcon").addEventListener("click",toggleMenu);
    document.querySelector("#closeNav").addEventListener("click",toggleMenu);
});
function toggleMenu(e){
    const nav = document.querySelector(".navCont");
    nav.classList.toggle("showNav");
    document.body.classList.toggle("stopScroll");
}
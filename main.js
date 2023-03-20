window.addEventListener("load",()=>{
    document.querySelector("#menuIcon").addEventListener("click",toggleMenu);
    document.querySelector("#closeNav").addEventListener("click",toggleMenu);
});
function toggleMenu(e){
    const nav = document.querySelector("#mobMenu");
    nav.classList.toggle("showNav");
    document.body.classList.toggle("stopScroll");
    // document.querySelector(".navBackground").classList.toggle("showNavBackground");
}
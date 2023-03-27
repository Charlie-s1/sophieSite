window.addEventListener("load",()=>{
    document.querySelector("#menuIcon").addEventListener("click",toggleMenu);
});
function toggleMenu(e){
    const menuIconTop = document.querySelector("#topLine");
    const menuIconMid = document.querySelector("#midLine");
    const menuIconBottom = document.querySelector("#bottomLine");
    const menuIcon = document.querySelector("#menuIcon");

    const nav = document.querySelector("#mobMenu");
    nav.classList.toggle("showNav");
    document.body.classList.toggle("stopScroll");

    // !menuIcon.style["justify-content"] ? menuIcon.style["justify-content"]="center" : menuIcon.style["justify-content"]=null;
    !menuIconTop.style.cssText ? menuIconTop.style.cssText = 
    `
        transform:rotate(45deg);
        top:29%;
    `
    : menuIconTop.style.cssText = 
    `
        transform:null;
        top:null;
    `;
    !menuIconBottom.style.cssText ? menuIconBottom.style.cssText = 
    `
        transform:rotate(-45deg);
        top:-29%;
    `: menuIconBottom.style.cssText = null;
    !menuIconMid.style.width ? menuIconMid.style.width = "0": menuIconMid.style.width = null;
}
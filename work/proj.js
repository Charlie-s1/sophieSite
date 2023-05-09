window.onload = ()=>{
    const imgContainers = document.querySelectorAll(".projCont");
    for(const c of imgContainers){
        c.addEventListener("mouseenter",()=>{
            c.querySelector(".imageDesc").style.opacity=1;
            c.querySelector(".imageDesc").style.zIndex=10;
        });
        c.addEventListener("mouseleave",()=>{
            c.querySelector(".imageDesc").style.opacity=0;
            c.querySelector(".imageDesc").style.zIndex=-1;
        });
        c.addEventListener("click",()=>{
        })
    }
}
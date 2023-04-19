window.onload = ()=>{
    const imgContainers = document.querySelectorAll(".projCont");
    for(const c of imgContainers){
        c.addEventListener("mouseenter",()=>{
            // c.querySelector(".imageDesc").style.display="block";
            c.querySelector(".imageDesc").style.opacity=1;
        });
        c.addEventListener("mouseleave",()=>{
            // c.querySelector(".imageDesc").style.display="none";
            c.querySelector(".imageDesc").style.opacity=0;
        });
    }
}
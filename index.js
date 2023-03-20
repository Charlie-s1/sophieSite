window.addEventListener("load",()=>{
    const cards = document.querySelectorAll('.card');

   
    for(c of cards){
        c.addEventListener("mouseenter",(e)=>{
            e.target.querySelector("video") ? e.target.querySelector("video").play() : null;
            e.target.querySelector(".titleCont").style.top="50%";
            e.target.parentNode.style.transform = `
                scale3d(1.07, 1.07, 1.07)
            `; 
            e.target.style.zIndex = "2";
        })
        c.addEventListener("mouseleave",(e)=>{
            e.target.querySelector("video") ? e.target.querySelector("video").pause() : null;
            e.target.parentNode.style.transform="";
            e.target.style.zIndex = "1";
            // e.target.querySelector(".cardHover").style.background="";
            e.target.querySelector(".titleCont").style.top="85%";
        })

    }
    
});

// function playVid(e){
//     vid.play();
// }

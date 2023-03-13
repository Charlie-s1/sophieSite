window.addEventListener("load",()=>{
    const cards = document.querySelectorAll('.card');

    function rotateToMouse(e) {
        const bounds = e.target.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;

        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        }
        const distance = Math.sqrt(center.x**2 + center.y**2);
        
        e.target.parentNode.style.transform = `
          scale3d(1.07, 1.07, 1.07)
          rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance)* 1}deg
          )
        `;
        
        e.target.style.backgroundImage = `
          radial-gradient(
            circle at
            ${center.x * 2 + bounds.width/2}px
            ${center.y * 2 + bounds.height/2}px,
            #ffffff20,
            #0000000f
          )
        `;
    }
    for(c of cards){
        c.addEventListener("mousemove",rotateToMouse);
        c.addEventListener("mouseenter",(e)=>{
            e.target.querySelector("video") ? e.target.querySelector("video").play() : null;
            e.target.querySelector(".titleCont").style.top="50%";
            e.target.style.zIndex = "2";
        })
        c.addEventListener("mouseleave",(e)=>{
            e.target.querySelector("video") ? e.target.querySelector("video").pause() : null;
            e.target.style.transform="";
            e.target.style.zIndex = "1";
            e.target.querySelector(".cardHover").style.background="";
            e.target.querySelector(".titleCont").style.top="90%";
        })

    }
    
});

// function playVid(e){
//     vid.play();
// }

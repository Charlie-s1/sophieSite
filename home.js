window.onload =()=>{
  window.addEventListener("resize",mobView)
  mobView();
}

function mobView(){
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width<=800){
    console.log("mob")
    document.querySelector("#desktop").style.display = "none";
    document.querySelector("#mob").style.display = "flex";
  }else{
    console.log("desk")
    document.querySelector("#desktop").style.display = "flex";
    document.querySelector("#mob").style.display = "none";
  }
}
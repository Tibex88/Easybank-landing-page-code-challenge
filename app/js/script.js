const hamburger = document.getElementById("hamburger");
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")

hamburger.addEventListener("click",function(){
   hamburger.classList.toggle("open")
   header.classList.toggle("open")
   if(header.classList.contains("open")){
       {
           body.classList.add("no-scroll")
           overlay.classList.add("fade-in")
           overlay.classList.remove("fade-out")
        }
    }
    else{
        overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out")
        body.classList.remove("no-scroll")

    }  
})
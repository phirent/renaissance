let navBar = document.querySelector(".navBar")
let body = document.querySelector("body")
window.addEventListener(
    "scroll", function (){
    let taile_scroll = window.scrollY
        if(  taile_scroll > 80 ){
            navBar.classList.add("nav-fixe")
      }else{
            navBar.classList.remove("nav-fixe")
      }
      }
)
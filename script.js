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

// ici nous avons le script pour la bare de navigation
let ul = document.querySelector(".ul")
let btn = document.querySelector(".button-nav")
btn.addEventListener(
      "click",function (){
            btn.classList.toggle("active")
             navBar.classList.toggle("navBar")
            ul.classList.toggle("active2")
          
           
      }
)

// ici le scrpt pour les images d'accuiel
 
const images = ["image/fruits1.png",  "image/papaye.jpg", "image/noie.jpg", "image/pomme.jpg"]
  let index = 0
  function changeImage (){
const Accuiel = document.querySelector("#imageAccuiel")
Accuiel.src = images[index]
index++
if(index == images.length){
      index = 0
}
}
setInterval(changeImage, 2000)

// le scroll des difs divs

const cart = document.querySelector(".section-categorie")
const gauche = document.querySelector(".btn-gauche")
const droit = document.querySelector(".btn-droit")

gauche.addEventListener(
      "click", function scroller(){
cart.scrollBy({
      left: 220,
      behavior: "smooth"
})
      }
)

droit.addEventListener(
      "click", function scroller(){
cart.scrollBy({
      left: -220,
      behavior: "smooth"
})
      }
)

// les miniDivs qui defillent seules
const grandeSection = document.querySelector(".section4")
console.log(grandeSection)
let position = 0
function defilement(){
      position+= 0.5
      if (position >= grandeSection.scrollWidth - grandeSection.clientWidth) {
    position = 0;  
  }
  grandeSection.scrollLeft = position;  
requestAnimationFrame(defilement)
}

setInterval(defilement,2000)
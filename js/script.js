 
const nav = document.querySelector('.navlinks')
const burger = document.querySelector('.burger')
 
nav.classList.toggle('navActive')
 
function toggleMeny() {
 
   nav.classList.toggle('navActive')
   burger.classList.toggle('toggle')
}
 
 
burger.addEventListener('click', toggleMeny)
nav.addEventListener('click', toggleMeny)
 

 // When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function togglecarted() {
   document.getElementById("cartIcon").src = "../img/added_to_cart.svg"
   document.getElementById("carttext").textContent = "Added To Cart!"
}



function togglebrown() {
   document.getElementById("productimg").src = "../img/BrownGuitar.jpg"
}
function toggleblue() {
   document.getElementById("productimg").src = "../img/BlueGuitar.jpg"
}
function togglered() {
   document.getElementById("productimg").src = "../img/RedGuitar.jpg"
}
function togglepurple() {
   document.getElementById("productimg").src = "../img/PurpleGuitar.jpg"
}
function toggleblack() {
   document.getElementById("productimg").src = "../img/BlackGuitar.jpg"
}
function togglewhite() {
   document.getElementById("productimg").src = "../img/WhiteGuitar.jpg"
}


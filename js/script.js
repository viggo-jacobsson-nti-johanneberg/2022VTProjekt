 
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

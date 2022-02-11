 
const nav = document.querySelector('.navlinks')
const burger = document.querySelector('.burger')
 
nav.classList.toggle('navActive')
 
function toggleMeny() {
 
   nav.classList.toggle('navActive')
   burger.classList.toggle('toggle')
}
 
 
burger.addEventListener('click', toggleMeny)
nav.addEventListener('click', toggleMeny)
 
 

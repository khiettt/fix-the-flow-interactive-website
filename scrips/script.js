// Selecteer de button om de doelgroepen te zien
let flagOpen = document.querySelector('.flag-btn')
let filterOpen = document.querySelector('.target-group')
flagOpen.addEventListener('click', function(){
  filterOpen.classList.toggle('show')
})

// document.addEventListener("DOMContentLoaded", () => {
//   let articles = document.querySelectorAll('.section-news article')
//   let buttons = document.querySelectorAll('.flag-section')

//   buttons.forEach(button =>{
//     button.addEventListener('click' () => {
//       let filterClass = button.classList[0].replace('-button','')
//     })
//   })
// })
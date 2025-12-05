// Selecteer de button om de doelgroepen te zien
let filterButton = document.querySelector('#beforeButton')
// Wacht tot iemand erop klikt
filterButton.addEventListener('click', function() {
  // Selecteer een doelgroep 
  document.querySelector('.flag').classList.toggle('visible')
});
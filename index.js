window.onload = function() {
  if (!sessionStorage.getItem('posterShown')) {
    document.getElementById('poster-popup').style.display = 'flex';
    sessionStorage.setItem('posterShown', 'true');
  }
};

function closePopup() {
  document.getElementById('poster-popup').style.display = 'none';
}

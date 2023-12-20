document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const leftWing = document.querySelector('.left-wing');

  hamburger.addEventListener('click', function() {
    leftWing.classList.toggle('show');
  });
});

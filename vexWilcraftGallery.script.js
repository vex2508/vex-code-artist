const floatingButton = document.getElementById('floating-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > -10) {
    floatingButton.style.display = 'block';
  } else {
    floatingButton.style.display = 'none';
  }
});


floatingButton.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexGalleryEnglish';
  });
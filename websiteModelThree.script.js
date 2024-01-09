

const languageEnglishBtn = document.querySelector('#languageEnglish');
const languageSerbianBtn = document.querySelector('#languageSerbian');
const textUnderEnglish = document.querySelector('#textUnderEnglish');
const textUnderSerbian = document.querySelector('#textUnderSerbian');
const linksEnglish = document.querySelector('#linksEnglish');
const linksSerbian = document.querySelector('#linksSerbian');
const contactEnglishBtn = document.querySelector('#contactEnglish');
const contactSerbianBtn = document.querySelector('#contactSerbian');
const theLastColumnEnglish = document.querySelector('#theLastColumnEnglish');
const theLastColumnSerbian = document.querySelector('#theLastColumnSerbian');




languageEnglishBtn.addEventListener('click', () => {
    linksEnglish.style.display='none';
    linksSerbian.style.display='inline';
    contactEnglishBtn.style.display='none';
    contactSerbianBtn.style.display='inline';
    languageEnglishBtn.style.display='none';
    languageSerbianBtn.style.display='inline';
});


languageSerbianBtn.addEventListener('click', () => {
    linksEnglish.style.display='inline';
    linksSerbian.style.display='none';
    contactEnglishBtn.style.display='inline';
    contactSerbianBtn.style.display='none';
    languageEnglishBtn.style.display='inline';
    languageSerbianBtn.style.display='none';
});










contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });

  contactSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });
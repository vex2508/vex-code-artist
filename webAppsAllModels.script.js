const languageEnglishBtn = document.querySelector('#languageEnglish');
const languageSerbianBtn = document.querySelector('#languageSerbian');
const textUnderEnglish = document.querySelector('#textUnderEnglish');
const textUnderSerbian = document.querySelector('#textUnderSerbian');
const linksEnglish = document.querySelector('#linksEnglish');
const linksSerbian = document.querySelector('#linksSerbian');
const contactEnglishBtn = document.querySelector('#contactEnglish');
const contactSerbianBtn = document.querySelector('#contactSerbian');
const learnMoreTwoEnglishBtn = document.querySelector('#learnMoreTwoEnglish');
const learnMoreTwoSerbianBtn = document.querySelector('#learnMoreTwoSerbian');
const textUnderEnglishTwo = document.querySelector('#textUnderEnglishTwo');
const textUnderSerbianTwo = document.querySelector('#textUnderSerbianTwo');
const theLastColumnEnglish = document.querySelector('#theLastColumnEnglish');
const theLastColumnSerbian = document.querySelector('#theLastColumnSerbian');


languageEnglishBtn.addEventListener('click', () => {
    languageEnglishBtn.style.display='none';
    languageSerbianBtn.style.display='inline';
    textUnderEnglish.style.display= 'none';
    textUnderSerbian.style.display='block';
    linksEnglish.style.display='none';
    linksSerbian.style.display='inline';
    contactEnglishBtn.style.display='none';
    contactSerbianBtn.style.display='inline';
    learnMoreTwoEnglishBtn.style.display='none';
    learnMoreTwoSerbianBtn.style.display='inline';
    textUnderEnglishTwo.style.display= 'none';
    textUnderSerbianTwo.style.display='block';
    theLastColumnEnglish.style.display = 'none';
    theLastColumnSerbian.style.display = 'block';
});


languageSerbianBtn.addEventListener('click', () => {
    languageEnglishBtn.style.display='inline';
    languageSerbianBtn.style.display='none';
    textUnderEnglish.style.display= 'block';
    textUnderSerbian.style.display='none';
    linksEnglish.style.display='inline';
    linksSerbian.style.display='none';
    contactEnglishBtn.style.display='inline';
    contactSerbianBtn.style.display='none';
    learnMoreTwoEnglishBtn.style.display='inline';
    learnMoreTwoSerbianBtn.style.display='none';
    textUnderEnglishTwo.style.display= 'block';
    textUnderSerbianTwo.style.display='none';
    theLastColumnEnglish.style.display = 'block';
    theLastColumnSerbian.style.display = 'none';
});


const firstNaviButton = document.querySelector('#firstNaviButton');
const secondColumn = document.querySelector('#secondColumn');

firstNaviButton.addEventListener('click', () => {
    secondColumn.scrollIntoView({behavior: 'smooth'});
});


learnMoreTwoEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelOne';
});

learnMoreTwoSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelOne';
});

const webAppModelOne = document.querySelector('#webAppModelOne');

webAppModelOne.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelOne';
});

const webAppModelOne2 = document.querySelector('#webAppModelOne2');

webAppModelOne2.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelOne';
});



contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });

  contactSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });


  const webAppModelTwo = document.querySelector('#webAppModelTwo');

webAppModelTwo.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelTwo';
});


const webAppModelTwo2 = document.querySelector('#webAppModelTwo2');

webAppModelTwo2.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelTwo';
});

const webAppModelThree = document.querySelector('#webAppModelThree');

webAppModelThree.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelThree';
});


const webAppModelThree2 = document.querySelector('#webAppModelThree2');

webAppModelThree2.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppModelThree';
});
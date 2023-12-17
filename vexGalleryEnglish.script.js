const languageEnglishBtn = document.querySelector('#languageEnglish');
const languageSerbianBtn = document.querySelector('#languageSerbian');
const textUnderEnglishOne = document.querySelector('#textUnderEnglishOne');
const textUnderSerbianOne = document.querySelector('#textUnderSerbianOne');
const galleryOneEnglishBtn =  document.querySelector('#galleryOneEnglishBtn');
const galleryOneSerbianBtn =  document.querySelector('#galleryOneSerbianBtn');
const galleryTwoEnglishBtn =  document.querySelector('#galleryTwoEnglishBtn');
const galleryTwoSerbianBtn =  document.querySelector('#galleryTwoSerbianBtn');
const linksEnglish = document.querySelector('#linksEnglish');
const linksSerbian = document.querySelector('#linksSerbian');
const textUnderEnglishTwo = document.querySelector('#textUnderEnglishTwo');
const textUnderSerbianTwo = document.querySelector('#textUnderSerbianTwo');
const theLastColumnEnglish = document.querySelector('#theLastColumnEnglish');
const theLastColumnSerbian = document.querySelector('#theLastColumnSerbian');
const textUnderEnglish = document.querySelector('#textUnderEnglish');
const textUnderSerbian = document.querySelector('#textUnderSerbian');

languageEnglishBtn.addEventListener('click', () => {
    textUnderEnglish.style.display= 'none';
    textUnderSerbian.style.display='block';
    languageEnglishBtn.style.display = 'none';
    languageSerbianBtn.style.display = 'inline';
    galleryOneEnglishBtn.style.display = 'none';
    galleryTwoEnglishBtn.style.display = 'none';
    galleryOneSerbianBtn.style.display = 'inline';
    galleryTwoSerbianBtn.style.display = 'inline';
    linksEnglish.style.display = 'none';
    linksSerbian.style.display = 'inline';
    textUnderEnglishOne.style.display = 'none';
    textUnderSerbianOne.style.display = 'inline';
    textUnderEnglishTwo.style.display = 'none';
    textUnderSerbianTwo.style.display = 'inline';
    theLastColumnEnglish.style.display = 'none';
    theLastColumnSerbian.style.display = 'block';
    contactEnglishBtn.style.display = 'none';
    contactSerbianBtn.style.display = 'inline';
});

languageSerbianBtn.addEventListener('click', () => {
  textUnderEnglish.style.display= 'block';
    textUnderSerbian.style.display='none';
    languageEnglishBtn.style.display = 'inline';
    languageSerbianBtn.style.display = 'none';
    galleryOneSerbianBtn.style.display = 'none';
    galleryTwoSerbianBtn.style.display = 'none';
    galleryOneEnglishBtn.style.display = 'inline';
    galleryTwoEnglishBtn.style.display = 'inline';
    linksEnglish.style.display = 'inline';
    linksSerbian.style.display = 'none';
    textUnderEnglishOne.style.display = 'inline';
    textUnderSerbianOne.style.display = 'none';
    textUnderEnglishTwo.style.display = 'inline';
    textUnderSerbianTwo.style.display = 'none';
    theLastColumnEnglish.style.display = 'block';
    theLastColumnSerbian.style.display = 'none';
    contactEnglishBtn.style.display = 'inline';
    contactSerbianBtn.style.display = 'none';
});


const firstNaviButton = document.querySelector('#firstNaviButton');
const secondColumn = document.querySelector('#secondColumn');

firstNaviButton.addEventListener('click', () => {
    secondColumn.scrollIntoView({behavior: 'smooth'});
});


galleryOneEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexQuizGalery';
  });
  
galleryOneSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexQuizGalery';
  });
  
  galleryTwoEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexWilcraftGallery';
  });
  
galleryTwoSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexWilcraftGallery';
  });


const gridGalleryOne = document.querySelector('#gridGalleryOne'); 

gridGalleryOne.addEventListener('click', () => {
  window.location.href = 'https://vex-code-artist.neocities.org/vexQuizGalery';
});

const gridGalleryTwo = document.querySelector('#gridGalleryTwo'); 

gridGalleryTwo.addEventListener('click', () => {
  window.location.href = 'https://vex-code-artist.neocities.org/vexWilcraftGallery';
});




const secondNaviButton = document.querySelector('#secondNaviButton');
const thirdColumn = document.querySelector('#thirdColumn');

secondNaviButton.addEventListener('click', () => {
    thirdColumn.scrollIntoView({behavior: 'smooth'});
});

const thirdNaviButton = document.querySelector('#thirdNaviButton');

thirdNaviButton.addEventListener('click', () => {
    theLastColumnEnglish.scrollIntoView({behavior: 'smooth'});
    theLastColumnSerbian.scrollIntoView({behavior: 'smooth'});
});



const contactEnglishBtn = document.querySelector('#contactEnglish');
const contactSerbianBtn = document.querySelector('#contactSerbian');

contactEnglishBtn.addEventListener('click', () => {
  window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
});

contactSerbianBtn.addEventListener('click', () => {
  window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
});

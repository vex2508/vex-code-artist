const firstNaviButton = document.querySelector('#firstNaviButton');
const theLastColumnEnglish = document.querySelector('#theLastColumnEnglish');
const theLastColumnSerbian = document.querySelector('#theLastColumnSerbian');
const linksEnglish = document.querySelector('#linksEnglish');
const linksSerbian = document.querySelector('#linksSerbian');


const languageEnglishBtn = document.querySelector('#languageEnglish');
const languageSerbianBtn = document.querySelector('#languageSerbian');

const learnMoreTwoEnglishBtn = document.querySelector('#learnMoreTwoEnglish');
const learnMoreTwoSerbianBtn = document.querySelector('#learnMoreTwoSerbian');
const learnMoreThreeEnglishBtn = document.querySelector('#learnMoreThreeEnglish');
const learnMoreThreeSerbianBtn = document.querySelector('#learnMoreThreeSerbian');
const contactEnglishBtn = document.querySelector('#contactEnglish');
const contactSerbianBtn = document.querySelector('#contactSerbian');
const textUnderEnglish = document.querySelector('#textUnderEnglish');
const textUnderSerbian = document.querySelector('#textUnderSerbian');
const textUnderEnglishOne = document.querySelector('#textUnderEnglishOne');
const textUnderSerbianOne = document.querySelector('#textUnderSerbianOne');
const textUnderEnglisTwo = document.querySelector('#textUnderEnglishTwo');
const textUnderSerbianTwo = document.querySelector('#textUnderSerbianTwo');



languageEnglishBtn.addEventListener('click', () => {
    learnMoreTwoEnglishBtn.style.display='none';
    learnMoreTwoSerbianBtn.style.display='inline';
    learnMoreThreeEnglishBtn.style.display='none';
    learnMoreThreeSerbianBtn.style.display='inline';
    theLastColumnEnglish.style.display = 'none';
    theLastColumnSerbian.style.display = 'block';
    contactEnglishBtn.style.display = 'none';
    contactSerbianBtn.style.display = 'inline';
    languageEnglishBtn.style.display = 'none';
    languageSerbianBtn.style.display = 'inline';
    linksEnglish.style.display = 'none';
    linksSerbian.style.display = 'inline';
    textUnderEnglishOne.style.display = 'none';
    textUnderSerbianOne.style.display = 'inline';
    textUnderEnglish.style.display = 'none';
    textUnderSerbian.style.display = 'inline';
    textUnderEnglishTwo.style.display = 'none';
    textUnderSerbianTwo.style.display = 'inline';
});


languageSerbianBtn.addEventListener('click', () => {
    learnMoreTwoEnglishBtn.style.display='inline';
    learnMoreTwoSerbianBtn.style.display='none';
    learnMoreThreeEnglishBtn.style.display='inline';
    learnMoreThreeSerbianBtn.style.display='none';
    theLastColumnEnglish.style.display = 'block';
    theLastColumnSerbian.style.display = 'none';
    contactEnglishBtn.style.display = 'inline';
    contactSerbianBtn.style.display = 'none';
    languageEnglishBtn.style.display = 'inline';
    languageSerbianBtn.style.display = 'none';
    linksEnglish.style.display = 'inline';
    linksSerbian.style.display = 'none';
    textUnderEnglishOne.style.display = 'inline';
    textUnderSerbianOne.style.display = 'none';
    textUnderEnglish.style.display = 'inline';
    textUnderSerbian.style.display = 'none';
    textUnderEnglishTwo.style.display = 'inline';
    textUnderSerbianTwo.style.display = 'none';
});



firstNaviButton.addEventListener('click', () => {
    secondColumn.scrollIntoView({behavior: 'smooth'});
  });


  const rightOne = document.querySelector('#rightOne');
  const leftThree = document.querySelector('#leftThree');
  const rightTwo = document.querySelector('#rightTwo');
  const leftTwo = document.querySelector('#leftTwo');
  const rightThree = document.querySelector('#rightThree');
  const leftOne = document.querySelector('#leftOne');
  const niceGalleryDaughter = document.querySelector('#niceGalleryDaughter');


  rightOne.addEventListener('click', () => {
    niceGalleryDaughter.style.transform = 'translateX(-25%)';
    rightOne.style.display='none';
    leftThree.style.display = 'block';
    rightTwo.style.display= 'block';
   
  });

  rightTwo.addEventListener('click', () => {
    niceGalleryDaughter.style.transform = 'translateX(-50%)';
    leftThree.style.display = 'none';
    rightTwo.style.display= 'none';
    leftTwo.style.display = 'block';
    rightThree.style.display= 'block';
  });

  rightThree.addEventListener('click', () => {
    niceGalleryDaughter.style.transform = 'translateX(-75%)';
    leftTwo.style.display = 'none';
    rightThree.style.display= 'none';
    leftOne.style.display = 'block';
  });

  leftOne.addEventListener('click', () => {
    niceGalleryDaughter.style.transform = 'translateX(-50%)';
    leftOne.style.display = 'none';
    leftTwo.style.display = 'block';
    rightThree.style.display= 'block';
  });

  leftTwo.addEventListener('click', () => {
    niceGalleryDaughter.style.transform = 'translateX(-25%)';
    leftTwo.style.display = 'none';
    rightThree.style.display= 'none';
    leftThree.style.display= 'block';
    rightTwo.style.display= 'block';
  });

  leftThree.addEventListener('click', () => {
    niceGalleryDaughter.style.transform = 'translateX(0%)';
    leftThree.style.display= 'none';
    rightTwo.style.display= 'none';
    rightOne.style.display = 'block';
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


  learnMoreTwoEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/websitesAllModels';
  });

  learnMoreTwoSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/websitesAllModels';
  });

  const websiteModels = document.querySelector('#websiteModels');

  websiteModels.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/websitesAllModels';
  });


  learnMoreThreeEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppsAllModels';
  });

  learnMoreThreeSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppsAllModels';
  });

  const webAppModels = document.querySelector('#webAppModels');

  webAppModels.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/webAppsAllModels';
  });


  contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });

  contactSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });
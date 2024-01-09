const firstLineText = document.querySelector('#firstLineText');
const secondLineText = document.querySelector('#secondLineText');
const VEX = ' VEX';
const CODE = ' CODE';

const craftedSpan = document.createElement('span');
craftedSpan.textContent = CODE;
craftedSpan.style.color = 'cyan';


firstLineText.textContent = VEX;
firstLineText.appendChild(craftedSpan);

const ARTIST = ' ARTIST';
const _2023 = ' 2023';

const craftedSpanTwo = document.createElement('span');
craftedSpanTwo.textContent = ARTIST;
craftedSpanTwo.style.color = 'plum';

secondLineText.textContent = _2023;
secondLineText.appendChild(craftedSpanTwo);

const firstNaviButton = document.querySelector('#firstNaviButton');
const secondColumn = document.querySelector('#secondColumn');

firstNaviButton.addEventListener('click', () => {
    secondColumn.scrollIntoView({behavior: 'smooth'});
});


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
const learnMoreThreeEnglishBtn = document.querySelector('#learnMoreThreeEnglish');
const learnMoreThreeSerbianBtn = document.querySelector('#learnMoreThreeSerbian');
const textUnderEnglishTwo = document.querySelector('#textUnderEnglishTwo');
const textUnderSerbianTwo = document.querySelector('#textUnderSerbianTwo');
const learnMoreFourEnglishBtn = document.querySelector('#learnMoreFourEnglish');
const learnMoreFourSerbianBtn = document.querySelector('#learnMoreFourSerbian')
const textUnderEnglishThree = document.querySelector('#textUnderEnglishThree');
const textUnderSerbianThree = document.querySelector('#textUnderSerbianThree');
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
    learnMoreThreeEnglishBtn.style.display='none';
    learnMoreThreeSerbianBtn.style.display='inline';
    textUnderEnglishTwo.style.display= 'none';
    textUnderSerbianTwo.style.display='block';
    textUnderEnglishThree.style.display= 'none';
    textUnderSerbianThree.style.display='block';
    learnMoreFourEnglishBtn.style.display='none';
    learnMoreFourSerbianBtn.style.display='inline';
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
    learnMoreThreeEnglishBtn.style.display='inline';
    learnMoreThreeSerbianBtn.style.display='none';
    textUnderEnglishTwo.style.display= 'block';
    textUnderSerbianTwo.style.display='none';
    textUnderEnglishThree.style.display= 'block';
    textUnderSerbianThree.style.display='none';
    learnMoreFourEnglishBtn.style.display='inline';
    learnMoreFourSerbianBtn.style.display='none';
    theLastColumnEnglish.style.display = 'block';
    theLastColumnSerbian.style.display = 'none';
   
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

learnMoreFourEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexGalleryEnglish';
  });

learnMoreFourSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexGalleryEnglish';
  });


const gridGallery = document.querySelector('#gridGallery');

gridGallery.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexGalleryEnglish';
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


  const body = document.querySelector('#body');
 
 

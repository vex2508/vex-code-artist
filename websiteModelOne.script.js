const fourtColumn = document.querySelector('.fourthColumn');

const naviPicRight = document.querySelector('#naviPicRight');
const naviPicLeft = document.querySelector('#naviPicLeft');

naviPicRight.addEventListener('click', () => {
    fourtColumn.style.transition = 'transoform 1s easy-in-out';
    fourtColumn.style.transform = 'translateX(-15vw)';
    naviPicRight.style.display = 'none';
    naviPicLeft.style.display = 'block';
});

naviPicLeft.addEventListener('click', () => {
    fourtColumn.style.transition = 'transoform 1s easy-in-out';
    fourtColumn.style.transform = 'translateX(0vw)';
    naviPicLeft.style.display = 'none';
    naviPicRight.style.display = 'block';
});


const firstLineText = document.querySelector('#firstLineText');
const secontLineText = document.querySelector('#secondLineText');
const text2023WIL = '2024WIL';
const CRAFT = 'CRAFT';
const craftedSpan = document.createElement('span');
craftedSpan.textContent = CRAFT;
craftedSpan.style.color = 'red';


firstLineText.textContent = text2023WIL;
firstLineText.appendChild(craftedSpan);

secontLineText.textContent = 'The New Standard In Ice Fishing';


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


  
const buttonLearnMoreOne = document.querySelector('#buttonLearnMoreOne');
  
buttonLearnMoreOne.addEventListener('click', (event) => {
   alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});


const buttonLearnMoreTwo = document.querySelector('#buttonLearnMoreTwo');

buttonLearnMoreTwo.addEventListener('click', () => {
    alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');

});


const buttonLearnMoreThree = document.querySelector('#buttonLearnMoreThree');

buttonLearnMoreThree.addEventListener('click', () => {
    alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');

});


const viewMoreAwards = document.querySelector('#viewMoreAwards');

viewMoreAwards.addEventListener('click', () => {
    alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');

});


const contactUsBottom = document.querySelector('#contactUsBottom');

contactUsBottom.addEventListener('click', () => {
    alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');

});


const findDealer = document.querySelector('#findDealer');

findDealer.addEventListener('click', () => {
    alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});


const midOne = document.querySelector('#midOne');
const midTwo = document.querySelector('#midTwo');
const midThree = document.querySelector('#midThree');
const midFour = document.querySelector('#midFour');
const midFive = document.querySelector('#midFive');




window.addEventListener('scroll', function() {
    var screenHeight = window.innerHeight;
    var percentToTriggerAction = 50; // Na primer, 30% visine ekrana
    var pixelsToTriggerAction = (percentToTriggerAction / 100) * screenHeight;
    var scrolled = window.scrollY;

    if (scrolled >= pixelsToTriggerAction) {
        midOne.style.visibility = 'visible';
        midTwo.style.visibility = 'visible';
        setTimeout(() => {
        midThree.style.visibility = 'visible';
        midFour.style.visibility = 'visible';
        midFive.style.visibility = 'visible';
    }, 1000);
    }
});







contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });

  contactSerbianBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });
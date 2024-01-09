

const contactEnglishBtn = document.querySelector('#contactEnglish');

contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });


  const positionOne = document.querySelector('#positionOne');
  const positionTwo = document.querySelector('#positionTwo');
  const positionThree = document.querySelector('#positionThree');
  const positionFour = document.querySelector('#positionFour');
  const positionFive = document.querySelector('#positionFive');
  const positionSix = document.querySelector('#positionSix');
  const positionSeven = document.querySelector('#positionSeven');
  const positionEight = document.querySelector('#positionEight');
  const positionNine = document.querySelector('#positionNine');
  const positionShop = document.querySelector('#positionShop');
  const positionLevelTwo = document.querySelector('#positionLevelTwo');



  const walkerLeftFieldOneElement = document.querySelector('#walkerLeftFieldOne');

  
  function moveWalkerLeftFieldOne() {
    walkerLeftFieldOneElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldOneElement.style.transform = 'translateX(+250%)';
  }

  function moveWalkerLeftFieldOneReverse() {
    walkerLeftFieldOneElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldOneElement.style.transform = 'translateX(+0%)';
  }

 
  const walkerLeftFieldTwoElement = document.querySelector('#walkerLeftFieldTwo');

  
  function moveWalkerLeftFieldTwo() {
    walkerLeftFieldTwoElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldTwoElement.style.transform = 'translateX(200%) translateY(-70%)';
  }
  
  

  function moveWalkerLeftFieldTwoReverse() {
    walkerLeftFieldTwoElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldTwoElement.style.transform = 'translateX(+0%)';
  }
  
  const walkerLeftFieldTwoUpElement = document.querySelector('#walkerLeftFieldTwoUp');
  
  function moveWalkerLeftFieldTwoUp() {
    walkerLeftFieldTwoUpElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldTwoUpElement.style.transform = 'translateY(-240%)';
  }

  function moveWalkerLeftFieldTwoUpReverse() {
    walkerLeftFieldTwoUpElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldTwoUpElement.style.transform = 'translateY(+0%)';
  }

  const walkerLeftFieldTwoDownElement = document.querySelector('#walkerLeftFieldTwoDown');
  
  function moveWalkerLeftFieldTwoDown() {
    walkerLeftFieldTwoDownElement.style.transition = 'transform 0.8s ease-in-out';
    walkerLeftFieldTwoDownElement.style.transform = 'translateY(+180%)';
    setTimeout(() => {
    walkerLeftFieldTwoDownElement.style.transition = 'transform 0.2s ease-in-out';
    walkerLeftFieldTwoDownElement.style.transform = 'translateY(+200%) translateX(+30%)';
    }, 800);
    setTimeout(() => {
      walkerLeftFieldTwoDownElement.style.transition = 'transform 1.5s ease-in-out';
      walkerLeftFieldTwoDownElement.style.transform =  'translateY(+250%) translateX(+170%)';
      }, 1000);
  }

  function moveWalkerLeftFieldTwoDownReverse() {
    walkerLeftFieldTwoDownElement.style.transition = 'transform 1.2s ease-in-out';
    walkerLeftFieldTwoDownElement.style.transform =  'translateY(+200%) translateX(+30%)';
    setTimeout(() => {
    walkerLeftFieldTwoDownElement.style.transition = 'transform 0.3s ease-in-out';
    walkerLeftFieldTwoDownElement.style.transform = 'translateY(+180%) translateX(0%)';
    }, 1200);
    setTimeout(() => {
      walkerLeftFieldTwoDownElement.style.transition = 'transform 1s ease-in-out';
      walkerLeftFieldTwoDownElement.style.transform =  'translateY(+0%) translateX(+0%)';
      }, 1500);
  }
  

  const walkerLeftFieldFiveElement = document.querySelector('#walkerLeftFieldFive');

  function moveWalkerLeftFieldFive() {
    walkerLeftFieldFiveElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldFiveElement.style.transform = 'translateX(200%) translateY(-50%)';
  }

  function moveWalkerLeftFieldFiveReverse() {
    walkerLeftFieldFiveElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldFiveElement.style.transform = 'translateX(0%) translateY(0%)';
  }
  
  const walkerLeftFieldShopElement = document.querySelector('#walkerLeftFieldShop');

  
  function moveWalkerLeftFieldShop() {
    walkerLeftFieldShopElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldShopElement.style.transform = 'translateX(0%)';
  }
  
  

  function moveWalkerLeftFieldShopReverse() {
    walkerLeftFieldShopElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldShopElement.style.transform = 'translateX(-150%)';
  }


  const walkerLeftFieldFourElement = document.querySelector('#walkerLeftFieldFour');

  function moveWalkerLeftFieldFour() {
    walkerLeftFieldFourElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldFourElement.style.transform = 'translateX(180%) translateY(-20%)';
  }

  function moveWalkerLeftFieldFourReverse() {
    walkerLeftFieldFourElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldFourElement.style.transform = 'translateX(0%) translateY(0%)';
  }


  const walkerLeftFieldSixElement = document.querySelector('#walkerLeftFieldSix');

  function moveWalkerLeftFieldSix() {
    walkerLeftFieldSixElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldSixElement.style.transform = 'translateX(180%)';
  }

  function moveWalkerLeftFieldSixReverse() {
    walkerLeftFieldSixElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldSixElement.style.transform = 'translateX(0%)';
  }

  const walkerLeftFieldEightElement = document.querySelector('#walkerLeftFieldEight');

  function moveWalkerLeftFieldEight() {
    walkerLeftFieldEightElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldEightElement.style.transform = 'translateY(200%) translateX(30%)';
  }

  function moveWalkerLeftFieldEightReverse() {
    walkerLeftFieldEightElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldEightElement.style.transform = 'translateY(0%) translateX(0%)';
  }

  const walkerLeftFieldSevenElement = document.querySelector('#walkerLeftFieldSeven');

  function moveWalkerLeftFieldSeven() {
    walkerLeftFieldSevenElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldSevenElement.style.transform = 'translateY(-250%) translateX(10%)';
  }

  function moveWalkerLeftFieldSevenReverse() {
    walkerLeftFieldSevenElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldSevenElement.style.transform = 'translateY(0%) translateX(0%)';
  }
  


  const walkerLeftFieldNineElement = document.querySelector('#walkerLeftFieldNine');

  function moveWalkerLeftFieldNine() {
    walkerLeftFieldNineElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldNineElement.style.transform = 'translateX(140%) translateY(-40%)';
  }
  
  

  function moveWalkerLeftFieldNineReverse() {
    walkerLeftFieldNineElement.style.transition = 'transform 2.5s ease-in-out';
    walkerLeftFieldNineElement.style.transform = 'translateX(+0%) translateY(0%)';
  }


  positionOne.style.display = 'block';
  positionTwo.style.display = 'block';
  positionThree.style.display = 'none';
  positionFour.style.display = 'none';
  positionFive.style.display = 'none';
  positionSix.style.display = 'none';
  positionSeven.style.display = 'none';
  positionEight.style.display = 'none';
  positionNine.style.display = 'none';
  positionShop.style.display = 'none';
  positionLevelTwo.style.display = 'none';



positionOne.addEventListener('click', () => {
  positionTwo.style.backgroundSize = '0% 0%';
  walkerLeftFieldOneElement.style.display = 'block';
  positionOne.style.display = 'none';
  positionTwo.style.display = 'none';
  positionThree.style.display = 'none';
  positionFour.style.display = 'none';
  positionFive.style.display = 'none';
  positionSix.style.display = 'none';
  positionSeven.style.display = 'none';
  positionEight.style.display = 'none';
  positionNine.style.display = 'none';
  positionShop.style.display = 'none';
  positionLevelTwo.style.display = 'none';
  setTimeout(() => {
    moveWalkerLeftFieldOneReverse();
  }, 100);
  setTimeout(() => {
    positionOne.style.backgroundSize = '100% 100%';
    positionThree.style.backgroundSize = '0% 0%';
    positionFour.style.backgroundSize = '0% 0%';
    positionFive.style.backgroundSize = '0% 0%';
    positionSix.style.backgroundSize = '0% 0%';
    positionSeven.style.backgroundSize = '0% 0%';
    positionEight.style.backgroundSize = '0% 0%';
    positionNine.style.backgroundSize = '0% 0%';
    positionShop.style.backgroundSize = '0% 0%';
    positionLevelTwo.style.backgroundSize = '0% 0%';

    positionOne.style.display = 'block';
    positionTwo.style.display = 'block';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldOneElement.style.display = 'none';
  }, 2500);
    
});



positionTwo.addEventListener('click', () => {
  if(positionOne.style.display == 'block'){
  positionOne.style.backgroundSize = '0% 0%';
  walkerLeftFieldOneElement.style.display = 'block';
  positionOne.style.display = 'none';
  positionTwo.style.display = 'none';
  positionThree.style.display = 'none';
  positionFour.style.display = 'none';
  positionFive.style.display = 'none';
  positionSix.style.display = 'none';
  positionSeven.style.display = 'none';
  positionEight.style.display = 'none';
  positionNine.style.display = 'none';
  positionShop.style.display = 'none';
  positionLevelTwo.style.display = 'none';
  setTimeout(() => {
    moveWalkerLeftFieldOne();
  }, 100);
} else if (positionThree.style.display == 'block'){
  positionThree.style.backgroundSize = '0% 0%';
  walkerLeftFieldTwoElement.style.display = 'block';
  positionOne.style.display = 'none';
  positionTwo.style.display = 'none';
  positionThree.style.display = 'none';
  positionFour.style.display = 'none';
  positionFive.style.display = 'none';
  positionSix.style.display = 'none';
  positionSeven.style.display = 'none';
  positionEight.style.display = 'none';
  positionNine.style.display = 'none';
  positionShop.style.display = 'none';
  positionLevelTwo.style.display = 'none';
  setTimeout(() => {
    moveWalkerLeftFieldTwoReverse();
  }, 100);
} else if(positionFour.style.display == 'block'){
  positionFour.style.backgroundSize = '0% 0%';
  walkerLeftFieldTwoUpElement.style.display = 'block';
  positionOne.style.display = 'none';
  positionTwo.style.display = 'none';
  positionThree.style.display = 'none';
  positionFour.style.display = 'none';
  positionFive.style.display = 'none';
  positionSix.style.display = 'none';
  positionSeven.style.display = 'none';
  positionEight.style.display = 'none';
  positionNine.style.display = 'none';
  positionShop.style.display = 'none';
  positionLevelTwo.style.display = 'none';
  setTimeout(() => {
    moveWalkerLeftFieldTwoUpReverse();
    moveWalkerLeftFieldTwoDownReverse();
    moveWalkerLeftFieldFiveReverse();
    moveWalkerLeftFieldSevenReverse();
  }, 100);
} else if(positionFive.style.display == 'block'){
  positionFive.style.backgroundSize = '0% 0%';
  walkerLeftFieldTwoDownElement.style.display = 'block';
  positionOne.style.display = 'none';
  positionTwo.style.display = 'none';
  positionThree.style.display = 'none';
  positionFour.style.display = 'none';
  positionFive.style.display = 'none';
  positionSix.style.display = 'none';
  positionSeven.style.display = 'none';
  positionEight.style.display = 'none';
  positionNine.style.display = 'none';
  positionShop.style.display = 'none';
  positionLevelTwo.style.display = 'none';
  setTimeout(() => {
    moveWalkerLeftFieldTwoDownReverse();
    moveWalkerLeftFieldTwoUpReverse();
    moveWalkerLeftFieldFourReverse();
    moveWalkerLeftFieldSixReverse();
    moveWalkerLeftFieldEightReverse();
  }, 100);
}
  setTimeout(() => {
  positionTwo.style.backgroundSize = '100% 100%';
  positionThree.style.backgroundSize = '0% 0%';
  positionFour.style.backgroundSize = '0% 0%';
  positionFive.style.backgroundSize = '0% 0%';
  positionSix.style.backgroundSize = '0% 0%';
  positionSeven.style.backgroundSize = '0% 0%';
  positionEight.style.backgroundSize = '0% 0%';
  positionNine.style.backgroundSize = '0% 0%';
  positionShop.style.backgroundSize = '0% 0%';
  positionLevelTwo.style.backgroundSize = '0% 0%';

    positionOne.style.display = 'block';
    positionTwo.style.display = 'block';
    positionThree.style.display = 'block';
    positionFour.style.display = 'block';
    positionFive.style.display = 'block';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldOneElement.style.display = 'none';
    walkerLeftFieldTwoElement.style.display = 'none';
    walkerLeftFieldTwoUpElement.style.display = 'none';
    walkerLeftFieldTwoDownElement.style.display = 'none';
  }, 2500);
});


positionThree.addEventListener('click', () => {
  positionTwo.style.backgroundSize = '0% 0%';
  walkerLeftFieldTwoElement.style.display = 'block';
  positionOne.style.display = 'none';
  positionTwo.style.display = 'none';
  positionThree.style.display = 'none';
  positionFour.style.display = 'none';
  positionFive.style.display = 'none';
  positionSix.style.display = 'none';
  positionSeven.style.display = 'none';
  positionEight.style.display = 'none';
  positionNine.style.display = 'none';
  positionShop.style.display = 'none';
  positionLevelTwo.style.display = 'none';
  setTimeout(() => {
    moveWalkerLeftFieldTwo();
  }, 100);
  setTimeout(() => {
positionOne.style.backgroundSize = '0% 0%';
positionTwo.style.backgroundSize = '0% 0%';
positionThree.style.backgroundSize = '100% 100%';
positionFour.style.backgroundSize = '0% 0%';
positionFive.style.backgroundSize = '0% 0%';
positionSix.style.backgroundSize = '0% 0%';
positionSeven.style.backgroundSize = '0% 0%';
positionEight.style.backgroundSize = '0% 0%';
positionNine.style.backgroundSize = '0% 0%';
positionShop.style.backgroundSize = '0% 0%';
positionLevelTwo.style.backgroundSize = '0% 0%';

    positionOne.style.display = 'none';
    positionTwo.style.display = 'block';
    positionThree.style.display = 'block';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldTwoElement.style.display = 'none';
  }, 2500);
});

positionFour.addEventListener('click', () => {
  if(positionThree.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldTwoUpElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldTwoUp();
    }, 100);
  } else if(positionShop.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldShopElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldShop();
    }, 100);
  } else if(positionFour.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldFourElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldFourReverse();
    }, 100);
  }
  setTimeout(() => {
  positionOne.style.backgroundSize = '0% 0%';
  positionTwo.style.backgroundSize = '0% 0%';
  positionThree.style.backgroundSize = '0% 0%';
  positionFour.style.backgroundSize = '100% 100%';
  positionFive.style.backgroundSize = '0% 0%';
  positionSix.style.backgroundSize = '0% 0%';
  positionSeven.style.backgroundSize = '0% 0%';
  positionEight.style.backgroundSize = '0% 0%';
  positionNine.style.backgroundSize = '0% 0%';
  positionShop.style.backgroundSize = '0% 0%';
  positionLevelTwo.style.backgroundSize = '0% 0%';
  
    positionOne.style.display = 'none';
    positionTwo.style.display = 'block';
    positionThree.style.display = 'none';
    positionFour.style.display = 'block';
    positionFive.style.display = 'none';
    positionSix.style.display = 'block';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'block';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldTwoUpElement.style.display = 'none';
    walkerLeftFieldShopElement.style.display = 'none';
    walkerLeftFieldFourElement.style.display = 'none';
  }, 2500);
});

positionFive.addEventListener('click', () => {
  if(positionFour.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldTwoDownElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldTwoDown();
    }, 100);
  } else if(positionSeven.style.display == 'block') {
    positionSeven.style.backgroundSize = '0% 0%';
    walkerLeftFieldFiveElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldFiveReverse();
    }, 100);
  }
  
  setTimeout(() => {
  positionOne.style.backgroundSize = '0% 0%';
  positionTwo.style.backgroundSize = '0% 0%';
  positionThree.style.backgroundSize = '0% 0%';
  positionFour.style.backgroundSize = '0% 0%';
  positionFive.style.backgroundSize = '100% 100%';
  positionSix.style.backgroundSize = '0% 0%';
  positionSeven.style.backgroundSize = '0% 0%';
  positionEight.style.backgroundSize = '0% 0%';
  positionNine.style.backgroundSize = '0% 0%';
  positionShop.style.backgroundSize = '0% 0%';
  positionLevelTwo.style.backgroundSize = '0% 0%';

  positionOne.style.display = 'none';
    positionTwo.style.display = 'block';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'block';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'block';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldTwoDownElement.style.display = 'none';
    walkerLeftFieldFiveElement.style.display = 'none';
  }, 2500);
});

positionSix.addEventListener('click', () => {
  if(positionFour.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldFourElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldFour();
    }, 100);
  }
  else if(positionNine.style.display == 'block') {
    positionSeven.style.backgroundSize = '0% 0%';
    walkerLeftFieldSixElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldSixReverse();
    }, 100);
  }
  setTimeout(() => {
positionOne.style.backgroundSize = '0% 0%';
positionTwo.style.backgroundSize = '0% 0%';
positionThree.style.backgroundSize = '0% 0%';
positionFour.style.backgroundSize = '0% 0%';
positionFive.style.backgroundSize = '0% 0%';
positionSix.style.backgroundSize = '100% 100%';
positionSeven.style.backgroundSize = '0% 0%';
positionEight.style.backgroundSize = '0% 0%';
positionNine.style.backgroundSize = '0% 0%';
positionShop.style.backgroundSize = '0% 0%';
positionLevelTwo.style.backgroundSize = '0% 0%';

    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'block';
    positionFive.style.display = 'none';
    positionSix.style.display = 'block';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'block';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldFourElement.style.display = 'none';
    walkerLeftFieldSixElement.style.display = 'none';
  }, 2500);
});


positionSeven.addEventListener('click', () => {
  if(positionFive.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldFiveElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldFive();
    }, 100);
  }
 else if(positionLevelTwo.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldSevenElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldSevenReverse();
    }, 100);
  }
  setTimeout(() => {
positionOne.style.backgroundSize = '0% 0%';
positionTwo.style.backgroundSize = '0% 0%';
positionThree.style.backgroundSize = '0% 0%';
positionFour.style.backgroundSize = '0% 0%';
positionFive.style.backgroundSize = '0% 0%';
positionSix.style.backgroundSize = '0% 0%';
positionSeven.style.backgroundSize = '100% 100%';
positionEight.style.backgroundSize = '0% 0%';
positionNine.style.backgroundSize = '0% 0%';
positionShop.style.backgroundSize = '0% 0%';
positionLevelTwo.style.backgroundSize = '0% 0%';

positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'block';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'block';
    positionEight.style.display = 'none';
    positionNine.style.display = 'block';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldFiveElement.style.display = 'none';
    walkerLeftFieldSevenElement.style.display = 'none';
  }, 2500);
});

positionEight.addEventListener('click', () => {
  if(positionFour.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldSixElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldSix();
    }, 100);
  }
  else if(positionSeven.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldEightElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldEightReverse();
    }, 100);
  }
  setTimeout(() => {
positionOne.style.backgroundSize = '0% 0%';
positionTwo.style.backgroundSize = '0% 0%';
positionThree.style.backgroundSize = '0% 0%';
positionFour.style.backgroundSize = '0% 0%';
positionFive.style.backgroundSize = '0% 0%';
positionSix.style.backgroundSize = '0% 0%';
positionSeven.style.backgroundSize = '0% 0%';
positionEight.style.backgroundSize = '100% 100%';
positionNine.style.backgroundSize = '0% 0%';
positionShop.style.backgroundSize = '0% 0%';
positionLevelTwo.style.backgroundSize = '0% 0%';

positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'block';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'block';
    positionNine.style.display = 'block';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldSixElement.style.display = 'none';
    walkerLeftFieldEightElement.style.display = 'none';
  }, 2500);
});

positionNine.addEventListener('click', () => {
  if(positionSix.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldEightElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldEight();
      moveWalkerLeftFieldSeven();
      moveWalkerLeftFieldFive();
      moveWalkerLeftFieldTwoDown();
    }, 100);
  }
  else if(positionFive.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldSevenElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldSeven();
      moveWalkerLeftFieldEight();
      moveWalkerLeftFieldSix();
      moveWalkerLeftFieldFour();
      moveWalkerLeftFieldTwoUp();
    }, 100);
  }
  else if(positionNine.style.display == 'block') {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldNineElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';      
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldNineReverse();
    }, 100);
  }

  setTimeout(() => {
  positionOne.style.backgroundSize = '0% 0%';
  positionTwo.style.backgroundSize = '0% 0%';
  positionThree.style.backgroundSize = '0% 0%';
  positionFour.style.backgroundSize = '0% 0%';
  positionFive.style.backgroundSize = '0% 0%';
  positionSix.style.backgroundSize = '0% 0%';
  positionSeven.style.backgroundSize = '0% 0%';
  positionEight.style.backgroundSize = '0% 0%';
  positionNine.style.backgroundSize = '100% 100%';
  positionShop.style.backgroundSize = '0% 0%';
  positionLevelTwo.style.backgroundSize = '0% 0%';

  positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'block';
    positionEight.style.display = 'block';
    positionNine.style.display = 'block';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'block';

    walkerLeftFieldEightElement.style.display = 'none';
    walkerLeftFieldSevenElement.style.display = 'none';
    walkerLeftFieldNineElement.style.display = 'none';
  }, 2500);
  });
  
  
  positionShop.addEventListener('click', () => {
    positionTwo.style.backgroundSize = '0% 0%';
    walkerLeftFieldShopElement.style.display = 'block';
    positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'none';
    setTimeout(() => {
      moveWalkerLeftFieldShopReverse();
    }, 100);
    setTimeout(() => {
  positionOne.style.backgroundSize = '0% 0%';
  positionTwo.style.backgroundSize = '0% 0%';
  positionThree.style.backgroundSize = '0% 0%';
  positionFour.style.backgroundSize = '0% 0%';
  positionFive.style.backgroundSize = '0% 0%';
  positionSix.style.backgroundSize = '0% 0%';
  positionSeven.style.backgroundSize = '0% 0%';
  positionEight.style.backgroundSize = '0% 0%';
  positionNine.style.backgroundSize = '0% 0%';
  positionShop.style.backgroundSize = '100% 100%';
  positionLevelTwo.style.backgroundSize = '0% 0%';

  positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'block';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'none';
    positionShop.style.display = 'block';
    positionLevelTwo.style.display = 'none';

    walkerLeftFieldShopElement.style.display = 'none';
  }, 2500);
  });
  
  positionLevelTwo.addEventListener('click', () => {
    if(positionLevelTwo.style.display == 'block') {
      positionTwo.style.backgroundSize = '0% 0%';
      walkerLeftFieldNineElement.style.display = 'block';
      positionOne.style.display = 'none';
      positionTwo.style.display = 'none';
      positionThree.style.display = 'none';
      positionFour.style.display = 'none';
      positionFive.style.display = 'none';
      positionSix.style.display = 'none';
      positionSeven.style.display = 'none';
      positionEight.style.display = 'none';      
      positionNine.style.display = 'none';
      positionShop.style.display = 'none';
      positionLevelTwo.style.display = 'none';
      setTimeout(() => {
        moveWalkerLeftFieldNine();
      }, 100);
    }
    setTimeout(() => {
  positionOne.style.backgroundSize = '0% 0%';
  positionTwo.style.backgroundSize = '0% 0%';
  positionThree.style.backgroundSize = '0% 0%';
  positionFour.style.backgroundSize = '0% 0%';
  positionFive.style.backgroundSize = '0% 0%';
  positionSix.style.backgroundSize = '0% 0%';
  positionSeven.style.backgroundSize = '0% 0%';
  positionEight.style.backgroundSize = '0% 0%';
  positionNine.style.backgroundSize = '0% 0%';
  positionShop.style.backgroundSize = '0% 0%';
  positionLevelTwo.style.backgroundSize = '100% 100%';

  positionOne.style.display = 'none';
    positionTwo.style.display = 'none';
    positionThree.style.display = 'none';
    positionFour.style.display = 'none';
    positionFive.style.display = 'none';
    positionSix.style.display = 'none';
    positionSeven.style.display = 'none';
    positionEight.style.display = 'none';
    positionNine.style.display = 'block';
    positionShop.style.display = 'none';
    positionLevelTwo.style.display = 'block';

    walkerLeftFieldNineElement.style.display = 'none';
  }, 2500);
  });

  

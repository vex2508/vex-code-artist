
const contactEnglishBtn = document.querySelector('#contactEnglish');

contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });

  function mouseDownFalse(){
    isMouseDown = false;
  }

const arrowRight = document.querySelector('#arrowRight');
const arrowLeft = document.querySelector('#arrowLeft');
const SonyaBlade = document.querySelector('#SonyaBlade');
const SonyaBladeWalk = document.querySelector('#SonyaBladeWalk');
let walk = 0;
let isMouseDown = false;


const JoeBiden = document.querySelector('#JoeBiden');
const bidenPartOne = document.querySelector('#bidenPartOne');
const bidenPartTwo = document.querySelector('#bidenPartTwo');
const bidenPartThree = document.querySelector('#bidenPartThree');
const bidenPartFour = document.querySelector('#bidenPartFour');




JoeBiden.style.right = '0vw';
SonyaBlade.style.left = walk + 'px';
SonyaBlade.style.left < '60vw';

arrowRight.addEventListener('mousedown', () => {
  isMouseDown = true;
  repeatMoveSonyaBlade();
});

arrowRight.addEventListener('touchstart', () => {
  isMouseDown = true;
  repeatMoveSonyaBlade();
});


arrowRight.addEventListener('mouseup', () => {
  isMouseDown = false;
});

arrowRight.addEventListener('touchend', () => {
  isMouseDown = false;
});

function repeatMoveSonyaBlade() {
  if (isMouseDown) {
    walk += 25;
    SonyaBlade.style.left = walk + 'px';
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaWalk.png")';

    setTimeout(() => {
      walk += 25;
      SonyaBlade.style.left = walk + 'px';
      SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
      setTimeout(repeatMoveSonyaBlade, 50);
    }, 50);
  }
}




// Za desktop - mousedown i mouseup događaji
arrowLeft.addEventListener('mousedown', () => {
  isMouseDown = true;
  repeatMoveBackSonyaBlade();
});

arrowLeft.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Za mobilne uređaje - touchstart i touchend događaji
arrowLeft.addEventListener('touchstart', () => {
  isMouseDown = true;
  repeatMoveBackSonyaBlade();
});

arrowLeft.addEventListener('touchend', () => {
  isMouseDown = false;
});


function repeatMoveBackSonyaBlade() {
  if (isMouseDown) {
    walk -= 25;
    SonyaBlade.style.left = walk + 'px';
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaWalk.png")';

    setTimeout(() => {
      walk -= 25;
      SonyaBlade.style.left = walk + 'px';
      SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
      setTimeout(repeatMoveBackSonyaBlade, 100);
    }, 50);
  }
}




const leftArmPunchButton = document.querySelector('#leftArmPunchButton');
const leftArmPunch = document.querySelector('#leftArmPunch')


leftArmPunchButton.addEventListener('click', () =>{
  leftArmPunch.style.width = '210px';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaLeftArmPunch.png")';
  SonyaBladeWalk.style.width = '250px';
  checkCollisionArm();
  setTimeout(() => {
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    SonyaBladeWalk.style.width = '';
    leftArmPunch.style.width = '';
  }, 50);
});


leftArmPunchButton.addEventListener('touch', () =>{
  leftArmPunch.style.width = '210px';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaLeftArmPunch.png")';
  SonyaBladeWalk.style.width = '250px';
  checkCollisionArm();
  checkCollisionArmTorso();
  setTimeout(() => {
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    SonyaBladeWalk.style.width = '';
    leftArmPunch.style.width = '';
  }, 50);
});




const rightLegHighKick = document.querySelector('#rightLegHighKick');
const rightLegHighKickButton = document.querySelector('#rightLegHighKickButton')


rightLegHighKickButton.addEventListener('click', () =>{
  rightLegHighKick.style.width = '220px';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaRightHighKick.png")';
  SonyaBladeWalk.style.width = '250px';
  checkCollisionLeg();
  setTimeout(() => {
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    SonyaBladeWalk.style.width = '';
    rightLegHighKick.style.width = '';
  }, 100);
});
rightLegHighKickButton.addEventListener('touch', () =>{
  rightLegHighKick.style.width = '220px';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaRightHighKick.png")';
  SonyaBladeWalk.style.width = '250px';
  checkCollisionLeg();
  setTimeout(() => {
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    SonyaBladeWalk.style.width = '';
    rightLegHighKick.style.width = '';
  }, 100);
});




const blockTop = document.querySelector('#blockTop');
const blockTopButton = document.querySelector('#blockTopButton')


// Za desktop - mousedown i mouseup događaji
blockTopButton.addEventListener('mousedown', () => {
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaBlock.png")';
  SonyaBladeWalk.style.width = '150px';
});

blockTopButton.addEventListener('mouseup', () => {
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
  SonyaBladeWalk.style.width = '';
});

// Za mobilne uređaje - touchstart i touchend događaji
blockTopButton.addEventListener('touchstart', () => {
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaBlock.png")';
  SonyaBladeWalk.style.width = '150px';
});

blockTopButton.addEventListener('touchend', () => {
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
  SonyaBladeWalk.style.width = '';
});


function checkCollisionArm() {
  const leftArmPunchRect = leftArmPunch.getBoundingClientRect();
  const JoeBidenOneRect = bidenPartOne.getBoundingClientRect();
  const JoeBidenTwoRect = bidenPartTwo.getBoundingClientRect();

  if (
    leftArmPunchRect.left < JoeBidenOneRect.right &&
    leftArmPunchRect.right > JoeBidenOneRect.left &&
    leftArmPunchRect.top < JoeBidenOneRect.bottom &&
    leftArmPunchRect.bottom > JoeBidenOneRect.top
  ) {
    console.log('udarac rukom');
    bidenPartOne.style.backgroundImage = 'url("webAppModelThreeImage/JoeBidenHead.png")';
    setTimeout(() => {
      bidenPartOne.style.backgroundImage = '';
    }, 100);
  }

  if (
    leftArmPunchRect.left < JoeBidenTwoRect.right &&
    leftArmPunchRect.right > JoeBidenTwoRect.left &&
    leftArmPunchRect.top < JoeBidenTwoRect.bottom &&
    leftArmPunchRect.bottom > JoeBidenTwoRect.top
  ) {
    console.log('udarac rukom');
    bidenPartTwo.style.backgroundImage = 'url("webAppModelThreeImage/JoeBidenTorso.png")';
    setTimeout(() => {
      bidenPartTwo.style.backgroundImage = '';
    }, 100);
  }

}


function checkCollisionArmTorso() {
  const leftArmPunchRect = leftArmPunch.getBoundingClientRect();
  const JoeBidenTwoRect = bidenPartTwo.getBoundingClientRect();

  if (
    leftArmPunchRect.left < JoeBidenTwoRect.right &&
    leftArmPunchRect.right > JoeBidenTwoRect.left &&
    leftArmPunchRect.top < JoeBidenTwoRect.bottom &&
    leftArmPunchRect.bottom > JoeBidenTwoRect.top
  ) {
    console.log('udarac rukom');
    bidenPartTwo.style.backgroundImage = 'url("webAppModelThreeImage/JoeBidenTorso.png")';
    setTimeout(() => {
      bidenPartTwo.style.backgroundImage = '';
    }, 100);
  }

}








function checkCollisionLeg() {
  const rightLegHighKickRect = rightLegHighKick.getBoundingClientRect();
  const JoeBidenRect = JoeBiden.getBoundingClientRect();

  if (
    rightLegHighKickRect.left < JoeBidenRect.right &&
    rightLegHighKickRect.right > JoeBidenRect.left &&
    rightLegHighKickRect.top < JoeBidenRect.bottom &&
    rightLegHighKickRect.bottom > JoeBidenRect.top
  ) {
    console.log('udarac nogom');
    JoeBiden.style.backgroundImage = 'url("webAppModelThreeImage/JoeDevil.png")';
    setTimeout(() => {
      JoeBiden.style.backgroundImage = 'url("webAppModelThreeImage/boxingBag.png")';
    }, 100);
  }

}






const arrowUp = document.querySelector('#arrowUp');

arrowUp.addEventListener('click', () =>{
  SonyaBlade.style.bottom = '3vh';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStraightJump.png")';
  arrowUp.style.display ='none';
  setTimeout(() => {
  SonyaBlade.style.bottom = '6vh';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStraightJump.png")';
  }, 75);
  setTimeout(() => {
    SonyaBlade.style.bottom = '3vh';
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStraightJump.png")';
    }, 150);
  setTimeout(() => {
    SonyaBlade.style.bottom = '-3vh';
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    arrowUp.style.display ='inline';
  }, 225);
});



function jumpRightUpSonyaBlade() {
  if (isMouseDown) {
    walk += 50;
    SonyaBlade.style.left = walk + 'px';
    setTimeout(() => {
      walk += 50;
      SonyaBlade.style.left = walk + 'px'; 
    }, 75);
    setTimeout(() => {
      walk += 50;
      SonyaBlade.style.left = walk + 'px'; 
    }, 150);
    setTimeout(() => {
      walk += 50;
      SonyaBlade.style.left = walk + 'px'; 
    }, 225);
  }
}

function jumpRightBackSonyaBlade() {
  if (isMouseDown) {
    walk -= 25;
    SonyaBlade.style.left = walk + 'px';
    setTimeout(() => {
      walk -= 25;
      SonyaBlade.style.left = walk + 'px'; 
    }, 75);
    setTimeout(() => {
      walk -= 25;
      SonyaBlade.style.left = walk + 'px'; 
    }, 150);
    setTimeout(() => {
      walk -= 25;
      SonyaBlade.style.left = walk + 'px'; 
    }, 225);
  }
}




const arrowUpRight = document.querySelector('#arrowUpRight');

arrowUpRight.addEventListener('mousedown', () =>{
  isMouseDown = true;
  SonyaBlade.style.bottom = '3vh';
  jumpRightUpSonyaBlade();
  arrowUpRight.style.display = 'none';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStraightJump.png")';
  setTimeout(() => {
  SonyaBlade.style.bottom = '6vh';
  leftArmPunchButton.click();
 
  }, 75);
  setTimeout(() => {
    SonyaBlade.style.bottom = '3vh';
   
    }, 150);
  setTimeout(() => {
    SonyaBlade.style.bottom = '-3vh';
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    isMouseDown = false;
    arrowUpRight.style.display = 'inline';
  }, 225);
});

const arrowUpRightLeg = document.querySelector('#arrowUpRightLeg');

arrowUpRightLeg.addEventListener('mousedown', () =>{
  isMouseDown = true;
  SonyaBlade.style.bottom = '3vh';
  jumpRightUpSonyaBlade();
  arrowUpRightLeg.style.display = 'none';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStraightJump.png")';
  setTimeout(() => {
  SonyaBlade.style.bottom = '6vh';
  rightLegHighKickButton.click();
  }, 75);
  setTimeout(() => {
    SonyaBlade.style.bottom = '3vh';
   
    }, 150);
  setTimeout(() => {
    SonyaBlade.style.bottom = '-3vh';
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    isMouseDown = false;
    arrowUpRightLeg.style.display = 'inline';
  }, 225);
});



const arrowUpBack = document.querySelector('#arrowUpBack');

arrowUpBack.addEventListener('mousedown', () =>{
  isMouseDown = true;
  SonyaBlade.style.bottom = '3vh';
  jumpRightBackSonyaBlade();
  arrowUpBack.style.display = 'none';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStraightJump.png")';
  setTimeout(() => {
  SonyaBlade.style.bottom = '6vh';
  }, 75);
  setTimeout(() => {
    SonyaBlade.style.bottom = '3vh';
   
    }, 150);
  setTimeout(() => {
    SonyaBlade.style.bottom = '-3vh';
    SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
    isMouseDown = false;
    arrowUpBack.style.display = 'inline';
  }, 225);
});




const arrowDown = document.querySelector('#arrowDown');


let arrowCounter = true;
const arrowDownKickButton = document.querySelector('#arrowDownKickButton');
const arrowDownKick = document.querySelector('#arrowDownKick');


arrowDown.addEventListener('mousedown', () =>{
  if(arrowCounter === true) {
  SonyaBlade.style.height = '250px';
  SonyaBladeWalk.style.height = '250px';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaSquat.png")';
  arrowCounter = false;
  arrowDownKickButton.style.display = 'inline';
  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'none';
  arrowUp.style.display = 'none';
  blockTopButton.style.display = 'none';
  leftArmPunchButton.style.display = 'none';
  rightLegHighKickButton.style.display = 'none';
  arrowUpRight.style.display ='none';
  arrowUpBack.style.display ='none';
  arrowUpRightLeg.style.display ='none';
  } else {
  SonyaBlade.style.height = '450px';
  SonyaBladeWalk.style.height = '450px';
  SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaStanding.png")';
  arrowCounter = true;
  arrowDownKickButton.style.display = 'none';
  arrowLeft.style.display = 'inline';
  arrowRight.style.display = 'inline';
  arrowUp.style.display = 'inline';
  blockTopButton.style.display = 'inline';
  leftArmPunchButton.style.display = 'inline';
  rightLegHighKickButton.style.display = 'inline';
  arrowUpRight.style.display ='inline';
  arrowUpBack.style.display ='inline';
  arrowUpRightLeg.style.display ='inline';
  }
});




arrowDownKickButton.addEventListener('click', () =>{
arrowDownKick.style.width = '270px';
SonyaBladeWalk.style.width = '300px';
SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaSquatKick.png")';
checkCollisionArrowDownKick();
setTimeout(() => {
arrowDownKick.style.width = '150px';
SonyaBladeWalk.style.width = '150px';
SonyaBladeWalk.style.backgroundImage = 'url("webAppModelThreeImage/SonyaSquat.png")'; 
}, 200);
})



function checkCollisionArrowDownKick() {
  const arrowDownKickRect = arrowDownKick.getBoundingClientRect();
  const JoeBidenRect = JoeBiden.getBoundingClientRect();

  if (
    arrowDownKickRect.left < JoeBidenRect.right &&
    arrowDownKickRect.right > JoeBidenRect.left &&
    arrowDownKickRect.top < JoeBidenRect.bottom &&
    arrowDownKickRect.bottom > JoeBidenRect.top
  ) {
    console.log('udarac nogom');
    JoeBiden.style.backgroundImage = 'url("webAppModelThreeImage/JoeDevil.png")';
    setTimeout(() => {
      JoeBiden.style.backgroundImage = 'url("webAppModelThreeImage/boxingBag.png")';
    }, 100);
  }

}



let screenLine1 = document.querySelector('#screenLine1');
let screenLine2 = document.querySelector('#screenLine2');
let screenLine3 = document.querySelector('#screenLine3');
let screenLine4 = document.querySelector('#screenLine4');
let screenLine5 = document.querySelector('#screenLine5');
let screenLine6 = document.querySelector('#screenLine6');
let screenLine7 = document.querySelector('#screenLine7');


const englishMenuScreenWords = [
    'Start', // [0]
    'Language', // [1]
    'Pick Serbian', // [2]
    '<< back', // [3]
    'USA' // [4]
];

const serbianMenuScreenWords = [
    'Pokreni', // [0]
    'Jezik', // [1]
    'Izaberi engleski', // [2]
    '<< nazad', // [3]
    'SRB', // [4] 
];


screenLine3.textContent = englishMenuScreenWords[0];
screenLine5.textContent = englishMenuScreenWords[1];


// english && serbian version
const startBtn = document.querySelector('#start');
startBtn.style.display = 'block';
const pokreniBtn = document.querySelector('#pokreni'); 

const languageBtn = document.querySelector('#language');
const jezikBtn = document.querySelector('#jezik'); 

const pickLanguageBtn = document.querySelector('#pickLanguage');
const izaberiJezikBtn = document.querySelector('#izaberiJezik'); 

const backFromLanguageBtn = document.querySelector('#backFromLanguage'); 
backFromLanguageBtn.textContent = englishMenuScreenWords[3];
const nazadIzJezikaBtn = document.querySelector('#nazadIzJezika');
nazadIzJezikaBtn.textContent = serbianMenuScreenWords[3];



// disabling startBtn and languageBtn
// enabling pickLanguageBtn and backFromLanguageButton
languageBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    languageBtn.style.display = 'none';
    pickLanguageBtn.style.display = 'block';
    backFromLanguageBtn.style.display = 'block';
    screenLine2.style.backgroundRepeat = 'no-repeat';
    screenLine2.style.backgroundPosition = 'top left';
    screenLine2.style.backgroundSize =  '210%  210%';
    screenLine2.style.height = '30%';
    screenLine2.style.width = '30%';
    screenLine3.textContent = englishMenuScreenWords[2];
    screenLine5.textContent = englishMenuScreenWords[3];
    setTimeout(() => {
        screenLine2.style.backgroundImage = "url('webAppModelOneImage/srbFlagPositionAll4.jpg')";
    }, 250);
});

// disabling pickLanguageBtn and backFromLanguageButton
// enabling startBtn and languageBtn
backFromLanguageBtn.addEventListener('click', () => {
    startBtn.style.display = 'block';
    languageBtn.style.display = 'block';
    pickLanguageBtn.style.display = 'none';
    backFromLanguageBtn.style.display = 'none';
    screenLine3.textContent = englishMenuScreenWords[0];
    screenLine5.textContent = englishMenuScreenWords[1];
    screenLine2.style.height = '';
    screenLine2.style.backgroundImage = 'none';
});



// function called when is the mouse over the pickLanguageBtn
function animationSrbFlagOnWind() {
    screenLine3.textContent = '';
    screenLine5.textContent = '';
    pickLanguageBtn.style.display = 'none';
    backFromLanguageBtn.style.display = 'none';
        screenLine2.style.backgroundImage = "url('webAppModelOneImage/srbFlagPositionAll4.jpg')";
        screenLine2.style.backgroundPosition = 'bottom right';
    setTimeout(() => {
        screenLine2.style.backgroundImage = "url('webAppModelOneImage/srbFlagPositionAll4.jpg')";
        screenLine2.style.backgroundPosition = 'bottom left'; 
    }, 250);
    setTimeout(() => {
        screenLine2.style.backgroundImage = "url('webAppModelOneImage/srbFlagPositionAll4.jpg')";
        screenLine2.style.backgroundPosition = 'top right'; 
    }, 500);
    setTimeout(() => {
        screenLine2.style.backgroundImage = "url('webAppModelOneImage/srbFlagPositionAll4.jpg')";
        screenLine2.style.backgroundPosition = 'top left';
    }, 750);
    setTimeout(() => {
        screenLine2.style.backgroundImage = "url('webAppModelOneImage/usaFlagPositionAll4.jpg')";
        screenLine2.style.backgroundPosition = 'top left';
        screenLine3.textContent = serbianMenuScreenWords[2];
        screenLine5.textContent = serbianMenuScreenWords[3];
        izaberiJezikBtn.style.display = 'block';   
        nazadIzJezikaBtn.style.display = 'block';
    }, 1000);

};



// disabling pickLanguageBtn and backFromLLanguageBtn
// enabling Serbian verson of the same buttons
pickLanguageBtn.addEventListener('click', () => {
    // calling animation flag on wind and animation does the rest
    animationSrbFlagOnWind(); 
});






// enabling pickLanguageBtn and backFromLLanguageBtn
// disabling Serbian verson of the same buttons
izaberiJezikBtn.addEventListener('click', () => {
   // calling animation flag on wind and animation does the rest
    animationUsaFlagOnWind();
});



// function called when is the mouse over the izaberiJezikBtn (the Serbian version of pickLanguageBtn)
function animationUsaFlagOnWind() {
    screenLine3.textContent = '';
    screenLine5.textContent = '';
    izaberiJezikBtn.style.display = 'none';
    nazadIzJezikaBtn.style.display = 'none';
    screenLine2.style.backgroundImage = "url('webAppModelOneImage/usaFlagPositionAll4.jpg')";
    screenLine2.style.backgroundPosition = 'bottom right';
setTimeout(() => {
    screenLine2.style.backgroundImage = "url('webAppModelOneImage/usaFlagPositionAll4.jpg')";
    screenLine2.style.backgroundPosition = 'bottom left';
}, 250);
setTimeout(() => {
    screenLine2.style.backgroundImage = "url('webAppModelOneImage/usaFlagPositionAll4.jpg')";
    screenLine2.style.backgroundPosition = 'top right';
}, 500);
setTimeout(() => {
    screenLine2.style.backgroundImage = "url('webAppModelOneImage/usaFlagPositionAll4.jpg')";
    screenLine2.style.backgroundPosition = 'top left';
}, 750); 
setTimeout(() => {
    screenLine2.style.backgroundImage = "url('webAppModelOneImage/SrbFlagPositionAll4.jpg')";
    screenLine2.style.backgroundPosition = 'top left';
    screenLine3.textContent = englishMenuScreenWords[2];
    screenLine5.textContent = englishMenuScreenWords[3];
    pickLanguageBtn.style.display = 'block';   
    backFromLanguageBtn.style.display = 'block';
}, 1000);
};

// disabling Serbian version of pickLanguageBtn and backFromLLanguageBtn
// enabling Serbian verson of startBtn and languageBtn
nazadIzJezikaBtn.addEventListener('click', () => {
    screenLine2.style.backgroundImage = 'none';
    screenLine2.style.height = '';
    izaberiJezikBtn.style.display = 'none';
    nazadIzJezikaBtn.style.display = 'none';
    screenLine3.textContent = serbianMenuScreenWords[0];
    screenLine5.textContent = serbianMenuScreenWords[1];
    pokreniBtn.style.display = 'block';
    jezikBtn.style.display = 'block';
});


// disabling Serbian verson of startBtn and languageBtn
// enabling Serbian verson of pickLanguageBtn and backFromLanguageBtn
jezikBtn.addEventListener('click', () => {
    pokreniBtn.style.display = 'none';
    jezikBtn.style.display = 'none';
    izaberiJezikBtn.style.display = 'block';
    nazadIzJezikaBtn.style.display = 'block';
    screenLine2.style.backgroundRepeat = 'no-repeat';
    screenLine2.style.backgroundPosition = 'top left';
    screenLine2.style.width = '30%';
    screenLine2.style.height = '30%';
    screenLine3.textContent = serbianMenuScreenWords[2];
    screenLine5.textContent = serbianMenuScreenWords[3];
    setTimeout(() => {
        screenLine2.style.backgroundImage = "url('webAppModelOneImage/usaFlagPositionAll4.jpg')"; 
    }, 250);
});




const playLevelOneBtn = document.querySelector('#playLevelOne');
const igrajNivoJedanBtn = document.querySelector('#igrajNivoJedan');
const backFromLevelOneBtn = document.querySelector('#backFromLevelOne');
const nazadIzNivoaJedanBtn = document.querySelector('#nazadIzNivoaJedan');
const theRedCurtainClosingSound = new Audio('audio/theRedCurtainClosing.mp3');
const theRedCurtainOpeningSound = new Audio('audio/theRedCurtainOpening.mp3');

englishMenuScreenWords.push('Play'); // [5]

// back already existing = [3] 

serbianMenuScreenWords.push('Igraj'); // [5]

// nazad => Serbian version of back = [3]



// parental element of screenLines
let screen = document.querySelector('#screen');

// Instructions organized like array for possible future manipulations
const instructionsEnglishLevel1 = [
    'Welcome to Level 1! Answer 10 multiple-choice questions within 8 seconds each. Your score is based on correct answers. Good luck!'
];


// Serbian instructions organized like array for possible future manipulations
const instructionsSerbianLevel1 = [
    'Dobrodošli na Nivo 1! Odgovorite na 10 pitanja sa više izbora unutar 8 sekundi svako.  Vaš rezultat zavisi od tačnih odgovora. Srećno!',
];

// On click trigger animations
startBtn.addEventListener('click', () => {
    animationTheRedCurtainFalling();
    startBtn.style.display = 'none';
    languageBtn.style.display = 'none';
    clearTimeout(timeoutLevelOne)
    setTimeout(() => {
        animationTheRedCurtainRissing(); 
        instructionsLevel1('english');
        screenLine3.textContent = '';
        screenLine5.textContent = '';
    }, 2500);
    setTimeout(() => {
        playLevelOneBtn.style.display = 'block';
        backFromLevelOneBtn.style.display = 'block';
        backFromLevelOneBtn.textContent = englishMenuScreenWords[3];
    }, 5000); 
});

// Serbian start on click trigger animations
pokreniBtn.addEventListener('click', () => {
    animationTheRedCurtainFalling();
    pokreniBtn.style.display = 'none';
    jezikBtn.style.display = 'none';
    clearTimeout(timeoutLevelOne)
    setTimeout(() => {
        animationTheRedCurtainRissing(); 
        instructionsLevel1('serbian');
        screenLine3.textContent = '';
        screenLine5.textContent = '';
    }, 2500); 
    setTimeout(() => {
        igrajNivoJedanBtn.style.display = 'block';
        nazadIzNivoaJedanBtn.style.display = 'block';
        nazadIzNivoaJedanBtn.textContent = serbianMenuScreenWords[3];
    }, 5000); 
});



// animation before level instructions
function animationTheRedCurtainFalling() {
    theRedCurtainClosingSound.play();
    screenLine1.style.zIndex = 3; 
    screenLine2.style.zIndex = 1;
    screenLine3.style.zIndex = 1;
    screenLine4.style.zIndex = 1;
    screenLine5.style.zIndex = 1;
    screenLine6.style.zIndex = 1;
    screenLine7.style.zIndex = 1;
    screen.style.zIndex = 0;
    screenLine1.style.width = '100%';
    screenLine1.style.backgroundImage = "url('webAppModelOneImage/theRedCurtain.jpg')";
    // if background image doesn't work, this is a safety measure
    screenLine1.style.backgroundColor = 'green';
    screenLine1.style.backgroundPosition = 'top';
    screenLine1.style.transform = 'scaleY(1)'; 
    screenLine1.style.transition = 'transform 2.5s ease-in-out';
    screenLine1.style.transform = 'scaleY(20)';
    screen.style.backgroundSize = '100% 100%';
    setTimeout(() => {
        theRedCurtainSound.stop(); 
    }, 2450);
}

// animation after level instructions
function animationTheRedCurtainRissing() {
    theRedCurtainOpeningSound.play();
    screenLine1.style.transform = 'scaleY(20)'; 
    screenLine1.style.transition = 'transform 2.5s ease-in-out';
    screenLine1.style.transform = 'scaleY(1)';
    screen.style.backgroundImage = "url('webAppModelOneImage/theTheaterStage.jpg')";
    screen.style.backgroundPosition = 'center';
    screen.style.backgroundSize = '100% 100%';
}

function disabledScreenBackgroundImage() {
    screen.style.backgroundImage = "";
    screen.style.backgroundPosition = '';
    screen.style.backgroundSize = '';
}

// function recognize buttons
function instructionsLevel1(language) {
    screenLine2.style.width = '80%';
    screenLine2.style.color = 'brown';
    screenLine2.style.textAlign = 'left';
    if (language === 'english') {
        screenLine6.textContent = englishMenuScreenWords[5];
        screenLine7.textContent = englishMenuScreenWords[3];
        screenLine2.textContent = instructionsEnglishLevel1;
    } else if (language === 'serbian') {
        screenLine6.textContent = serbianMenuScreenWords[5];
        screenLine7.textContent = serbianMenuScreenWords[3];
        screenLine2.textContent = instructionsSerbianLevel1;
    } 
}

// reseting level and do stepping back
backFromLevelOneBtn.addEventListener('click', () => {
    animationTheRedCurtainFalling();
    playLevelOneBtn.style.display = 'none';
    backFromLevelOneBtn.style.display = 'none';
    setTimeout(() => {
        animationTheRedCurtainRissing();
        screen.style.backgroundImage = "none";
        screenLine2.textContent = ''; 
        screenLine6.textContent = '';
        screenLine7.textContent = '';
        screenLine3.textContent = englishMenuScreenWords[0];
        screenLine5.textContent = englishMenuScreenWords[1];
    }, 2500);
    setTimeout(() => {
        screenLine1.style.backgroundImage = 'none';
        screenLine1.style.backgroundColor = '';
        startBtn.style.display = 'block';
        languageBtn.style.display = 'block';
    }, 5000);
});

// reseting level and do stepping back
nazadIzNivoaJedanBtn.addEventListener('click', () => {
    animationTheRedCurtainFalling();
    igrajNivoJedanBtn.style.display = 'none';
    nazadIzNivoaJedanBtn.style.display = 'none';
    setTimeout(() => {
        animationTheRedCurtainRissing();
        screen.style.backgroundImage = "none";
        screenLine2.textContent = ''; 
        screenLine6.textContent = '';
        screenLine7.textContent = '';
        screenLine3.textContent = serbianMenuScreenWords[0];
        screenLine5.textContent = serbianMenuScreenWords[1];
    }, 2500);
    setTimeout(() => {
        screenLine1.style.backgroundImage = 'none';
        screenLine1.style.backgroundColor = '';
        pokreniBtn.style.display = 'block';
        jezikBtn.style.display = 'block';
    }, 5000);
});

const circleContainer = document.querySelector('.circleContainer');
const circleContainerItems = document.querySelectorAll('.circleContainerItems');
const questionContainerEnglishLevelOne = document.querySelector('#questionContainerEnglishLevelOne');
const questionContainerSerbianLevelOne = document.querySelector('#questionContainerSerbianLevelOne');
const answersContainerEnglishLevelOne = document.querySelector('#answersContainerEnglishLevelOne');
const answersContainerSerbianLevelOne = document.querySelector('#answersContainerSerbianLevelOne');
const musicLevelOne = new Audio('audio/favoriteChair.mp3');
const singeShootSound = new Audio('audio/singleShoot.mp3');
const robotSaysAttentionSound = new Audio('audio/robotSaysAttention.mp3');
const dialOneSound = new Audio('audio/dialOne.mp3');
const dialTwoSound = new Audio('audio/dialTwo.mp3');
const dialThreeSound = new Audio('audio/dialThree.mp3');
const enoughForPassSound = new Audio('audio/enoughForPass.mp3');
const notEnoughForPassSound = new Audio('audio/notEnoughForPass.mp3');
const bringItOnSound = new Audio('audio/bringItOn.mp3');

let answerEnglishLevelOneA = document.querySelector('#answerEnglishLevelOneA');
let answerEnglishLevelOneB = document.querySelector('#answerEnglishLevelOneB');
let answerEnglishLevelOneC = document.querySelector('#answerEnglishLevelOneC');
let answerEnglishLevelOneD = document.querySelector('#answerEnglishLevelOneD');

let answerSerbianLevelOneA = document.querySelector('#answerSerbianLevelOneA');
let answerSerbianLevelOneB = document.querySelector('#answerSerbianLevelOneB');
let answerSerbianLevelOneC = document.querySelector('#answerSerbianLevelOneC');
let answerSerbianLevelOneD = document.querySelector('#answerSerbianLevelOneD');


englishMenuScreenWords.push('time left:') // [6]
englishMenuScreenWords.push('Get ready!') // [7]
englishMenuScreenWords.push('checking result') // [8]
englishMenuScreenWords.push('Correct answer is: ') // [9]
englishMenuScreenWords.push('You had a chance to answer 10 questions; results coming soon! Please wait...'); // [10]


serbianMenuScreenWords.push('preostalo vreme:') // [6]
serbianMenuScreenWords.push('Pripremite se!') // [7]
serbianMenuScreenWords.push('provera rezultata') // [8]
serbianMenuScreenWords.push('Tacan odgovor je: ') // [9]
serbianMenuScreenWords.push('Imali ste priliku da odgovorite na 10 pitanja; rezultati dolaze uskoro! Molimo sacekajte...'); // [10]

// Index for interactions between questions, answers and correct answers
let currentQuestionIndexLevelOne = 0;


// Timer for answering the current question
let timerLevelOne = 8;

// with function clearTimeout, this
let timeoutLevelOne;


// timer again start from the begging
function resetCounterLevelOne() {
    timerLevelOne = 8; 
}


function countdownEnglishLevelOne() {
    if(answersCounterEnglishLevelOne >= 10 || 
    currentQuestionIndexLevelOne > 9 && currentCircleIndexEnglish === 0) {
        answersContainerEnglishLevelOne.style.display = 'none';
        if(answersCounterEnglishLevelOne >= 10) {
        questionContainerEnglishLevelOne.textContent = englishMenuScreenWords[10];
        } else if(currentQuestionIndexLevelOne > 9 && currentCircleIndexEnglish === 0) {
            questionContainerEnglishLevelOne.textContent = 'You didn`t answer the first 5 within the time limit! Please wait...'
        }
    setTimeout(() => {
        clearTimeout(timeoutLevelOne);
        shuffleLevelOne();
    }, 1000);
    console.log('answersCounterEnglishLevelOne reached 10');
    setTimeout(() => {
        animationTheRedCurtainFalling();
    }, 2000);
    setTimeout(() => {
        questionContainerEnglishLevelOne.style.display = 'none';
        screenLine2.textContent = '';
        screenLine2.style.backgroundColor = '';
        animationTheRedCurtainRissingWithoutBackground() ;
    }, 4500); 
    setTimeout(() => {
        counterOfCorrectAnswersEnglishLevelOne(); 
        robotSaysAttentionSound.play();
    }, 7000); 
    } 
    if (timerLevelOne === 0 && answersCounterEnglishLevelOne < 10) {
        currentQuestionIndexLevelOne++;
        resetCounterLevelOne();
        answersCounterEnglishLevelOne++;
        showNextQuestionLevelOne();
        showCurrentQuestionAndAnswersLevelOne('english');
    }
    screenLine2.style.textAlign = 'center';
        if (timerLevelOne >= 0) {
            screenLine2.textContent = englishMenuScreenWords[6] + ' ' + timerLevelOne;
            timerLevelOne--;
            timeoutLevelOne = setTimeout(() => countdownEnglishLevelOne(language), 1000); 
        } 
}




function countdownSerbianLevelOne(language) {
    if(answersCounterSerbianLevelOne >= 10 || 
    currentQuestionIndexLevelOne > 9 && currentCircleIndexSerbian === 0) {
        answersContainerSerbianLevelOne.style.display = 'none';
        if(answersCounterSerbianLevelOne >= 10) {
        questionContainerSerbianLevelOne.textContent = serbianMenuScreenWords[10];
        } else if(currentQuestionIndexLevelOne > 9 && currentCircleIndexSerbian === 0) {
            questionContainerSerbianLevelOne.textContent = '"Niste odgovorili na prvih 5 u vremenskom roku! Molimo sacekajte...'
        }
    setTimeout(() => {
        clearTimeout(timeoutLevelOne);
        shuffleLevelOne();
    }, 1000);
    console.log('answersCounterSerbianLevelOne reached 10');
    setTimeout(() => {
        animationTheRedCurtainFalling();
    }, 2000);
    setTimeout(() => {
        questionContainerSerbianLevelOne.style.display = 'none';
        screenLine2.textContent = '';
        screenLine2.style.backgroundColor = '';
        animationTheRedCurtainRissingWithoutBackground() ;
    }, 4500); 
    setTimeout(() => {
        counterOfCorrectAnswersSerbianLevelOne();   
        robotSaysAttentionSound.play();
    }, 7000); 
    } 
    if (timerLevelOne === 0 && answersCounterSerbianLevelOne < 10) {
        currentQuestionIndexLevelOne++;
        resetCounterLevelOne();
        answersCounterSerbianLevelOne++;
        showNextQuestionLevelOne();
        showCurrentQuestionAndAnswersLevelOne('serbian');
        
    }
    screenLine2.style.textAlign = 'center';
        if (timerLevelOne >= 0) {
            screenLine2.textContent = serbianMenuScreenWords[6] + ' ' + timerLevelOne;
            timerLevelOne--;
            timeoutLevelOne = setTimeout(() => countdownSerbianLevelOne(language), 1000); 
        }
}


// starting a game and giving the player time to prepare
playLevelOneBtn.addEventListener('click', () => {
    animationTheRedCurtainFalling();
    playLevelOneBtn.style.display = 'none';
    backFromLevelOneBtn.style.display = 'none';
    // Time before game start
    let getReadyCounterLevelOne = 3;
    setTimeout(() => {
    animationTheRedCurtainRissing();
    screenLine2.textContent = '';
    screenLine6.textContent = '';
    screenLine7.textContent = ''; 
    circleContainer.style.display = 'flex'; 
    screenLine3.textContent = englishMenuScreenWords[7];
    screenLine4.style.fontSize = '50px';
    }, 2500);
    setTimeout(() => {
        screenLine4.textContent = getReadyCounterLevelOne;
        dialThreeSound.play();
    }, 5000);
    setTimeout(() => {
        getReadyCounterLevelOne--;
        screenLine4.textContent = getReadyCounterLevelOne;
        dialTwoSound.play();
    }, 6000);
    setTimeout(() => {
        getReadyCounterLevelOne--;
        screenLine4.textContent = getReadyCounterLevelOne;
        dialOneSound.play();
    }, 7000);
    setTimeout(() => {
       screenLine3.textContent = '';
       screenLine4.textContent = ''; 
    }, 7500);
    setTimeout(() => {
        questionContainerEnglishLevelOne.style.display = 'block';
        answersContainerEnglishLevelOne.style.display = 'grid';
        answerEnglishLevelOneA.style.display = 'block';
        answerEnglishLevelOneB.style.display = 'block';
        answerEnglishLevelOneC.style.display = 'block';
        answerEnglishLevelOneD.style.display = 'block';
        startLevelOne();
    }, 8000);
});

// playLevelOneBtn (Serbian version)
igrajNivoJedanBtn.addEventListener('click', () => {
    animationTheRedCurtainFalling();
    igrajNivoJedanBtn.style.display = 'none';
    nazadIzNivoaJedanBtn.style.display = 'none';
    let getReadyCounterLevelOne = 3;
    setTimeout(() => {
    animationTheRedCurtainRissing();
    screenLine2.textContent = ''; 
    screenLine6.textContent = '';
    screenLine7.textContent = '';
    circleContainer.style.display = 'flex';
    screenLine3.textContent = serbianMenuScreenWords[7];
    screenLine4.style.fontSize = '50px';
    }, 2500);
    setTimeout(() => {
        screenLine4.textContent = getReadyCounterLevelOne;
        dialThreeSound.play();
    }, 5000);
    setTimeout(() => {
        getReadyCounterLevelOne--;
        screenLine4.textContent = getReadyCounterLevelOne;
        dialTwoSound.play();
    }, 6000);
    setTimeout(() => {
        getReadyCounterLevelOne--;
        screenLine4.textContent = getReadyCounterLevelOne;
        dialOneSound.play();
    }, 7000);
    setTimeout(() => {
       screenLine3.textContent = '';
       screenLine4.textContent = ''; 
    }, 7500);
    setTimeout(() => {
    questionContainerSerbianLevelOne.style.display = 'block';
    answersContainerSerbianLevelOne.style.display = 'grid';
    answerSerbianLevelOneA.style.display = 'block';
    answerSerbianLevelOneB.style.display = 'block';
    answerSerbianLevelOneC.style.display = 'block';
    answerSerbianLevelOneD.style.display = 'block';
    pocniNivoJedan();
    }, 8000);
});


const questionsEnglishLevelOne = [
    'Alabama: What is the capital of the state of Alabama?',
    'Alaska: What is the capital of the state of Alaska?',
    'Arizona: What is the capital of the state of Arizona?',
    'Arkansas: What is the capital of the state of Arkansas?',
    'California: What is the capital of the state of California?',
    'Colorado: What is the capital of the state of Colorado?',
    'Connecticut: What is the capital of the state of Connecticut?',
    'Delaware: What is the capital of the state of Delaware?',
    'Florida: What is the capital of the state of Florida?',
    'Georgia: What is the capital of the state of Georgia?',
    'Hawaii: What is the capital of the state of Hawaii?',
    'Idaho: What is the capital of the state of Idaho?',
    'Illinois: What is the capital of the state of Illinois?',
    'Indiana: What is the capital of the state of Indiana?',
    'Iowa: What is the capital of the state of Iowa?',
    'Kansas: What is the capital of the state of Kansas?',
    'Kentucky: What is the capital of the state of Kentucky?',
    'Louisiana: What is the capital of the state of Louisiana?',
    'Maine: What is the capital of the state of Maine?',
    'Maryland: What is the capital of the state of Maryland?',
    'Massachusetts: What is the capital of the state of Massachusetts?',
    'Michigan: What is the capital of the state of Michigan?',
    'Minnesota: What is the capital of the state of Minnesota?',
    'Mississippi: What is the capital of the state of Mississippi?',
    'Missouri: What is the capital of the state of Missouri?',
    'Montana: What is the capital of the state of Montana?',
    'Nebraska: What is the capital of the state of Nebraska?',
    'Nevada: What is the capital of the state of Nevada?',
    'New Hampshire: What is the capital of the state of New Hampshire?',
    'New Jersey: What is the capital of the state of New Jersey?',
    'New Mexico: What is the capital of the state of New Mexico?',
    'New York: What is the capital of the state of New York?',
    'North Carolina: What is the capital of the state of North Carolina?',
    'North Dakota: What is the capital of the state of North Dakota?',
    'Ohio: What is the capital of the state of Ohio?',
    'Oklahoma: What is the capital of the state of Oklahoma?',
    'Oregon: What is the capital of the state of Oregon?',
    'Pennsylvania: What is the capital of the state of Pennsylvania?',
    'Rhode Island: What is the capital of the state of Rhode Island?',
    'South Carolina: What is the capital of the state of South Carolina?',
    'South Dakota: What is the capital of the state of South Dakota?',
    'Tennessee: What is the capital of the state of Tennessee?',
    'Texas: What is the capital of the state of Texas?',
    'Utah: What is the capital of the state of Utah?',
    'Vermont: What is the capital of the state of Vermont?',
    'Virginia: What is the capital of the state of Virginia?',
    'Washington: What is the capital of the state of Washington?',
    'West Virginia: What is the capital of the state of West Virginia?',
    'Wisconsin: What is the capital of the state of Wisconsin?',
    'Wyoming: What is the capital of the state of Wyoming?',
    ];
    

const questionsSerbianLevelOne = [
    'Alabama: Koji je glavni grad savezne države Alabama?',
    'Aljaska: Koji je glavni grad savezne države Aljaske?',
    'Arizona: Koji je glavni grad savezne države Arizone?',
    'Arkanzas: Koji je glavni grad savezne države Arkanzasa?',
    'Kalifornija: Koji je glavni grad savezne države Kalifornije?',
    'Kolorado: Koji je glavni grad savezne države Kolorada?',
    'Konetikat: Koji je glavni grad savezne države Konetikata?',
    'Delaver: Koji je glavni grad savezne države Delavera?',
    'Florida: Koji je glavni grad savezne države Floride?',
    'Džordžija: Koji je glavni grad savezne države Džordžije?',
    'Havaji: Koji je glavni grad savezne države Havaja?',
    'Idaho: Koji je glavni grad savezne države Ajdaha?',
    'Illinois: Koji je glavni grad savezne države Ilinoisa?',
    'Indiana: Koji je glavni grad savezne države Indiane?',
    'Jowa: Koji je glavni grad savezne države Ajove?',
    'Kanzas: Koji je glavni grad savezne države Kanzasa?',
    'Kentaki: Koji je glavni grad savezne države Kentakija?',
    'Luizijana: Koji je glavni grad savezne države Luizijane?',
    'Mejn: Koji je glavni grad savezne države Mejna?',
    'Merilend: Koji je glavni grad savezne države Merilenda?',
    'Masacuset: Koji je glavni grad savezne države Masacuseta?',
    'Mičigen: Koji je glavni grad savezne države Mičigena?',
    'Minnesota: Koji je glavni grad savezne države Minesote?',
    'Misisipi: Koji je glavni grad savezne države Misisipija?',
    'Misuri: Koji je glavni grad savezne države Misurija?',
    'Montana: Koji je glavni grad savezne države Montane?',
    'Nebraska: Koji je glavni grad savezne države Nebraske?',
    'Nevada: Koji je glavni grad savezne države Nevade?',
    'Nju Hempšir: Koji je glavni grad savezne države Nju Hempšira?',
    'Nju Džerzi: Koji je glavni grad savezne države Nju Džerzija?',
    'Novi Meksiko: Koji je glavni grad savezne države Novog Meksika?',
    'Njujork: Koji je glavni grad savezne države Njujorka?',
    'Severna Karolina: Koji je glavni grad savezne države Severne Karoline?',
    'Severna Dakota: Koji je glavni grad savezne države Severne Dakote?',
    'Ohio: Koji je glavni grad savezne države Ohaja?',
    'Oklahoma: Koji je glavni grad savezne države Oklahome?',
    'Oregon: Koji je glavni grad savezne države Oregona?',
    'Pensilvanija: Koji je glavni grad savezne države Pensilvanije?',
    'Roud Ajland: Koji je glavni grad savezne države Roud Ajlanda?',
    'Južna Karolina: Koji je glavni grad savezne države Južne Karoline?',
    'Južna Dakota: Koji je glavni grad savezne države Južne Dakote?',
    'Tenesi: Koji je glavni grad savezne države Tenesija?',
    'Teksas: Koji je glavni grad savezne države Teksasa?',
    'Juta: Koji je glavni grad savezne države Jute?',
    'Vermaont: Koji je glavni grad savezne države Vermonta?',
    'Virdžinija: Koji je glavni grad savezne države Virdžinije?',
    'Vašington: Koji je glavni grad savezne države Vašingtona?',
    'Zapadna Virdžinija: Koji je glavni grad savezne države Zapadne Virdžinije?',
    'Viskonsin: Koji je glavni grad savezne države Viskonsina?',
    'Vajoming: Koji je glavni grad savezne države Vajominga?',
];

const answersEnglishLevelOne = [
    ['a) Montgomery', 'b) Birmingham', 'c) Mobile', 'd) Huntsville'], // Alabama
    ['a) Juneau', 'b) Anchorage', 'c) Fairbanks', 'd) Sitka'], // Alaska
    ['a) Phoenix', 'b) Tucson', 'c) Mesa', 'd) Flagstaff'], // Arizona
    ['a) Little Rock', 'b) Fort Smith', 'c) Fayetteville', 'd) Hot Springs'], // Arkansas
    ['a) Sacramento', 'b) Los Angeles', 'c) San Francisco', 'd) San Diego'], // California
    ['a) Boulder', 'b) Colorado Springs', 'c) Aurora', 'd) Denver'], // Colorado
    ['a) Stamford', 'b) Bridgeport', 'c) New Haven', 'd) Hartford'], // Connecticut
    ['a) Newark', 'b) Wilmington', 'c) Dover', 'd) Middletown'], // Delaware
    ['a) Miami', 'b) Tallahassee', 'c) Orlando', 'd) Jacksonville'], // Florida
    ['a) Savannah', 'b) Augusta', 'c) Atlanta', 'd) Macon'], // Georgia
    ['a) Hilo', 'b) Honolulu', 'c) Kailua', 'd) Pearl City'], // Hawaii
['a) Nampa', 'b) Boise', 'c) Meridian', 'd) Idaho Falls'], // Idaho
['a) Springfield', 'b) Chicago', 'c) Aurora', 'd) Rockford'], // Illinois
['a) Indianapolis', 'b) Fort Wayne', 'c) Evansville', 'd) South Bend'], // Indiana
['a) Davenport', 'b) Cedar Rapids', 'c) Des Moines', 'd) Sioux City'], // Iowa
['a) Topeka', 'b) Wichita', 'c) Overland Park', 'd) Kansas City'], // Kansas
['a) Lexington', 'b) Louisville', 'c) Frankfort', 'd) Bowling Green'], // Kentucky
['a) Lafayette', 'b) New Orleans', 'c) Shreveport', 'd) Baton Rouge'], // Louisiana
['a) Bangor', 'b) Portland', 'c) Lewiston', 'd) Augusta'], // Maine
['a) Baltimore', 'b) Annapolis', 'c) Frederick', 'd) Gaithersburg'], // Maryland
['a) Worcester', 'b) Boston', 'c) Springfield', 'd) Cambridge'], // Massachusetts
['a) Detroit', 'b) Lansing', 'c) Grand Rapids', 'd) Ann Arbor'], // Michigan
['a) Minneapolis', 'b) St. Pual', 'c) Rochester', 'd) Duluth'], // Minnesota
['a) Biloxi', 'b) Gulfport', 'c) Southaven', 'd) Jackson'], // Mississippi
['a) Jefferson City', 'b) Kansas City', 'c) St. Louis', 'd) Springfield'], // Missouri
['a) Missoula', 'b) Billings', 'c) Helena', 'd) Great Falls'], // Montana
['a) Omaha', 'b) Linkoln', 'c) Bellevue', 'd) Grand Island'], // Nebraska
['a) Henderson', 'b) Las Vegas', 'c) Reno', 'd) Carson City'], // Nevada
['a) Derry', 'b) Manchester', 'c) Nashua', 'd) Concord'], // New Hampshire
['a) Newark', 'b) Trenton', 'c) Jersey City', 'd) Paterson'], // New Jersey
['a) Rio Rancho', 'b) Albuquerque', 'c) Las Cruces', 'd) Santa Fe'], // New Mexico
['a) Albany', 'b) Buffalo', 'c) Rochester', 'd) Yonkers'], // New York
['a) Raleigh', 'b) Charlotte', 'c) Durham', 'd) Greensboro'], // North Carolina
['a) Minot', 'b) Fargo', 'c) Grand Forks', 'd) Bismarck'], // North Dakota
['a) Columbus', 'b) Toledo', 'c) Cincinnati', 'd) Cleveland'], // Ohio
['a) Oklahoma City', 'b) Tulsa', 'c) Norman', 'd) Broken Arrow'], // Oklahoma
['a) Eugene', 'b) Portland', 'c) Salem', 'd) Gresham'], // Oregon
['a) Pittsburgh', 'b) Philadelphia', 'c) Harrisburg', 'd) Allentown'], // Pennsylvania
['a) Cranston', 'b) Warwick', 'c) Providence', 'd) Pawtucket'], // Rhode Island
['a) Columbia', 'b) Charleston', 'c) North Charleston', 'd) Mount Pleasant'], // South Carolina
['a) Aberdeen', 'b) Sioux Falls', 'c) Rapid City', 'd) Pierre'], // South Dakota
['a) Memphis', 'b) Nashville', 'c) Knoxville', 'd) Chattanooga'], // Tennessee
['a) Dallas', 'b) Houston', 'c) San Antonio', 'd) Austin'], // Texas
['a) Salt Lake City', 'b) West Valley City', 'c) Provo', 'd) West Jordan'], // Utah
['a) Rutland', 'b) Burlington', 'c) South Burlington', 'd) Montpelier'], // Vermont
['a) Norfolk', 'b) Virginia Beach', 'c) Richmond', 'd) Chesapeake'], // Virginia
['a) Spokane', 'b) Seattle', 'c) Olympia', 'd) Tacoma'], // Washington
['a) Charleston', 'b) Huntington', 'c) Morgantown', 'd) Parkersburg'], // West Virginia
['a) Milwaukee', 'b) Madison', 'c) Green Bay', 'd) Kenosha'], // Wisconsin
['a) Cheyenne', 'b) Casper', 'c) Laramie', 'd) Gillette'], // Wyoming
];


const answersSerbianLevelOne = [
    ['a) Montgomery', 'b) Birmingham', 'c) Mobile', 'd) Huntsville'],
    ['a) Juneau', 'b) Anchorage', 'c) Fairbanks', 'd) Sitka'],
    ['a) Feniks', 'b) Tucson', 'c) Mesa', 'd) Flagstaf'], 
    ['a) Litle Rok', 'b) Fort Smit', 'c) Fejertvil', 'd) Hot Springs'], 
    ['a) Sacramento', 'b) Los Anđeles', 'c) San Francisko', 'd) San Dijego'], 
    ['a) bolder', 'b) Kolorado Springs', 'c) Aurora', 'd) Denver'], 
    ['a) Stamford', 'b) Bridžport', 'c) Nju Hejven', 'd) Hartford'], 
    ['a) Njuark', 'b) Vilmington', 'c) Dover', 'd) Middletaun'], 
    ['a) Majami', 'b) Talahejsi', 'c) Orlando', 'd) Džeksonvil'], 
    ['a) Savana', 'b) Augusta', 'c) Atlanta', 'd) Meikon'], 
    ['a) Hilo', 'b) Honolulu', 'c) Kailua', 'd) Pirl Siti'], 
    ['a) Nampa', 'b) Bojsi', 'c) Meridian', 'd) Ajdaho Fols'], 
    ['a) Springfild', 'b) Čikago', 'c) Aurora', 'd) Rokford'], 
    ['a) Indijanapolis', 'b) Fort Vejn', 'c) Evansvil', 'd) Saut Bend'],
    ['a) Devenport', 'b) Sedar Rapids', 'c) Dej Moins', 'd) Sioux Siti'], 
    ['a) Vihita', 'b) Topeka', 'c) Overland Park', 'd) Kanzas Siti'],
    ['a) Leksington', 'b) Luivill', 'c) Frankfort', 'd) Bouling Grin'], 
    ['a) Lafajet', 'b) Nju Orleans', 'c) Šrivport', 'd) Baton Ruž'], 
    ['a) Bangor', 'b) Portland', 'c) Luiston', 'd) Augusta'], 
    ['a) Baltimor', 'b) Anapolis', 'c) Fredrik', 'd) Gajtersburg'], 
    ['a) Vuster', 'b) Boston', 'c) Springfild', 'd) Kembridž'], 
    ['a) Detroit', 'b) Lansing', 'c) Grand Rapids', 'd) En Arbor'], 
    ['a) Mineapolis', 'b) Sent Pol', 'c) Rokester', 'd) Djulut'],
    ['a) Biloksi', 'b) Gulfport', 'c) Sauthaven', 'd) Džekson'], 
    ['a) Džeferson Siti', 'b) Kanzas Siti', 'c) Sent Luis', 'd) Springfild'], 
    ['a) Misula', 'b) Bilings', 'c) Helena', 'd) Great Fols'], 
    ['a) Omaha', 'b) Linkoln', 'c) Belvju', 'd) Grand Ailend'], 
    ['a) Henderson', 'b) Las Vegas', 'c) Reno', 'd) Karson Siti'], 
    ['a) Deri', 'b) Manchester', 'c) Našua', 'd) Konkord'], 
    ['a) Newark', 'b) Trenton', 'c) Džerzi Siti', 'd) Paterson'], 
    ['a) Rio Rančo', 'b) Albuquerque', 'c) Las Kruces', 'd) Santa Fe'], 
    ['a) Bafalo', 'b) Albany', 'c) Ročester', 'd) Jonkers'], 
    ['a) Ralije', 'b) Šarlot', 'c) Djuram', 'd) Grinsboro'], 
    ['a) Majnot', 'b) Fargo', 'c) Grand Forks', 'd) Bismark'],
    ['a) Kolumbus', 'b) Toledo', 'c) Sinsinati', 'd) Klivlend'], 
    ['a) Oklahoma Siti', 'b) Tulsa', 'c) Norman', 'd) Broken Arrou'],
    ['a) Eugene', 'b) Portland', 'c) Salem', 'd) Gresham'],
['a) Pitsburg', 'b) Filadelfija', 'c) Harisburg', 'd) Alentau'], 
['a) Kranston', 'b) Vorkvik', 'c) Providens', 'd) Pautaket'], 
['a) Kolumbija', 'b) Charleston', 'c) North Charleston', 'd) Mount Plesant'], 
['a) Aberdeen', 'b) Sioux Falls', 'c) Rapid Siti', 'd) Pjer'], // Juzna Dakota  41
['a) Memfis', 'b) Nashville', 'c) Knoxville', 'd) Šetanuga'], // Tenesi  42
['a) Dalas', 'b) Hjuston', 'c) San Antonio', 'd) Ostin'], // Teksas 43
['a) Salt Lejk Siti', 'b) Vest Veli Siti', 'c) Provo', 'd) Vest Džordan'], // Juta 44
['a) Ratland', 'b) Burligton', 'c) Saut Burlington', 'd) Montpilijer'], // Vermont 45
['a) Norfolk', 'b) Virginia Bič', 'c) Ričmond', 'd) Česapik'], // Virdžinija 46
['a) Spokane', 'b) Sijetl', 'c) Olimpija', 'd) Takoma'], // Vašington
['a) Čarleston', 'b) Hantington', 'c) Morgantown', 'd) Parkersburg'], // Zapadna Virdžinija
['a) Milvoki', 'b) Medison', 'c) Grin Bej', 'd) Kenoša'], // Viskonsin
['a) Šajen', 'b) Kasper', 'c) Larami', 'd) Gillet'], // Vajoming
];

const correctAnswersEnglishLevelOne = [
    'a)', 'a)', 'a)', 'a)', 'a)', 'd)', 'd)', 'c)', 'b)', 'c)' , 'b)', 'b)',  'a)', 'a)', 'c)', 'b)', 'c)', 'd)', 'd)', 'b)', 
    'b)', 'b)', 'b)', 'd)', 'a)', 'c)', 'b)', 'd)', 'd)', 'b)' , 'd' , 'b)',  'a)', 'd)', 'd)', 'a)', 'c)', 'c)', 'c)', 'a)',
    'd)', 'b)', 'd)', 'a)', 'd)', 'c)', 'c)', 'a)', 'b)', 'a)'
//   41    42    43    44    45    46    47    48    49    50
];   


const correctAnswersSerbianLevelOne = [
    'a)', 'a)', 'a)', 'a)', 'a)', 'd)', 'd)', 'c)', 'b)', 'c)' , 'b)', 'b)',  'a)', 'a)', 'c)', 'b)', 'c)', 'd)', 'd)', 'b)', 
    'b)', 'b)', 'b)', 'd)', 'a)', 'c)', 'b)', 'd)', 'd)', 'b)' , 'd' , 'b)',  'a)', 'd)', 'd)', 'a)', 'c)', 'c)', 'c)', 'a)',
    'd)', 'b)', 'd)', 'a)', 'd)', 'c)', 'c)', 'a)', 'b)', 'a)'
//   41    42    43    44    45    46    47    48    49    50
];//  0     1      2     3     4     5     6    7      8     9    10      11    12   13    14    15    16


function startLevelOne() {
    countdownEnglishLevelOne();
    resetAllCountersLevelOne();
    shuffleLevelOne('english');
    showCurrentQuestionAndAnswersLevelOne('english');
    resetCircleColors();
    handleAnswerEnglishLevelOne();
}

// Serbian version of the startLevelOne
function pocniNivoJedan() {
    countdownSerbianLevelOne();
    resetAllCountersLevelOne();
    shuffleLevelOne('serbian');
    showCurrentQuestionAndAnswersLevelOne('serbian');
    resetCircleColors();
    handleAnswerSerbianLevelOne();
}

function showNextQuestionLevelOne(){
    currentQuestionIndexLevelOne++;
}

// Shuffle all for both versions
function shuffleLevelOne(language) { 
    if (language === 'english') {
    for (let i = questionsEnglishLevelOne.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsEnglishLevelOne[i], questionsEnglishLevelOne[j]] = [questionsEnglishLevelOne[j], questionsEnglishLevelOne[i]];
        [answersEnglishLevelOne[i], answersEnglishLevelOne[j]] = [answersEnglishLevelOne[j], answersEnglishLevelOne[i]];
        [correctAnswersEnglishLevelOne[i], correctAnswersEnglishLevelOne[j]] = [correctAnswersEnglishLevelOne[j], correctAnswersEnglishLevelOne[i]];
    }
    } else if (language === 'serbian') {
    for (let i = questionsSerbianLevelOne.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsSerbianLevelOne[i], questionsSerbianLevelOne[j]] = [questionsSerbianLevelOne[j], questionsSerbianLevelOne[i]];
        [answersSerbianLevelOne[i], answersSerbianLevelOne[j]] = [answersSerbianLevelOne[j], answersSerbianLevelOne[i]];
        [correctAnswersSerbianLevelOne[i], correctAnswersSerbianLevelOne[j]] = [correctAnswersSerbianLevelOne[j], correctAnswersSerbianLevelOne[i]];
    }
}
}

// Showing questions and possible answers based on the lv1CurrentQestionIndex
function showCurrentQuestionAndAnswersLevelOne(language) {
    if (language === 'english') {
        questionContainerEnglishLevelOne.textContent = questionsEnglishLevelOne[currentQuestionIndexLevelOne];
        answerEnglishLevelOneA.textContent = answersEnglishLevelOne[currentQuestionIndexLevelOne][0];
        answerEnglishLevelOneB.textContent = answersEnglishLevelOne[currentQuestionIndexLevelOne][1];
        answerEnglishLevelOneC.textContent = answersEnglishLevelOne[currentQuestionIndexLevelOne][2];
        answerEnglishLevelOneD.textContent = answersEnglishLevelOne[currentQuestionIndexLevelOne][3];
    }
    else if (language === 'serbian') {
       questionContainerSerbianLevelOne.textContent = questionsSerbianLevelOne[currentQuestionIndexLevelOne];
       answerSerbianLevelOneA.textContent = answersSerbianLevelOne[currentQuestionIndexLevelOne][0];
       answerSerbianLevelOneB.textContent = answersSerbianLevelOne[currentQuestionIndexLevelOne][1];
       answerSerbianLevelOneC.textContent = answersSerbianLevelOne[currentQuestionIndexLevelOne][2];
       answerSerbianLevelOneD.textContent = answersSerbianLevelOne[currentQuestionIndexLevelOne][3];
    }
};


let answersCounterEnglishLevelOne = 0;
let answersCounterSerbianLevelOne = 0;


function handleAnswerEnglishLevelOne(option, element) {
    return () => {
        singeShootSound.play();
        if (answersCounterEnglishLevelOne >= 9) {
            answersContainerEnglishLevelOne.style.display = 'none';
        }
        if (correctAnswersEnglishLevelOne[currentQuestionIndexLevelOne] === option) {
            correctAnswerChangingCircleColor('english');
            answersCounterEnglishLevelOne++;
            console.log('answer counter: ' + answersCounterEnglishLevelOne);
            resetCounterLevelOne();
            showNextQuestionLevelOne()
            showCurrentQuestionAndAnswersLevelOne('english');
        } else {
            element.style.backgroundColor = 'red'; 
            disabledAnswerLevelOne();
            screenLine5.textContent = (englishMenuScreenWords[9] + correctAnswersEnglishLevelOne[currentQuestionIndexLevelOne]);
            screenLine5.style.color = 'rgb(218, 165, 32)';
            screenLine3.textContent = 'Miss!';
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 850);    
            setTimeout(() => {
                showNextQuestionLevelOne()
                showCurrentQuestionAndAnswersLevelOne('english');
                screenLine5.textContent = '';
                screenLine3.textContent = '';
            }, 900);
            setTimeout(() => {
                resetCounterLevelOne();
                answersCounterEnglishLevelOne++;
            }, 950);
            setTimeout(() => {
                enabledAnswerLevelOne();
            }, 1000);
        }
    };
}

answerEnglishLevelOneA.addEventListener('click', handleAnswerEnglishLevelOne('a)', answerEnglishLevelOneA));
answerEnglishLevelOneB.addEventListener('click', handleAnswerEnglishLevelOne('b)', answerEnglishLevelOneB));
answerEnglishLevelOneC.addEventListener('click', handleAnswerEnglishLevelOne('c)', answerEnglishLevelOneC));
answerEnglishLevelOneD.addEventListener('click', handleAnswerEnglishLevelOne('d)', answerEnglishLevelOneD));


function resetAllCountersLevelOne() {
    currentCircleIndexEnglish = 0;
    currentCircleIndexSerbian = 0;
    answersCounterEnglishLevelOne = 0;
    answersCounterSerbianLevelOne = 0;
}


// index for changing circles colors
let currentCircleIndexEnglish = 0;
let currentCircleIndexSerbian = 0;

function changeCircleColor(index, color) {
    circleContainerItems[index].style.backgroundImage = color;
    circleContainerItems[index].style.backgroundSize = '80%';
    circleContainerItems[index].style.backgroungRepeat = 'no-repeat';
    circleContainerItems[index].style.backgroundPosition = 'center';
}

// describes what circle does
function correctAnswerChangingCircleColor(language) {
    if (language === 'english'){
    changeCircleColor(currentCircleIndexEnglish, "url('webAppModelOneImage/bulletHole.jpg')");
    currentCircleIndexEnglish = (currentCircleIndexEnglish + 1) % circleContainerItems.length;
    } else if (language === 'serbian'){
        changeCircleColor(currentCircleIndexSerbian, "url('webAppModelOneImage/bulletHole.jpg')");
        currentCircleIndexSerbian = (currentCircleIndexSerbian + 1) % circleContainerItems.length; 
    }
}

function resetCircleColors() {
    for (let i = 0; i < circleContainerItems.length; i++) {
        circleContainerItems[i].style.backgroundImage = ''; 
        circleContainerItems[i].style.backgroundColor = ''; 
        currentCircleIndexEnglish = 0;
        currentCircleIndexSerbian = 0;
    }
}




function disabledAnswerLevelOne() {
    answerEnglishLevelOneA.disabled = true;
    answerEnglishLevelOneB.disabled = true;
    answerEnglishLevelOneC.disabled = true;
    answerEnglishLevelOneD.disabled = true;
    answerSerbianLevelOneA.disabled = true;
    answerSerbianLevelOneB.disabled = true;
    answerSerbianLevelOneC.disabled = true;
    answerSerbianLevelOneD.disabled = true;
}
function enabledAnswerLevelOne() {
    answerEnglishLevelOneA.disabled = false;
    answerEnglishLevelOneB.disabled = false;
    answerEnglishLevelOneC.disabled = false;
    answerEnglishLevelOneD.disabled = false;
    answerSerbianLevelOneA.disabled = false;
    answerSerbianLevelOneB.disabled = false;
    answerSerbianLevelOneC.disabled = false;
    answerSerbianLevelOneD.disabled = false;
}



function handleAnswerSerbianLevelOne(option, element) {
    return () => {
        singeShootSound.play();
        if (answersCounterSerbianLevelOne >= 9) {
            answersContainerSerbianLevelOne.style.display = 'none';
        }
        if (correctAnswersSerbianLevelOne[currentQuestionIndexLevelOne] === option) {
            correctAnswerChangingCircleColor('serbian');
            answersCounterSerbianLevelOne++;
            console.log('answer counter: ' + answersCounterSerbianLevelOne);
            disabledAnswerLevelOne();
            setTimeout(() => {
            enabledAnswerLevelOne();    
            resetCounterLevelOne();
            showNextQuestionLevelOne()
            showCurrentQuestionAndAnswersLevelOne('serbian');
            }, 200);
        } else {
            element.style.backgroundColor = 'red'; 
            disabledAnswerLevelOne();
            screenLine5.textContent = (serbianMenuScreenWords[9] + correctAnswersSerbianLevelOne[currentQuestionIndexLevelOne]);
            screenLine5.style.color = 'rgb(218, 165, 32)';
            screenLine3.textContent = 'Promasaj!'
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 850);    
            setTimeout(() => {
                showNextQuestionLevelOne()
                showCurrentQuestionAndAnswersLevelOne('serbian');
                screenLine5.textContent = '';
                screenLine3.textContent = '';
            }, 900);
            setTimeout(() => {
                resetCounterLevelOne();
                answersCounterSerbianLevelOne++;
            }, 950);
            setTimeout(() => {
                enabledAnswerLevelOne();
            }, 1000);
        }
    };
}

answerSerbianLevelOneA.addEventListener('click', handleAnswerSerbianLevelOne('a)', answerSerbianLevelOneA));
answerSerbianLevelOneB.addEventListener('click', handleAnswerSerbianLevelOne('b)', answerSerbianLevelOneB));
answerSerbianLevelOneC.addEventListener('click', handleAnswerSerbianLevelOne('c)', answerSerbianLevelOneC));
answerSerbianLevelOneD.addEventListener('click', handleAnswerSerbianLevelOne('d)', answerSerbianLevelOneD));


function animationTheRedCurtainRissingWithoutBackground() {
    theRedCurtainOpeningSound.play()
    screenLine1.style.transform = 'scaleY(20)'; 
    screenLine1.style.transition = 'transform 2.5s ease-in-out';
    screenLine1.style.transform = 'scaleY(1)';
    screen.style.backgroundImage = "";
    screen.style.backgroundPosition = '';
    screen.style.backgroundSize = '';
}

const izbornikBtn = document.querySelector('#izbornik');
const menuBtn = document.querySelector('#menu');
const startLevel2Btn = document.querySelector('#startLevelTwo');
const pokreniNivo2Btn = document.querySelector('#pokreniNivoDva');
const doorHolder = document.querySelector('#doorHolder');
const leftDoor = document.querySelector('#leftDoor');
const rightDoor = document.querySelector('#rightDoor');
const playLevelTwoBtn = document.querySelector('#playLevelTwo');
const igrajNivoDvaBtn = document.querySelector('#igrajNivoDva');


startLevel2Btn.addEventListener('click', () =>{
    alert('"Unfortunately, the level two are not available in this demo version".')
    startLevel2Btn.style.display='none';
    setTimeout(() => {
        menuBtn.style.display='block';
        menuBtn.textContent = englishMenuScreenWords[18];
    }, 1000);
});

pokreniNivo2Btn.addEventListener('click', () =>{
    alert('Nažalost, nivo dva nije dostupan u ovoj demo verziji".');
    pokreniNivo2Btn.style.display = 'none';
    setTimeout(() => {
        izbornikBtn.style.display='block';
        izbornikBtn.textContent=serbianMenuScreenWords[18];
    }, 1000);
});



const numbersForCounter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

englishMenuScreenWords.push('Correct answers: '); // [11]
englishMenuScreenWords.push('Congratulations, you passed!') // [12]
englishMenuScreenWords.push('You failed, practice more!') // [13]
englishMenuScreenWords.push('Bronze!'); // [14]
englishMenuScreenWords.push('Silver!'); // [15]
englishMenuScreenWords.push('Gold!'); // [16]
englishMenuScreenWords.push('Start level 2'); // [17]
englishMenuScreenWords.push('<< menu'); // [18]
englishMenuScreenWords.push('Play level 2'); // [19]

serbianMenuScreenWords.push('Tacni odgovori: '); // [11]
serbianMenuScreenWords.push('Cestitamo, prosli ste!') // [12]
serbianMenuScreenWords.push('Pali ste, vezbajte vise!') // [13]
serbianMenuScreenWords.push('Bronza!'); // [14]
serbianMenuScreenWords.push('Srebro!'); // [15]
serbianMenuScreenWords.push('Zlato!'); // [16]
serbianMenuScreenWords.push('Pokreni nivo 2'); // [17]
serbianMenuScreenWords.push('<< izbornik'); // [18]
serbianMenuScreenWords.push('Igraj nivo 2'); // [19]

const instructionsEnglishLevelTwo = ['Welcome to Level Two! In this round, you will complete statements. You will get 8 statements, choose three to complete. This tests your sentence completion and creativity. Earned extra lives in the last level? They will save you if you do not complete all. Quick thinking is key. Good luck in Level Two!'];

const instructionsSerbianLevelTwo = ['Dobrodosli u Drugi nivo! Ovde cete dopuniti iskaze. Dobicete 8 iskaza, izaberite tri za dopunu. Testiracemo vasu vestinu dopunjavanja recenica i kreativnost. Ako ste stekli dodatne zivote u prethodnom nivou, oni ce vas spasiti ako ne dopunite sve. Brzo razmisljanje je kljuc. Srecno u Drugom nivou!']

function counterOfCorrectAnswersEnglishLevelOne() {
    screenLine3.style.textAlign = 'left';
    let varHolder = 0; 
    const incrementInterval = 200;
    const textColors = [
        'rgba(218, 165, 32)',
        '', 
    ];
    let colorIndex = 0;

    const intervalId = setInterval(() => {
        if (varHolder <= currentCircleIndexEnglish) {
            screenLine3.textContent = englishMenuScreenWords[11] + varHolder;
            screenLine3.style.color = textColors[colorIndex];
            colorIndex = (colorIndex + 1) % textColors.length;
            varHolder++;
        }  else {
            clearInterval(intervalId); 
            setTimeout(() => {
                medalRewards('english');
                colorIndex = 0;
                varHolder = 0;
            }, 2000);
        }
    }, incrementInterval);
}

function counterOfCorrectAnswersSerbianLevelOne() {
    screenLine3.style.textAlign = 'left';
    let varHolder = 0; 
    const incrementInterval = 200;
    const textColors = [
        'rgba(218, 165, 32)',
        '', 
    ];
    let colorIndex = 0;

    const intervalId = setInterval(() => {
        if (varHolder <= currentCircleIndexSerbian) {
            screenLine3.textContent = serbianMenuScreenWords[11] + varHolder;
            screenLine3.style.color = textColors[colorIndex];
            colorIndex = (colorIndex + 1) % textColors.length;
            varHolder++;
        }  else {
            clearInterval(intervalId); 
            setTimeout(() => {
                medalRewards('serbian');
                colorIndex = 0;
                varHolder = 0;
            }, 2000);
        }
    }, incrementInterval);
}


function medalRewards(language) {
    if (language === 'english') {
    if (currentCircleIndexEnglish < 6) {
        notEnoughForPassSound.play();
        screenLine4.textContent = englishMenuScreenWords[13];
        screenLine6.textContent = englishMenuScreenWords[18];
        menuBtn.textContent = englishMenuScreenWords[18];
        menuBtn.style.display = 'block';
        
    } else if (currentCircleIndexEnglish === 6 || currentCircleIndexEnglish === 7) {
        enoughForPassSound.play();
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screenLine4.textContent = englishMenuScreenWords[12];
        screenLine6.textContent = englishMenuScreenWords[17];
        startLevel2Btn.style.display = 'block';

    } else if (currentCircleIndexEnglish === 8) {
        enoughForPassSound.play();
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screen.style.backgroundImage = "url('webAppModelOneImage/bronzeMedal.jpg')";
        screen.style.backgroundSize = '10%';
        screen.style.transition = 'background-size 2.5s ease-in-out';
        screenLine4.textContent = englishMenuScreenWords[14];
        screenLine6.textContent = englishMenuScreenWords[17];
        startLevel2Btn.style.display = 'block';
        setTimeout(() => {
            screen.style.backgroundSize = '100%';
            bringItOnSound.play();
        }, 200);
    } else if (currentCircleIndexEnglish === 9) {
        enoughForPassSound.play();
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screen.style.backgroundImage = "url('webAppModelOneImage/silverMedal.jpg')";
        screen.style.backgroundSize = '10%';
        screen.style.transition = 'background-size 2.5s ease-in-out';
        screenLine4.textContent = englishMenuScreenWords[15];
        screenLine6.textContent = englishMenuScreenWords[17];
        startLevel2Btn.style.display = 'block';
        setTimeout(() => {
            screen.style.backgroundSize = '100%';
            bringItOnSound.play();
        }, 200);
    } else if (currentCircleIndexEnglish >= 10) {
        enoughForPassSound.play(); 
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screen.style.backgroundImage = "url('webAppModelOneImage/goldMedal.jpg')";
        screen.style.backgroundSize = '10%';
        screen.style.transition = 'background-size 2.5s ease-in-out';
        screenLine4.textContent = englishMenuScreenWords[16];
        screenLine6.textContent = englishMenuScreenWords[17];
        startLevel2Btn.style.display = 'block';
        setTimeout(() => {
            screen.style.backgroundSize = '100%';
            bringItOnSound.play();
        }, 200);
    }
} else if (language === 'serbian') {
    if (currentCircleIndexSerbian < 6) {
        screenLine4.textContent = serbianMenuScreenWords[13];
        screenLine6.textContent = serbianMenuScreenWords[18];
        izbornikBtn.style.display = 'block';
        izbornikBtn.textContent = serbianMenuScreenWords[18];

    } else if (currentCircleIndexSerbian === 6 || currentCircleIndexSerbian === 7) {
        enoughForPassSound.play();
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screenLine4.textContent = serbianMenuScreenWords[12];
        screenLine6.textContent = serbianMenuScreenWords[17];
        pokreniNivo2Btn.style.display = 'block';

    } else if (currentCircleIndexSerbian === 8) {
        enoughForPassSound.play();
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screen.style.backgroundImage = "url('webAppModelOneImage/bronzeMedal.jpg')";
        screen.style.backgroundSize = '10%';
        screen.style.transition = 'background-size 2.5s ease-in-out';
        screenLine4.textContent = serbianMenuScreenWords[14];
        screenLine6.textContent = serbianMenuScreenWords[17];
        pokreniNivo2Btn.style.display = 'block';
        setTimeout(() => {
            screen.style.backgroundSize = '100%';
            bringItOnSound.play();
        }, 200);
    } else if (currentCircleIndexSerbian === 9) {
        enoughForPassSound.play();
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screen.style.backgroundImage = "url('webAppModelOneImage/silverMedal.jpg')";
        screen.style.backgroundSize = '10%';
        screen.style.transition = 'background-size 2.5s ease-in-out';
        screenLine4.textContent = serbianMenuScreenWords[15];
        screenLine6.textContent = serbianMenuScreenWords[17];
        pokreniNivo2Btn.style.display = 'block';
        setTimeout(() => {
            screen.style.backgroundSize = '100%';
            bringItOnSound.play();
        }, 200);
    } else if (currentCircleIndexSerbian >= 10) {
        enoughForPassSound.play();
        screenLine4.style.color = 'rgb(218, 165, 32)';
        screenLine5.style.color = 'rgb(218, 165, 32)';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        screen.style.backgroundImage = "url('webAppModelOneImage/goldMedal.jpg')";
        screen.style.backgroundSize = '10%';
        screen.style.transition = 'background-size 2.5s ease-in-out';
        screenLine4.textContent = serbianMenuScreenWords[16];
        screenLine6.textContent = serbianMenuScreenWords[17];
        pokreniNivo2Btn.style.display = 'block';
        setTimeout(() => {
            screen.style.backgroundSize = '100%';
            bringItOnSound.play();
        }, 200);
    }
}











menuBtn.addEventListener('click', () => {
        animationTheRedCurtainFalling();
        menuBtn.style.display = 'none';
        setTimeout(() => {
            animationTheRedCurtainRissingWithoutBackground();
        }, 2500);
        setTimeout(() => {
            circleContainer.style.display = 'none';
            screenLine2.style.borderRadius = '0';
            screenLine2.textContent = '';
            screenLine3.style.color = '';
            screenLine3.textContent = englishMenuScreenWords[0];
            screenLine4.textContent = '';
            screenLine6.textContent = '';
            screenLine5.textContent = englishMenuScreenWords[1];
            screenLine3.style.textAlign = 'center';
            screenLine4.style.fontSize = '';
            screenLine5.style.color = '';
            currentCircleIndex = 0;
            answersCounterLevelOne = 0;
            currentQuestionIndexLevelOne = 0;
            resetCircleColors();
           
        }, 3000);
        setTimeout(() => {
            screenLine1.style.backgroundImage = 'none';
            screenLine1.style.backgroundColor = '';
            startBtn.style.display = 'block';
            languageBtn.style.display = 'block';
        }, 5000);
    });

    izbornikBtn.addEventListener('click', () => {
        animationTheRedCurtainFalling();
        izbornikBtn.style.display = 'none';
        setTimeout(() => {
            animationTheRedCurtainRissingWithoutBackground();  
        }, 2500);
        setTimeout(() => {
           circleContainer.style.display = 'none';
            screenLine2.style.borderRadius = '0';
            screenLine2.textContent = '';
            screenLine3.style.color = '';
            screenLine3.textContent = serbianMenuScreenWords[0];
            screenLine4.textContent = '';
            screenLine6.textContent = '';
            screenLine5.textContent = serbianMenuScreenWords[1];
            screenLine3.style.textAlign = 'center';
            screenLine4.style.fontSize = '';
            screenLine5.style.color = '';
            currentCircleIndex = 0;
            currentQuestionIndexLevelOne = 0;
            resetCircleColors();
            
        }, 3000);
        setTimeout(() => {
            screenLine1.style.backgroundImage = 'none';
            screenLine1.style.backgroundColor = '';
            pokreniBtn.style.display = 'block';
            jezikBtn.style.display = 'block';
        }, 5000);
    });
}


function heartLife(language) {
     screenLine3.style.width = '50%';
        screenLine3.style.backgroundPosition = 'left';
        screenLine3.style.backgroundSize = '20%';
        screenLine3.style.backgroundRepeat = 'no-repeat';
    if(language === 'english') {
        if(currentCircleIndexEnglish === 8) {
            screenLine3.style.backgroundImage = "url('img/oneHeartLife.jpg')";
        } else if(currentCircleIndexEnglish === 9) {
            screenLine3.style.backgroundImage = "url('img/twoHeartLife.jpg')";
        } else if(currentCircleIndexEnglish === 10) {
            screenLine3.style.backgroundImage = "url('img/threeHeartLife.jpg')";
        }
    } else if (language === 'srebian') {
        if(currentCircleIndexSerbian === 8) {
            screenLine3.style.backgroundImage = "url('img/oneHeartLife.jpg')";
        } else if(currentCircleIndexSerbian === 9) {
            screenLine3.style.backgroundImage = "url('img/twoHeartLife.jpg')"; 
        } else if(currentCircleIndexSerbian === 10) {
            screenLine3.style.backgroundImage = "url('img/threeHeartLife.jpg')";
        }
    }
}

const cubeContainer = document.querySelector('.cubeContainer');
const cubeContainerItems = document.querySelectorAll('.cubeContainerItems');

const questionContainerEnglishLevelTwo = document.querySelector('#questionContainerEnglishLevelTwo');
const questionContainerSerbianLevelTwo = document.querySelector('#questionContainerSerbianLevelTwo');
const answersContainerEnglishLevelTwo = document.querySelector('#answersContainerEnglishLevelTwo');
const answersContainerSerbianLevelTwo = document.querySelector('#answersContainerSerbianLevelTwo');

let answerEnglishLevelTwoA = document.querySelector('#answerEnglishLevelTwoA');
let answerEnglishLevelTwoB = document.querySelector('#answerEnglishLevelTwoB');
let answerEnglishLevelTwoC = document.querySelector('#answerEnglishLevelTwoC');
let answerEnglishLevelTwoD = document.querySelector('#answerEnglishLevelTwoD');
let answerEnglishLevelTwoE = document.querySelector('#answerEnglishLevelTwoE');
let deleteOrConfirmAnswersContainerEnglishLeveLTwo = document.querySelector('#deleteOrConfirmAnswersContainerEnglishLeveLTwo');

let answerSerbianLevelTwoA = document.querySelector('#answerSerbianLevelTwoA');
let answerSerbianLevelTwoB = document.querySelector('#answerSerbianLevelTwoB');
let answerSerbianLevelTwoC = document.querySelector('#answerSerbianLevelTwoC');
let answerSerbianLevelTwoD = document.querySelector('#answerSerbianLevelTwoD');
let answerSerbianLevelTwoE = document.querySelector('#answerSerbianLevelTwoE');
let deleteOrConfirmAnswersContainerSerbianLeveLTwo = document.querySelector('#deleteOrConfirmAnswersContainerSerbianLeveLTwo');

englishMenuScreenWords.push('Play level 2'); //[20]

serbianMenuScreenWords.push('Igraj nivo 2'); //[20]



function animationTheRedCurtainFallingWithNewDoor() {
    theRedCurtainOpeningSound.play();
    doorHolder.style.display = 'block';
        leftDoor.style.transition ='transform 2.5s ease-in-out';
        leftDoor.style.transform = 'translateX(0)';
        rightDoor.style.transition ='transform 2.5s ease-in-out';
        rightDoor.style.transform = 'translateX(0)';
    setTimeout(() => {
        theRedCurtainClosingSound.play();
        screenLine1.style.transform = 'scaleY(1)'; 
        screenLine1.style.transition = 'transform 2.5s ease-in-out';
        screenLine1.style.transform = 'scaleY(20)';
        screen.style.backgroundImage = "url('img/theGalery.jpg')";
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundSize = '100%';
    }, 3000);
}    

function animationTheRedCurtainRissingWithNewDoor() {
    theRedCurtainOpeningSound.play();
    screenLine1.style.transform = 'scaleY(20)'; 
    screenLine1.style.transition = 'transform 2.5s ease-in-out';
    screenLine1.style.transform = 'scaleY(1)';
    screen.style.backgroundImage = "url('img/theGalery.jpg')";
    screen.style.backgroundPosition = 'center';
    screen.style.backgroundSize = '100%';
    doorHolder.style.display = 'block';
    setTimeout(() => {
        theRedCurtainClosingSound.play()
        leftDoor.style.transition ='transform 2.5s ease-in-out';
        leftDoor.style.transform = 'translateX(-70%)';
        rightDoor.style.transition ='transform 2.5s ease-in-out';
        rightDoor.style.transform = 'translateX(+70%)';
    }, 3000);
}    

const contactEnglishBtn = document.querySelector('#contactEnglish');

contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });


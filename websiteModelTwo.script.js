const leftV = document.querySelector('#leftV');
const leftE = document.querySelector('#leftE');
const centerX= document.querySelector('#centerX');
const rightE = document.querySelector('#rightE');
const rightV = document.querySelector('#rightV');

const niceGallery = document.querySelector('#niceGallery');


leftV.addEventListener('click', () => {
    niceGallery.style.transform = 'translateX(-20%)';
        leftV.style.width = '';
        leftV.style.backgroundColor= '';
        leftE.style.width = '6rem';
        leftE.style.backgroundColor= 'pink';
  });

leftE.addEventListener('click', () => {
    niceGallery.style.transform = 'translateX(-40%)';
        leftE.style.width = '';
        leftE.style.backgroundColor= '';
        centerX.style.width = '6rem';
        centerX.style.backgroundColor= 'pink';
  });

centerX.addEventListener('click', () => {
    niceGallery.style.transform = 'translateX(-60%)';
        centerX.style.width = '';
        centerX.style.backgroundColor= '';
        rightE.style.width = '6rem';
        rightE.style.backgroundColor= 'pink';
  });

rightE.addEventListener('click', () => {
    niceGallery.style.transform = 'translateX(-80%)';
        rightE.style.width = '';
        rightE.style.backgroundColor= '';
        rightV.style.width = '6rem';
        rightV.style.backgroundColor= 'pink';
  });

rightV.addEventListener('click', () => {
    niceGallery.style.transform = 'translateX(0%)';
        rightV.style.width = '';
        rightV.style.backgroundColor= '';
        leftV.style.width = '6rem';
        leftV.style.backgroundColor= 'pink';
  }); 


function autoClick(){

    setTimeout(() => {
        leftV.click(); 
    }, 5000);

    setTimeout(() => {
       leftE.click();  
    }, 10000);

    setTimeout(() => {
        centerX.click(); 
    }, 15000);

    setTimeout(() => {
        rightE.click(); 
    }, 20000);

    setTimeout(() => {
        rightV.click(); 
     }, 25000);


setInterval(() => {
    setTimeout(() => {
        leftV.click(); 
    }, 5000);

    setTimeout(() => {
       leftE.click();  
    }, 10000);

    setTimeout(() => {
        centerX.click(); 
    }, 15000);

    setTimeout(() => {
        rightE.click(); 
    }, 20000);

    setTimeout(() => {
        rightV.click(); 
     }, 25000);
    
        
     }, 25025);
}


autoClick();

const sixCircleContainer = document.querySelector('#sixCircleContainer');
const sixCircleContainerDaughter = document.querySelector('#sixCircleContainerDaughter');

let prethodnaX = 0;
let trenutniPomeraj = 0;
const brzinaPomeranja = 5; // Prilagodite brzinu pomeranja prema potrebi
const minPomeraj = -130; // Minimalni pomeraj
const maxPomeraj = 0;   // Maksimalni pomeraj

function handleMove(event) {
  let trenutnaPozicijaX;
  
  if (event.clientX !== undefined) {
    trenutnaPozicijaX = event.clientX;
  } else if (event.touches && event.touches.length > 0) {
    trenutnaPozicijaX = event.touches[0].clientX;
  } else {
    return; // Izlaz ako nemamo podatke o položaju
  }

  if (trenutnaPozicijaX < prethodnaX) {
    trenutniPomeraj -= brzinaPomeranja;
  } else if (trenutnaPozicijaX > prethodnaX) {
    trenutniPomeraj += brzinaPomeranja;
  }

  // Postavljanje granica za pomeraj
  if (trenutniPomeraj < minPomeraj) {
    trenutniPomeraj = maxPomeraj;
  } else if (trenutniPomeraj > maxPomeraj) {
    trenutniPomeraj = minPomeraj;
  }

  sixCircleContainerDaughter.style.transform = `translateX(${trenutniPomeraj}%)`;

  prethodnaX = trenutnaPozicijaX;
}

sixCircleContainerDaughter.addEventListener('mousedown', () => {
  sixCircleContainerDaughter.addEventListener('mousemove', handleMove);
});

document.addEventListener('mouseup', () => {
  sixCircleContainerDaughter.removeEventListener('mousemove', handleMove);
});

sixCircleContainerDaughter.addEventListener('touchstart', (event) => {
  sixCircleContainerDaughter.addEventListener('touchmove', handleMove);
});

document.addEventListener('touchend', () => {
  sixCircleContainerDaughter.removeEventListener('touchmove', handleMove);
});


const sixCircleContainerMobile = document.querySelector('#sixCircleContainerMobile');
const sixCircleContainerDaughterMobile = document.querySelector('#sixCircleContainerDaughterMobile');

let prethodnaXMob = 0;
let trenutniPomerajMob = 0;
const brzinaPomeranjaMob = 5; // Prilagodite brzinu pomeranja prema potrebi
const minPomerajMob = -400; // Minimalni pomeraj
const maxPomerajMob = 0;   // Maksimalni pomeraj

function handleMoveMobile(event) {
  let trenutnaPozicijaXMob;
  
  if (event.clientX !== undefined) {
    trenutnaPozicijaXMob = event.clientX;
  } else if (event.touches && event.touches.length > 0) {
    trenutnaPozicijaXMob = event.touches[0].clientX;
  } else {
    return; // Izlaz ako nemamo podatke o položaju
  }

  if (trenutnaPozicijaXMob < prethodnaXMob) {
    trenutniPomerajMob -= brzinaPomeranjaMob;
  } else if (trenutnaPozicijaXMob > prethodnaXMob) {
    trenutniPomerajMob += brzinaPomeranjaMob;
  }

  // Postavljanje granica za pomeraj
  if (trenutniPomerajMob < minPomerajMob) {
    trenutniPomerajMob = maxPomerajMob;
  } else if (trenutniPomerajMob > maxPomerajMob) {
    trenutniPomerajMob = minPomerajMob;
  }

  sixCircleContainerDaughterMobile.style.transform = `translateX(${trenutniPomerajMob}%)`;

  prethodnaXMob = trenutnaPozicijaXMob;
}

sixCircleContainerDaughterMobile.addEventListener('mousedown', () => {
  sixCircleContainerDaughterMobile.addEventListener('mousemove', handleMoveMobile);
});

document.addEventListener('mouseup', () => {
  sixCircleContainerDaughterMobile.removeEventListener('mousemove', handleMoveMobile);
});

sixCircleContainerDaughterMobile.addEventListener('touchstart', (event) => {
  sixCircleContainerDaughterMobile.addEventListener('touchmove', handleMoveMobile);
});

document.addEventListener('touchend', () => {
  sixCircleContainerDaughterMobile.removeEventListener('touchmove', handleMoveMobile);
});



const circleOneDaughter = document.querySelector('#circleOneDaughter');
const circleTwoDaughter = document.querySelector('#circleTwoDaughter');
const circleThreeDaughter = document.querySelector('#circleThreeDaughter');
const circleFourDaughter = document.querySelector('#circleFourDaughter');
const circleFiveDaughter = document.querySelector('#circleFiveDaughter');
const circleSixDaughter = document.querySelector('#circleSixDaughter');
const circleSevenDaughter = document.querySelector('#circleSevenDaughter');
const circleEightDaughter = document.querySelector('#circleEightDaughter');

circleOneDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleTwoDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleThreeDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleFourDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleFiveDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleSixDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleSevenDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleEightDaughter.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

const circleOneDaughterMob = document.querySelector('#circleOneDaughterMobile');
const circleTwoDaughterMob = document.querySelector('#circleTwoDaughterMobile');
const circleThreeDaughterMob = document.querySelector('#circleThreeDaughterMobile');
const circleFourDaughterMob = document.querySelector('#circleFourDaughterMobile');
const circleFiveDaughterMob = document.querySelector('#circleFiveDaughterMobile');
const circleSixDaughterMob = document.querySelector('#circleSixDaughterMobile');
const circleSevenDaughterMob = document.querySelector('#circleSevenDaughterMobile');
const circleEightDaughterMob = document.querySelector('#circleEightDaughterMobile');

circleOneDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleTwoDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleThreeDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleFourDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleFiveDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleSixDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleSevenDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});

circleEightDaughterMob.addEventListener('click', () => {
  alert('"The buttons on the demo version do not redirect to other websites." / "Dugmad na demo verziji ne preusmeravaju na druge web lokacije."');
});


const fourCubeContainer = document.querySelector('#fourCubeContainer');
const fourCubeContainerDaughter = document.querySelector('#fourCubeContainerDaughter');

let prethodnaKockaX = 0;
let trenutniPomerajKocka = 0;
const brzinaPomeranjaKocka = 7.5; // Prilagodite brzinu pomeranja prema potrebi
const minPomerajKocka = -200; // Minimalni pomeraj
const maxPomerajKocka = 0;   // Maksimalni pomeraj

function handleMoveCube(event) {
  let trenutnaPozicijaKockaX;
  
  if (event.clientX !== undefined) {
    trenutnaPozicijaKockaX = event.clientX;
  } else if (event.touches && event.touches.length > 0) {
    trenutnaPozicijaKockaX = event.touches[0].clientX;
  } else {
    return; // Izlaz ako nemamo podatke o položaju
  }

  if (trenutnaPozicijaKockaX < prethodnaKockaX) {
    trenutniPomerajKocka -= brzinaPomeranjaKocka;
  } else if (trenutnaPozicijaKockaX > prethodnaKockaX) {
    trenutniPomerajKocka += brzinaPomeranjaKocka;
  }

  // Postavljanje granica za pomeraj
  if (trenutniPomerajKocka < minPomerajKocka) {
    trenutniPomerajKocka = maxPomerajKocka;
  } else if (trenutniPomerajKocka > maxPomerajKocka) {
    trenutniPomerajKocka = minPomerajKocka;
  }

  fourCubeContainerDaughter.style.transform = `translateX(${trenutniPomerajKocka}%)`;

  prethodnaKockaX = trenutnaPozicijaKockaX;
}

fourCubeContainerDaughter.addEventListener('mousedown', () => {
  fourCubeContainerDaughter.addEventListener('mousemove', handleMoveCube);
});

document.addEventListener('mouseup', () => {
  fourCubeContainerDaughter.removeEventListener('mousemove', handleMoveCube);
});

fourCubeContainerDaughter.addEventListener('touchstart', (event) => {
  fourCubeContainerDaughter.addEventListener('touchmove', handleMoveCube);
});

document.addEventListener('touchend', () => {
  fourCubeContainerDaughter.removeEventListener('touchmove', handleMoveCube);
});


const fourCubeContainerMob = document.querySelector('#fourCubeContainerMobile');
const fourCubeContainerDaughterMobile = document.querySelector('#fourCubeContainerDaughterMobile');

let prethodnaKockaXMob = 0;
let trenutniPomerajKockaMob = 0;
const brzinaPomeranjaKockaMob = 7.5; // Prilagodite brzinu pomeranja prema potrebi
const minPomerajKockaMob = -400; // Minimalni pomeraj
const maxPomerajKockaMob = 0;   // Maksimalni pomeraj

function handleMoveCubeMobile(event) {
  let trenutnaPozicijaKockaXMob;
  
  if (event.clientX !== undefined) {
    trenutnaPozicijaKockaXMob = event.clientX;
  } else if (event.touches && event.touches.length > 0) {
    trenutnaPozicijaKockaXMob = event.touches[0].clientX;
  } else {
    return; // Izlaz ako nemamo podatke o položaju
  }

  if (trenutnaPozicijaKockaXMob < prethodnaKockaXMob) {
    trenutniPomerajKockaMob -= brzinaPomeranjaKockaMob;
  } else if (trenutnaPozicijaKockaXMob > prethodnaKockaXMob) {
    trenutniPomerajKockaMob += brzinaPomeranjaKockaMob;
  }

  // Postavljanje granica za pomeraj
  if (trenutniPomerajKockaMob < minPomerajKockaMob) {
    trenutniPomerajKockaMob = maxPomerajKockaMob;
  } else if (trenutniPomerajKockaMob > maxPomerajKockaMob) {
    trenutniPomerajKockaMob = minPomerajKockaMob;
  }

  fourCubeContainerDaughterMobile.style.transform = `translateX(${trenutniPomerajKockaMob}%)`;

  prethodnaKockaXMob = trenutnaPozicijaKockaXMob;
}

fourCubeContainerDaughterMobile.addEventListener('mousedown', () => {
  fourCubeContainerDaughterMobile.addEventListener('mousemove', handleMoveCubeMobile);
});

document.addEventListener('mouseup', () => {
  fourCubeContainerDaughterMobile.removeEventListener('mousemove', handleMoveCubeMobile);
});

fourCubeContainerDaughterMobile.addEventListener('touchstart', (event) => {
  fourCubeContainerDaughterMobile.addEventListener('touchmove', handleMoveCubeMobile);
});

document.addEventListener('touchend', () => {
  fourCubeContainerDaughterMobile.removeEventListener('touchmove', handleMoveCubeMobile);
});

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////




const cart = document.querySelector('#cart');

cart.disabled = false;

const sizeCart = document.querySelector('#size');

sizeCart.addEventListener('click', () => {
if(cart.disabled === false){
cart.style.display = 'none';
price.style.display = 'none';
clear.style.display = 'none';
plus.style.display = 'none';
minus.style.display = 'none';
quantity.style.display = 'none';
cart.disabled = true;
} else {
  cart.style.display = '';
price.style.display = '';
clear.style.display = '';
plus.style.display = '';
minus.style.display = '';
quantity.style.display = '';
cart.disabled = false;
createStyledButtonProMinus(text);
}
});


let pro01 = document.querySelector('#pro01');
let pro02 = document.querySelector('#pro02');
let pro03 = document.querySelector('#pro03');
let pro04 = document.querySelector('#pro04');
let pro05 = document.querySelector('#pro05');
let pro06 = document.querySelector('#pro06');
let pro07 = document.querySelector('#pro07');
let pro08 = document.querySelector('#pro08');
let pro011 = document.querySelector('#pro011');
let pro022 = document.querySelector('#pro022');
let pro033 = document.querySelector('#pro033');
let pro044 = document.querySelector('#pro044');





const cartMother = document.querySelector('#cartMother');
cartMother.style.display = 'none';


let clear = document.querySelector('#clear'); 

function createStyledButtonProDel(text) {
  let button = document.createElement('button');
  button.textContent = text;
  button.style.backgroundColor = 'rgba(255,0,0,0.2)';
  button.style.borderRadius = '50%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  return button;
}

const pro01Del = createStyledButtonProDel('X');
const pro02Del = createStyledButtonProDel('X');
const pro03Del = createStyledButtonProDel('X');
const pro04Del = createStyledButtonProDel('X');
const pro05Del = createStyledButtonProDel('X');
const pro06Del = createStyledButtonProDel('X');
const pro07Del = createStyledButtonProDel('X');
const pro08Del = createStyledButtonProDel('X');
const pro011Del = createStyledButtonProDel('X');
const pro022Del = createStyledButtonProDel('X');
const pro033Del = createStyledButtonProDel('X');
const pro044Del = createStyledButtonProDel('X');



const plus = document.querySelector('#plus');

function createStyledButtonProPlus(text) {
  let button = document.createElement('button');
  button.textContent = text;
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '50%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  return button;
}

const pro01Plus = createStyledButtonProPlus('+');
const pro02Plus = createStyledButtonProPlus('+');
const pro03Plus = createStyledButtonProPlus('+');
const pro04Plus = createStyledButtonProPlus('+');
const pro05Plus = createStyledButtonProPlus('+');
const pro06Plus = createStyledButtonProPlus('+');
const pro07Plus = createStyledButtonProPlus('+');
const pro08Plus = createStyledButtonProPlus('+');
const pro011Plus = createStyledButtonProPlus('+');
const pro022Plus = createStyledButtonProPlus('+');
const pro033Plus = createStyledButtonProPlus('+');
const pro044Plus = createStyledButtonProPlus('+');





function createStyledButtonProMinus(text) {
  let button = document.createElement('button');
  button.textContent = text;
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '50%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  return button;
}

const minus = document.querySelector('#minus')

const pro01Minus = createStyledButtonProMinus('-');
const pro02Minus = createStyledButtonProMinus('-');
const pro03Minus = createStyledButtonProMinus('-');
const pro04Minus = createStyledButtonProMinus('-');
const pro05Minus = createStyledButtonProMinus('-');
const pro06Minus = createStyledButtonProMinus('-');
const pro07Minus = createStyledButtonProMinus('-');
const pro08Minus = createStyledButtonProMinus('-');
const pro011Minus = createStyledButtonProMinus('-');
const pro022Minus = createStyledButtonProMinus('-');
const pro033Minus = createStyledButtonProMinus('-');
const pro044Minus = createStyledButtonProMinus('-');







function createStyledButtonProQuantity(placeholderColor) {
  let button = document.createElement('input');
  button.type = 'number';
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '0%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.textAlign = 'center';
  button.style.color = placeholderColor;
  button.value = 1;
  button.style.width = '3rem';
  button.style.marginLeft = 'auto';
  button.style.marginRight = 'auto';
  button.readOnly = true;
  return button;
}

const quantity = document.querySelector('#quantity');


let pro01Quantity = createStyledButtonProQuantity('white');
let pro02Quantity = createStyledButtonProQuantity('white');
let pro03Quantity = createStyledButtonProQuantity('white');
let pro04Quantity = createStyledButtonProQuantity('white');
let pro05Quantity = createStyledButtonProQuantity('white');
let pro06Quantity = createStyledButtonProQuantity('white');
let pro07Quantity = createStyledButtonProQuantity('white');
let pro08Quantity = createStyledButtonProQuantity('white');
let pro011Quantity = createStyledButtonProQuantity('white');
let pro022Quantity = createStyledButtonProQuantity('white');
let pro033Quantity = createStyledButtonProQuantity('white');
let pro044Quantity = createStyledButtonProQuantity('white');




function createStyledButtonProVar(proText) {
  let button = document.createElement('input');
  button.type = 'text';
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '0%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.textAlign = 'left';
  button.style.width = '77%';
  button.value = proText;
  button.readOnly = true;
  return button;
}

const pro01Var = createStyledButtonProVar('Majica Horus - crna, beli logo');
const pro02Var = createStyledButtonProVar('Majica Horus - plava, beli logo');
const pro03Var = createStyledButtonProVar('Bermude - Multicam Black');
const pro04Var = createStyledButtonProVar('Duks D-1A INT - zeleni');
const pro05Var = createStyledButtonProVar('Pantalone P-2 Gen II TCT - kojot');
const pro06Var = createStyledButtonProVar('Jakna X-5 - crna');
const pro07Var = createStyledButtonProVar('Aktivni veš Raptor donji- zeleni');
const pro08Var = createStyledButtonProVar('Aktivni veš Raptor gornji- zeleni');
const pro011Var = createStyledButtonProVar('Majica Horus - crna, beli logo');
const pro022Var = createStyledButtonProVar('Majica Horus - plava, beli logo');
const pro033Var = createStyledButtonProVar('Bermude - Multicam Black');
const pro044Var = createStyledButtonProVar('Duks D-1A INT - zeleni');



function createStyledButtonProValue(proValue) {
  let button = document.createElement('input');
  button.type = 'number';
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '0%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.textAlign = 'center';
  button.style.width = '77%';
  button.value += proValue;
  button.readOnly = true;
  return button;
}


let pro01ValueHolder = 0;
let pro02ValueHolder = 0;
let pro03ValueHolder = 0;
let pro04ValueHolder = 0;
let pro05ValueHolder = 0;
let pro06ValueHolder = 0;
let pro07ValueHolder = 0;
let pro08ValueHolder = 0;
let pro011ValueHolder = 0;
let pro022ValueHolder = 0;
let pro033ValueHolder = 0;
let pro044ValueHolder = 0;


const pro01Value = createStyledButtonProValue();
const pro02Value = createStyledButtonProValue();
const pro03Value = createStyledButtonProValue();
const pro04Value = createStyledButtonProValue();
const pro05Value = createStyledButtonProValue();
const pro06Value = createStyledButtonProValue();
const pro07Value = createStyledButtonProValue();
const pro08Value = createStyledButtonProValue();
const pro011Value = createStyledButtonProValue();
const pro022Value = createStyledButtonProValue();
const pro033Value = createStyledButtonProValue();
const pro044Value = createStyledButtonProValue();



let totalValue = 0;

function totalValueFun() {
  totalValue = pro01ValueHolder + pro02ValueHolder + pro03ValueHolder + pro04ValueHolder + pro05ValueHolder 
    + pro06ValueHolder + pro07ValueHolder + pro08ValueHolder + pro011ValueHolder + pro022ValueHolder + pro033ValueHolder + pro044ValueHolder;
  console.log("Updated totalValue:", totalValue);
  totalSaldoPrice.value = totalValue.toFixed(2);
  
  if(totalSaldoPrice.value == 0) {
    cartMother.style.display = 'none';
  }
}


const price = document.querySelector('#price');
const saldo = document.querySelector('#saldo');

let totalSaldoPrice = document.createElement('input');
saldo.appendChild(totalSaldoPrice);
totalSaldoPrice.type = 'number';
totalSaldoPrice.style.width = '50%';
totalSaldoPrice.style.color = 'crimson';
totalSaldoPrice.style.backgroundColor = 'rgba(0,0,0,0.2)';
totalSaldoPrice.style.borderRadius = '0%';
totalSaldoPrice.style.margin = '0.25rem';
totalSaldoPrice.style.height = '2.5rem';
totalSaldoPrice.style.cursor = 'pointer';
totalSaldoPrice.style.color = 'white';
totalSaldoPrice.style.borderColor = 'white';
totalSaldoPrice.style.textAlign = 'center';
totalSaldoPrice.style.fontSize = '2rem';
totalSaldoPrice.value = totalValue;
totalSaldoPrice.readOnly = true;

pro01.addEventListener('click', () => {
  pro01.disabled = true;
  pro01.innerText = 'DODATO U KORPU';
  pro011.disabled = true;
  pro011.innerText = 'DODATO U KORPU';
  clear.appendChild(pro01Del);
  pro01Del.style.display = 'BLOCK';
  plus.appendChild(pro01Plus);
  pro01Plus.style.display = 'BLOCK';
  minus.appendChild(pro01Minus);
  pro01Minus.style.display = 'BLOCK';
  quantity.appendChild(pro01Quantity);
  pro01Quantity.style.display = 'BLOCK';
  cart.appendChild(pro01Var);
  pro01Var.style.display = 'block';
  price.appendChild(pro01Value);
  pro01Value.style.display = 'block';
 
  pro01ValueHolder = 1500;
  pro01Value.value = pro01ValueHolder.toFixed(2);
  totalValue = pro01Value.value;
  
  totalValueFun();

  if (pro01.disabled === true || pro011.disabled === true) {
    cartMother.style.display = 'grid';
  }
});



pro01Plus.addEventListener('click', () =>{

  pro01Quantity.value ++;
 
  pro01ValueHolder += 1500;
  pro01Value.value = pro01ValueHolder.toFixed(2);
  totalValue = pro01Value.value;

  totalValueFun();
});

pro01Minus.addEventListener('click', () =>{

  pro01Quantity.value --;
   
  pro01ValueHolder -= 1500;
  pro01Value.value = pro01ValueHolder.toFixed(2);
  totalValue = pro01Value.value;
  
  totalValueFun();

  if(pro01ValueHolder === 0) {
    pro01Del.click();
  }
});

pro02.addEventListener('click', () => {

  pro02.disabled = true;
  pro02.innerText = 'DODATO U KORPU';
  pro022.disabled = true;
  pro022.innerText = 'DODATO U KORPU';
  clear.appendChild(pro02Del);
  pro02Del.style.display = 'BLOCK';
  plus.appendChild(pro02Plus);
  pro02Plus.style.display = 'BLOCK';
  minus.appendChild(pro02Minus);
  pro02Minus.style.display = 'BLOCK';
  quantity.appendChild(pro02Quantity);
  pro02Quantity.style.display = 'BLOCK';
  cart.appendChild(pro02Var);
  pro02Var.style.display = 'block';
  price.appendChild(pro02Value);
  pro02Value.style.display = 'block';
  
  pro02ValueHolder = 1500;
  pro02Value.value = pro02ValueHolder.toFixed(2);
  totalValue = pro02Value.value;

  totalValueFun();

  console.log("pro02ValueHolder:", pro02ValueHolder);
  console.log("totalValue:", totalValue);

  if(pro02.disabled === true || pro022.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro02Plus.addEventListener('click', () =>{
 
  pro02Quantity.value ++;
   
  pro02ValueHolder += 1500;
  pro02Value.value = pro02ValueHolder.toFixed(2);
  totalValue = pro02Value.value;
 

});

pro02Minus.addEventListener('click', () =>{
 
  pro02Quantity.value --;

  pro02ValueHolder -= 1500;
  pro02Value.value = pro02ValueHolder.toFixed(2);
  totalValue = pro02Value.value;
   totalValueFun();
   if(pro02ValueHolder === 0) {
    pro02Del.click();
  }
});

pro03.addEventListener('click', () => {

  pro03.disabled = true;
  pro03.innerText = 'DODATO U KORPU';
  pro033.disabled = true;
  pro033.innerText = 'DODATO U KORPU';
  clear.appendChild(pro03Del);
  pro03Del.style.display = 'BLOCK';
  plus.appendChild(pro03Plus);
  pro03Plus.style.display = 'BLOCK';
  minus.appendChild(pro03Minus);
  pro03Minus.style.display = 'BLOCK';
  quantity.appendChild(pro03Quantity);
  pro03Quantity.style.display = 'BLOCK';
  cart.appendChild(pro03Var);
  pro03Var.style.display = 'block';
  price.appendChild(pro03Value);
  pro03Value.style.display = 'block';

  pro03ValueHolder = 4300;
  pro03Value.value = pro03ValueHolder.toFixed(2);
  totalValue = pro03Value.value;
  totalValueFun();

  if(pro03.disabled === true || pro033.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro03Plus.addEventListener('click', () =>{
  
  pro03Quantity.value ++;

  pro03ValueHolder += 4300;
  pro03Value.value = pro03ValueHolder.toFixed(2);
  totalValue = pro03Value.value;
  totalValueFun();
});

pro03Minus.addEventListener('click', () =>{
  
  pro03Quantity.value --;
   
  pro03ValueHolder -= 4300;
  pro03Value.value = pro03ValueHolder.toFixed(2);
  totalValue = pro03Value.value;
  totalValueFun();

  if(pro03ValueHolder === 0) {
    pro03Del.click();
  }
});

pro04.addEventListener('click', () => {

  pro04.disabled = true;
  pro04.innerText = 'DODATO U KORPU';
  pro044.disabled = true;
  pro044.innerText = 'DODATO U KORPU';
  clear.appendChild(pro04Del);
  pro04Del.style.display = 'BLOCK';
  plus.appendChild(pro04Plus);
  pro04Plus.style.display = 'BLOCK';
  minus.appendChild(pro04Minus);
  pro04Minus.style.display = 'BLOCK';
  quantity.appendChild(pro04Quantity);
  pro04Quantity.style.display = 'BLOCK';
  cart.appendChild(pro04Var);
  pro04Var.style.display = 'block';
  price.appendChild(pro04Value);
  pro04Value.style.display = 'block';

  pro04ValueHolder = 4900;
  pro04Value.value = pro04ValueHolder.toFixed(2);
  totalValue = pro04Value.value;
  totalValueFun();

  if(pro04.disabled === true || pro044.disabled === true) {
    cartMother.style.display = 'grid';
  }

 
});

pro04Plus.addEventListener('click', () =>{
 
  pro04Quantity.value ++;
 
  pro04ValueHolder += 4900;
  pro04Value.value = pro04ValueHolder.toFixed(2);
  totalValue = pro04Value.value;
  totalValueFun();

 
});

pro04Minus.addEventListener('click', () =>{
  
  pro04Quantity.value --;
  
  pro04ValueHolder -= 4900;
  pro04Value.value = pro04ValueHolder.toFixed(2);
  totalValue = pro04Value.value;
  totalValueFun();

  if(pro04ValueHolder === 0) {
    pro04Del.click();
  }
});

pro05.addEventListener('click', () => {
 
  pro05.disabled = true;
  pro05.innerText = 'DODATO U KORPU';
  clear.appendChild(pro05Del);
  pro05Del.style.display = 'BLOCK';
  plus.appendChild(pro05Plus);
  pro05Plus.style.display = 'BLOCK';
  minus.appendChild(pro05Minus);
  pro05Minus.style.display = 'BLOCK';
  quantity.appendChild(pro05Quantity);
  pro05Quantity.style.display = 'BLOCK';
  cart.appendChild(pro05Var);
  pro05Var.style.display = 'block';
  price.appendChild(pro05Value);
  pro05Value.style.display = 'block';
   
  pro05ValueHolder = 7500;
  pro05Value.value = pro05ValueHolder.toFixed(2);
  totalValue = pro05Value.value;
  totalValueFun();

  if(pro05.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro05Plus.addEventListener('click', () =>{
 
  pro05Quantity.value ++;
   
  pro05ValueHolder += 7500;
  pro05Value.value = pro05ValueHolder.toFixed(2);
  totalValue = pro05Value.value;
  totalValueFun();
});

pro05Minus.addEventListener('click', () =>{
  
  pro05Quantity.value --;
   
  pro05ValueHolder -= 7500;
  pro05Value.value = pro05ValueHolder.toFixed(2);
  totalValue = pro05Value.value;
  totalValueFun();

  if(pro05ValueHolder === 0) {
    pro05Del.click();
  }
});

pro06.addEventListener('click', () => {

  pro06.disabled = true;
  pro06.innerText = 'DODATO U KORPU';
  clear.appendChild(pro06Del);
  pro06Del.style.display = 'BLOCK';
  plus.appendChild(pro06Plus);
  pro06Plus.style.display = 'BLOCK';
  minus.appendChild(pro06Minus);
  pro06Minus.style.display = 'BLOCK';
  quantity.appendChild(pro06Quantity);
  pro06Quantity.style.display = 'BLOCK';
  cart.appendChild(pro06Var);
  pro06Var.style.display = 'block';
  price.appendChild(pro06Value);
  pro06Value.style.display = 'block';
  
  pro06ValueHolder = 12900;
  pro06Value.value = pro06ValueHolder.toFixed(2);
  totalValue = pro06Value.value;
  totalValueFun();

  if(pro06.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro06Plus.addEventListener('click', () =>{
 
  pro06Quantity.value ++;

  pro06ValueHolder += 12900;
  pro06Value.value = pro06ValueHolder.toFixed(2);
  totalValue = pro06Value.value;
  totalValueFun();

});

pro06Minus.addEventListener('click', () =>{
  
  pro06Quantity.value --;
 
  pro06ValueHolder -= 12900;
  pro06Value.value = pro06ValueHolder.toFixed(2);
  totalValue = pro06Value.value;
  totalValueFun();

  if(pro06ValueHolder === 0) {
    pro06Del.click();
  }
});

pro07.addEventListener('click', () => {

  pro07.disabled = true;
  pro07.innerText = 'DODATO U KORPU';
  clear.appendChild(pro07Del);
  pro07Del.style.display = 'BLOCK';
  plus.appendChild(pro07Plus);
  pro07Plus.style.display = 'BLOCK';
  minus.appendChild(pro07Minus);
  pro07Minus.style.display = 'BLOCK';
  quantity.appendChild(pro07Quantity);
  pro07Quantity.style.display = 'BLOCK';
  cart.appendChild(pro07Var);
  pro07Var.style.display = 'block';
  price.appendChild(pro07Value);
  pro07Value.style.display = 'block'; 

  pro07ValueHolder = 3600;
  pro07Value.value = pro07ValueHolder.toFixed(2);
  totalValue = pro07Value.value;
  totalValueFun();

  if(pro07.disabled === true) {
    cartMother.style.display = 'grid';
  }

  if(pro07ValueHolder === 0) {
    pro07Del.click();
  }
});

pro07Plus.addEventListener('click', () =>{
 
  pro07Quantity.value ++;
  
  pro07ValueHolder += 3600;
  pro07Value.value = pro07ValueHolder.toFixed(2);
  totalValue = pro07Value.value;
  totalValueFun();
});

pro07Minus.addEventListener('click', () =>{
  
  pro07Quantity.value --;
  
  pro07ValueHolder -= 3600;
  pro07Value.value = pro07ValueHolder.toFixed(2);
  totalValue = pro07Value.value;
  totalValueFun();

  if(pro07ValueHolder === 0) {
    pro07Del.click();
  }
});

pro08.addEventListener('click', () => {

  pro08.disabled = true;
  pro08.innerText = 'DODATO U KORPU';
  clear.appendChild(pro08Del);
  pro08Del.style.display = 'BLOCK';
  plus.appendChild(pro08Plus);
  pro08Plus.style.display = 'BLOCK';
  minus.appendChild(pro08Minus);
  pro08Minus.style.display = 'BLOCK';
  quantity.appendChild(pro08Quantity);
  pro08Quantity.style.display = 'BLOCK';
  cart.appendChild(pro08Var);
  pro08Var.style.display = 'block';
  price.appendChild(pro08Value);
  pro08Value.style.display = 'block';
   
  pro08ValueHolder = 3600;
  pro08Value.value = pro08ValueHolder.toFixed(2);
  totalValue = pro08Value.value;
  totalValueFun();

  if(pro08.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro08Plus.addEventListener('click', () =>{
 
  pro08Quantity.value ++;

  pro08ValueHolder += 3600;
  pro08Value.value = pro08ValueHolder.toFixed(2);
  totalValue = pro08Value.value;
  totalValueFun();
});

pro08Minus.addEventListener('click', () =>{
 
  pro08Quantity.value --;
 
  pro08ValueHolder -= 3600;
  pro08Value.value = pro08ValueHolder.toFixed(2);
  totalValue = pro08Value.value;
  totalValueFun();
  if(pro08ValueHolder === 0) {
    pro08Del.click();
  }
});

pro011.addEventListener('click', () => {

  pro01.disabled = true;
  pro01.innerText = 'DODATO U KORPU';
  pro011.disabled = true;
  pro011.innerText = 'DODATO U KORPU';
  clear.appendChild(pro011Del);
  pro011Del.style.display = 'BLOCK';
  plus.appendChild(pro011Plus);
  pro011Plus.style.display = 'BLOCK';
  minus.appendChild(pro011Minus);
  pro011Minus.style.display = 'BLOCK';
  quantity.appendChild(pro011Quantity);
  pro011Quantity.style.display = 'BLOCK';
  cart.appendChild(pro011Var);
  pro011Var.style.display = 'block';
  price.appendChild(pro011Value);
  pro011Value.style.display = 'block';
  
  pro011ValueHolder = 1500;
  pro011Value.value = pro011ValueHolder.toFixed(2);
  totalValue = pro011Value.value;
  totalValueFun();

  if(pro01.disabled === true || pro011.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro011Plus.addEventListener('click', () =>{
 
  pro011Quantity.value ++;
 
  pro011ValueHolder += 1500;
  pro011Value.value = pro011ValueHolder.toFixed(2);
  totalValue = pro011Value.value;
  totalValueFun();
});

pro011Minus.addEventListener('click', () =>{
  
  pro011Quantity.value --;

  pro011ValueHolder -= 1500;
  pro011Value.value = pro011ValueHolder.toFixed(2);
  totalValue = pro011Value.value;
  totalValueFun();

  if(pro011ValueHolder === 0) {
    pro011Del.click();
  }
});

pro022.addEventListener('click', () => {
 
  pro02.disabled = true;
  pro02.innerText = 'DODATO U KORPU';
  pro022.disabled = true;
  pro022.innerText = 'DODATO U KORPU';
  clear.appendChild(pro022Del);
  pro022Del.style.display = 'BLOCK';
  plus.appendChild(pro022Plus);
  pro022Plus.style.display = 'BLOCK';
  minus.appendChild(pro022Minus);
  pro022Minus.style.display = 'BLOCK';
  quantity.appendChild(pro022Quantity);
  pro022Quantity.style.display = 'BLOCK'; 
  cart.appendChild(pro022Var);
  pro022Var.style.display = 'block';
  price.appendChild(pro022Value);
  pro022Value.style.display = 'block';
  
  pro022ValueHolder = 1500;
  pro022Value.value = pro022ValueHolder.toFixed(2);
  totalValue = pro022Value.value;
  totalValueFun();

  if(pro02.disabled === true || pro022.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro022Plus.addEventListener('click', () =>{
 
  pro022Quantity.value ++;
 
  pro022ValueHolder += 1500;
  pro022Value.value = pro022ValueHolder.toFixed(2);
  totalValue = pro022Value.value;
  totalValueFun();
});

pro022Minus.addEventListener('click', () =>{
 
  pro022Quantity.value --;
 
  pro022ValueHolder -= 1500;
  pro022Value.value = pro022ValueHolder.toFixed(2);
  totalValue = pro022Value.value;
  totalValueFun();

  if(pro022ValueHolder === 0) {
    pro022Del.click();
  }
});

pro033.addEventListener('click', () => {

  pro03.disabled = true;
  pro03.innerText = 'DODATO U KORPU';
  pro033.disabled = true;
  pro033.innerText = 'DODATO U KORPU';
  clear.appendChild(pro033Del);
  pro033Del.style.display = 'BLOCK';
  plus.appendChild(pro033Plus);
  pro033Plus.style.display = 'BLOCK';
  minus.appendChild(pro033Minus);
  pro033Minus.style.display = 'BLOCK';
  quantity.appendChild(pro033Quantity);
  pro033Quantity.style.display = 'BLOCK';
  cart.appendChild(pro033Var);
  pro033Var.style.display = 'block';
  price.appendChild(pro033Value);
  pro033Value.style.display = 'block';

  pro033ValueHolder = 4300;
  pro033Value.value = pro033ValueHolder.toFixed(2);
  totalValue = pro033Value.value;
  totalValueFun();

  if(pro03.disabled === true || pro033.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro033Plus.addEventListener('click', () =>{
 
  pro033Quantity.value ++;
 
  pro033ValueHolder += 4300;
  pro033Value.value = pro033ValueHolder.toFixed(2);
  totalValue = pro033Value.value;
  totalValueFun();
});

pro033Minus.addEventListener('click', () =>{
 
  pro033Quantity.value --;

  pro033ValueHolder -= 4300;
  pro033Value.value = pro033ValueHolder.toFixed(2);
  totalValue = pro033Value.value;
  totalValueFun();

  if(pro033ValueHolder === 0) {
    pro033Del.click();
  }
});

pro044.addEventListener('click', () => {


  pro04.disabled = true;
  pro04.innerText = 'DODATO U KORPU';
  pro044.disabled = true;
  pro044.innerText = 'DODATO U KORPU';
  clear.appendChild(pro044Del);
  pro044Del.style.display = 'BLOCK';
  plus.appendChild(pro044Plus);
  pro044Plus.style.display = 'BLOCK';
  minus.appendChild(pro044Minus);
  pro044Minus.style.display = 'BLOCK';
  quantity.appendChild(pro044Quantity);
  pro044Quantity.style.display = 'BLOCK';
  cart.appendChild(pro044Var);
  pro044Var.style.display = 'block';
  price.appendChild(pro044Value);
  pro044Value.style.display = 'block';
   
  pro044ValueHolder = 4900;
  pro044Value.value = pro044ValueHolder.toFixed(2);
  totalValue = pro044Value.value;
  totalValueFun();
  if(pro04.disabled === true || pro044.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro044Plus.addEventListener('click', () =>{
 
  pro044Quantity.value ++;
 
  pro044ValueHolder += 4900;
  pro044Value.value = pro044ValueHolder.toFixed(2);
  totalValue = pro044Value.value;
  totalValueFun();
});

pro044Minus.addEventListener('click', () =>{
 
  pro044Quantity.value --;
 
  pro044ValueHolder -= 4900;
  pro044Value.value = pro044ValueHolder.toFixed(2);
  totalValue = pro044Value.value;
   totalValueFun();

   if(pro044ValueHolder === 0) {
    pro044Del.click();
  }
});






pro01Del.addEventListener('click', () => {

  pro01Del.style.display = 'none';
  pro01.disabled = false;
  pro01.innerText = 'DODAJ U KORPU';
  pro011.disabled = false;
  pro011.innerText = 'DODAJ U KORPU';

  pro01Plus.style.display = 'none';
  pro01Minus.style.display = 'none';
  pro01Quantity.style.display = 'none';
  pro01Quantity.value = 1;
  pro01ValueHolder = 0;

  pro01Var.style.display = 'none';
  pro01Value.style.display = 'none';

  totalValueFun();
});



pro02Del.addEventListener('click', () => {
 
  pro02Del.style.display = 'none';
  pro02.disabled = false;
  pro02.innerText = 'DODAJ U KORPU';
  pro022.disabled = false;
  pro022.innerText = 'DODAJ U KORPU';

  pro02Plus.style.display = 'none';
  pro02Minus.style.display = 'none';
  pro02Quantity.style.display = 'none';
  pro02Quantity.value = 1;
  pro02ValueHolder = 0;
 
  pro02Var.style.display = 'none';
  pro02Value.style.display = 'none';

 
    totalValueFun();
});

pro03Del.addEventListener('click', () => {

  pro03Del.style.display = 'none';
  pro03.disabled = false;
  pro03.innerText = 'DODAJ U KORPU';
  pro033.disabled = false;
  pro033.innerText = 'DODAJ U KORPU';

  pro03Plus.style.display = 'none';
  pro03Minus.style.display = 'none';
  pro03Quantity.style.display = 'none';
  pro03Quantity.value = 1;
  pro03ValueHolder = 0;
 

  pro03Var.style.display = 'none';
  pro03Value.style.display = 'none';
 
    totalValueFun();
});

pro04Del.addEventListener('click', () => {
 
  pro04Del.style.display = 'none';
  pro04.disabled = false;
  pro04.innerText = 'DODAJ U KORPU';
  pro044.disabled = false;
  pro044.innerText = 'DODAJ U KORPU';

  pro04Plus.style.display = 'none';
  pro04Minus.style.display = 'none';
  pro04Quantity.style.display = 'none';
  pro04Quantity.value = 1;
  pro04ValueHolder = 0;
 

  pro04Var.style.display = 'none';
  pro04Value.style.display = 'none';

  
    totalValueFun();
});

pro05Del.addEventListener('click', () => {
  
  pro05Del.style.display = 'none';
  pro05.disabled = false;
  pro05.innerText = 'DODAJ U KORPU';

  pro05Plus.style.display = 'none';
  pro05Minus.style.display = 'none';
  pro05Quantity.style.display = 'none';
  pro05Quantity.value = 1;
  pro05ValueHolder = 0;
 

  pro05Var.style.display = 'none';
  pro05Value.style.display = 'none';

 
    totalValueFun();
});

pro06Del.addEventListener('click', () => {
 
  pro06Del.style.display = 'none';
  pro06.disabled = false;
  pro06.innerText = 'DODAJ U KORPU';

  pro06Plus.style.display = 'none';
  pro06Minus.style.display = 'none';
  pro06Quantity.style.display = 'none';
  pro06Quantity.value = 1;
  pro06ValueHolder = 0;

  pro06Var.style.display = 'none';
  pro06Value.style.display = 'none';

 
    totalValueFun();
});

pro07Del.addEventListener('click', () => {
  
  pro07Del.style.display = 'none';
  pro07.disabled = false;
  pro07.innerText = 'DODAJ U KORPU';

  pro07Plus.style.display = 'none';
  pro07Minus.style.display = 'none';
  pro07Quantity.style.display = 'none';
  pro07Quantity.value = 1;
  pro07ValueHolder = 0;

  pro07Var.style.display = 'none';
  pro07Value.style.display = 'none';

  
    totalValueFun();
});

pro08Del.addEventListener('click', () => {
 
  pro08Del.style.display = 'none';
  pro08.disabled = false;
  pro08.innerText = 'DODAJ U KORPU';

  pro08Plus.style.display = 'none';
  pro08Minus.style.display = 'none';
  pro08Quantity.style.display = 'none';
  pro08Quantity.value = 1;
  pro08ValueHolder = 0;

  pro08Var.style.display = 'none';
  pro08Value.style.display = 'none';

 
    totalValueFun();
});

pro011Del.addEventListener('click', () => {

  pro011Del.style.display = 'none';
  pro01.disabled = false;
  pro01.innerText = 'DODAJ U KORPU';
  pro011.disabled = false;
  pro011.innerText = 'DODAJ U KORPU';

  pro011Plus.style.display = 'none';
  pro011Minus.style.display = 'none';
  pro011Quantity.style.display = 'none';
  pro011Quantity.value = 1;
  pro011ValueHolder = 0;

  pro011Var.style.display = 'none';
  pro011Value.style.display = 'none';

 
    totalValueFun();
});

pro022Del.addEventListener('click', () => {
 
  pro022Del.style.display = 'none';
  pro02.disabled = false;
  pro02.innerText = 'DODAJ U KORPU';
  pro022.disabled = false;
  pro022.innerText = 'DODAJ U KORPU';

  pro022Plus.style.display = 'none';
  pro022Minus.style.display = 'none';
  pro022Quantity.style.display = 'none';
  pro022Quantity.value = 1;
  pro022ValueHolder = 0;
 
  pro022Var.style.display = 'none';
  pro022Value.style.display = 'none';

 
    totalValueFun();
});

pro033Del.addEventListener('click', () => {
  
  pro033Del.style.display = 'none';
  pro03.disabled = false;
  pro03.innerText = 'DODAJ U KORPU';
  pro033.disabled = false;
  pro033.innerText = 'DODAJ U KORPU';

  pro033Plus.style.display = 'none';
  pro033Minus.style.display = 'none';
  pro033Quantity.style.display = 'none';
  pro033Quantity.value = 1;
  pro033ValueHolder = 0;

  pro033Var.style.display = 'none';
  pro033Value.style.display = 'none';

 
    totalValueFun();
});

pro044Del.addEventListener('click', () => {
  
  pro044Del.style.display = 'none';
  pro04.disabled = false;
  pro04.innerText = 'DODAJ U KORPU';
  pro044.disabled = false;
  pro044.innerText = 'DODAJ U KORPU';

  pro044Plus.style.display = 'none';
  pro044Minus.style.display = 'none';
  pro044Quantity.style.display = 'none';
  pro044Quantity.value = 1;
  pro044ValueHolder = 0;

  pro044Var.style.display = 'none';
  pro044Value.style.display = 'none';

  
    totalValueFun();
});



 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let totalValueMob = 0;

function totalValueFunMob() {
  totalValueMob = pro01ValueHolderMob + pro02ValueHolderMob + pro03ValueHolderMob + pro04ValueHolderMob + pro05ValueHolderMob 
    + pro06ValueHolderMob + pro07ValueHolderMob + pro08ValueHolderMob + pro011ValueHolderMob + pro022ValueHolderMob + pro033ValueHolderMob + pro044ValueHolderMob;
  console.log("Updated totalValue:", totalValueMob);
  totalSaldoPrice.value = totalValueMob.toFixed(2);

  if(totalSaldoPrice.value == 0) {
    cartMother.style.display = 'none';
  }
}


let pro01ValueHolderMob = 0;
let pro02ValueHolderMob = 0;
let pro03ValueHolderMob = 0;
let pro04ValueHolderMob = 0;
let pro05ValueHolderMob = 0;
let pro06ValueHolderMob = 0;
let pro07ValueHolderMob = 0;
let pro08ValueHolderMob = 0;
let pro011ValueHolderMob = 0;
let pro022ValueHolderMob = 0;
let pro033ValueHolderMob = 0;
let pro044ValueHolderMob = 0;







let pro01Mob = document.querySelector('#pro01Mob');
let pro02Mob = document.querySelector('#pro02Mob');
let pro03Mob = document.querySelector('#pro03Mob');
let pro04Mob = document.querySelector('#pro04Mob');
let pro05Mob = document.querySelector('#pro05Mob');
let pro06Mob = document.querySelector('#pro06Mob');
let pro07Mob = document.querySelector('#pro07Mob');
let pro08Mob = document.querySelector('#pro08Mob');
let pro011Mob = document.querySelector('#pro011Mob');
let pro022Mob = document.querySelector('#pro022Mob');
let pro033Mob = document.querySelector('#pro033Mob');
let pro044Mob = document.querySelector('#pro044Mob');






function createStyledButtonProValueMob(proValue) {
  let button = document.createElement('input');
  button.type = 'number';
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '0%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.height = '1.35rem';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.textAlign = 'center';
  button.style.width = '70%';
  button.value = proValue;
  button.readOnly = true;
  button.style.fontSize = '1rem';
  return button;
}


const pro01ValueMob = createStyledButtonProValueMob(1500);
const pro02ValueMob = createStyledButtonProValueMob(1500);
const pro03ValueMob = createStyledButtonProValueMob(4300);
const pro04ValueMob = createStyledButtonProValueMob(4900);
const pro05ValueMob = createStyledButtonProValueMob(7500);
const pro06ValueMob = createStyledButtonProValueMob(12900);
const pro07ValueMob = createStyledButtonProValueMob(3600);
const pro08ValueMob = createStyledButtonProValueMob(3600);
const pro011ValueMob = createStyledButtonProValueMob(1500);
const pro022ValueMob = createStyledButtonProValueMob(1500);
const pro033ValueMob = createStyledButtonProValueMob(4300);
const pro044ValueMob = createStyledButtonProValueMob(4900);





function createStyledButtonProDelMob() {
  let button = document.createElement('button');
  button.textContent = 'X';
  button.style.backgroundColor = 'rgba(255,0,0,0.2)';
  button.style.borderRadius = '50%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.fontSize = '1.5rem';
  return button;
}

const pro01DelMob = createStyledButtonProDelMob();
const pro02DelMob = createStyledButtonProDelMob();
const pro03DelMob = createStyledButtonProDelMob();
const pro04DelMob = createStyledButtonProDelMob();
const pro05DelMob = createStyledButtonProDelMob();
const pro06DelMob = createStyledButtonProDelMob();
const pro07DelMob = createStyledButtonProDelMob();
const pro08DelMob = createStyledButtonProDelMob();
const pro011DelMob = createStyledButtonProDelMob();
const pro022DelMob = createStyledButtonProDelMob();
const pro033DelMob = createStyledButtonProDelMob();
const pro044DelMob = createStyledButtonProDelMob();



function createStyledButtonProPlusMob(text) {
  let button = document.createElement('button');
  button.textContent = text;
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '50%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.fontSize = '1.5rem';
  return button;
}

const pro01PlusMob = createStyledButtonProPlusMob('+');
const pro02PlusMob = createStyledButtonProPlusMob('+');
const pro03PlusMob = createStyledButtonProPlusMob('+');
const pro04PlusMob = createStyledButtonProPlusMob('+');
const pro05PlusMob = createStyledButtonProPlusMob('+');
const pro06PlusMob = createStyledButtonProPlusMob('+');
const pro07PlusMob = createStyledButtonProPlusMob('+');
const pro08PlusMob = createStyledButtonProPlusMob('+');
const pro011PlusMob = createStyledButtonProPlusMob('+');
const pro022PlusMob = createStyledButtonProPlusMob('+');
const pro033PlusMob = createStyledButtonProPlusMob('+');
const pro044PlusMob = createStyledButtonProPlusMob('+');



function createStyledButtonProMinusMob(text) {
  let button = document.createElement('button');
  button.textContent = text;
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '50%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.fontSize = '1.5rem';
  return button;
}

const pro01MinusMob = createStyledButtonProPlusMob('-');
const pro02MinusMob = createStyledButtonProPlusMob('-');
const pro03MinusMob = createStyledButtonProPlusMob('-');
const pro04MinusMob = createStyledButtonProPlusMob('-');
const pro05MinusMob = createStyledButtonProPlusMob('-');
const pro06MinusMob = createStyledButtonProPlusMob('-');
const pro07MinusMob = createStyledButtonProPlusMob('-');
const pro08MinusMob = createStyledButtonProPlusMob('-');
const pro011MinusMob = createStyledButtonProPlusMob('-');
const pro022MinusMob = createStyledButtonProPlusMob('-');
const pro033MinusMob = createStyledButtonProPlusMob('-');
const pro044MinusMob = createStyledButtonProPlusMob('-');



function createStyledButtonProQuantityMob(placeholderColor) {
  let button = document.createElement('input');
  button.type = 'number';
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '0%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.textAlign = 'center';
  button.style.color = placeholderColor;
  button.value = 1;
  button.style.width = '3rem';
  button.style.height = '1.35rem';
  button.style.fontSize = '1rem';
  button.readOnly = true;
  return button;
}



let pro01QuantityMob = createStyledButtonProQuantityMob('white');
let pro02QuantityMob = createStyledButtonProQuantityMob('white');
let pro03QuantityMob = createStyledButtonProQuantityMob('white');
let pro04QuantityMob = createStyledButtonProQuantityMob('white');
let pro05QuantityMob = createStyledButtonProQuantityMob('white');
let pro06QuantityMob = createStyledButtonProQuantityMob('white');
let pro07QuantityMob = createStyledButtonProQuantityMob('white');
let pro08QuantityMob = createStyledButtonProQuantityMob('white');
let pro011QuantityMob = createStyledButtonProQuantityMob('white');
let pro022QuantityMob = createStyledButtonProQuantityMob('white');
let pro033QuantityMob = createStyledButtonProQuantityMob('white');
let pro044QuantityMob = createStyledButtonProQuantityMob('white');


function createStyledButtonProVarMob(proText) {
  let button = document.createElement('input');
  button.type = 'text';
  button.style.backgroundColor = 'rgba(0,0,0,0.2)';
  button.style.borderRadius = '0%';
  button.style.margin = '0.25rem';
  button.style.cursor = 'pointer';
  button.style.color = 'white';
  button.style.borderColor = 'white';
  button.style.height = '1.35rem';
  button.style.textAlign = 'left';
  button.style.width = '85%';
  button.style.fontSize = '1rem';
  button.value = proText;
  button.readOnly = true;
  return button;
}



const pro01VarMob = createStyledButtonProVarMob('Majica Horus - crna, beli logo');
const pro02VarMob = createStyledButtonProVarMob('Majica Horus - plava, beli logo');
const pro03VarMob = createStyledButtonProVarMob('Bermude - Multicam Black');
const pro04VarMob = createStyledButtonProVarMob('Duks D-1A INT - zeleni');
const pro05VarMob = createStyledButtonProVarMob('Pantalone P-2 Gen II TCT - kojot');
const pro06VarMob = createStyledButtonProVarMob('Jakna X-5 - crna');
const pro07VarMob = createStyledButtonProVarMob('Aktivni veš Raptor donji- zeleni');
const pro08VarMob = createStyledButtonProVarMob('Aktivni veš Raptor gornji- zeleni');
const pro011VarMob = createStyledButtonProVarMob('Majica Horus - crna, beli logo');
const pro022VarMob = createStyledButtonProVarMob('Majica Horus - plava, beli logo');
const pro033VarMob = createStyledButtonProVarMob('Bermude - Multicam Black');
const pro044VarMob = createStyledButtonProVarMob('Duks D-1A INT - zeleni');





pro01Mob.addEventListener('click', () => {
 
  pro01Mob.disabled = true;
  pro01Mob.innerText = 'DODATO U KORPU';
  pro011Mob.disabled = true;
  pro011Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro01DelMob);
  pro01DelMob.style.display = 'BLOCK';
  plus.appendChild(pro01PlusMob);
  pro01PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro01MinusMob);
  pro01MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro01QuantityMob);
  pro01QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro01VarMob);
  pro01VarMob.style.display = 'block';
  price.appendChild(pro01ValueMob);
  pro01ValueMob.style.display = 'block';

  pro01ValueHolderMob = 1500;
  pro01ValueMob.value = pro01ValueHolderMob.toFixed(2);
  totalValueMob = pro01ValueMob.value;
  
  totalValueFunMob();


  if(pro01Mob.disabled === true || pro011Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});


pro01PlusMob.addEventListener('click', () =>{

  pro01QuantityMob.value ++;
 
  pro01ValueHolderMob += 1500;
  pro01ValueMob.value = pro01ValueHolderMob.toFixed(2);
  totalValueMob = pro01ValueMob.value;

  totalValueFunMob();
});

pro01MinusMob.addEventListener('click', () =>{

  pro01QuantityMob.value --;
   
  pro01ValueHolderMob -= 1500;
  pro01ValueMob.value = pro01ValueHolderMob.toFixed(2);
  totalValueMob = pro01ValueMob.value;
  
  totalValueFunMob();

  if(pro01ValueHolderMob === 0) {
    pro01DelMob.click();
  }
});

pro02Mob.addEventListener('click', () => {
  
  pro02Mob.disabled = true;
  pro02Mob.innerText = 'DODATO U KORPU';
  pro022Mob.disabled = true;
  pro022Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro02DelMob);
  pro02DelMob.style.display = 'BLOCK';
  plus.appendChild(pro02PlusMob);
  pro02PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro02MinusMob);
  pro02MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro02QuantityMob);
  pro02QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro02VarMob);
  pro02VarMob.style.display = 'block';
  price.appendChild(pro02ValueMob);
  pro02ValueMob.style.display = 'block';


  pro02ValueHolderMob = 1500;
  pro02ValueMob.value = pro02ValueHolderMob.toFixed(2);
  totalValueMob = pro02ValueMob.value;
  
  totalValueFunMob();


  if(pro02Mob.disabled === true || pro022Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro02PlusMob.addEventListener('click', () =>{

  pro02QuantityMob.value ++;
 
  pro02ValueHolderMob += 1500;
  pro02ValueMob.value = pro02ValueHolderMob.toFixed(2);
  totalValueMob = pro02ValueMob.value;

  totalValueFunMob();
});

pro02MinusMob.addEventListener('click', () =>{

  pro02QuantityMob.value --;
   
  pro02ValueHolderMob -= 1500;
  pro02ValueMob.value = pro02ValueHolderMob.toFixed(2);
  totalValueMob = pro02ValueMob.value;
  
  totalValueFunMob();

  if(pro02ValueHolderMob === 0) {
    pro02DelMob.click();
  }
});

pro03Mob.addEventListener('click', () => {
  
  pro03Mob.disabled = true;
  pro03Mob.innerText = 'DODATO U KORPU';
  pro033Mob.disabled = true;
  pro033Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro03DelMob);
  pro03DelMob.style.display = 'BLOCK';
  plus.appendChild(pro03PlusMob);
  pro03PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro03MinusMob);
  pro03MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro03QuantityMob);
  pro03QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro03VarMob);
  pro03VarMob.style.display = 'block';
  price.appendChild(pro03ValueMob);
  pro03ValueMob.style.display = 'block';

  pro03ValueHolderMob = 4300;
  pro03ValueMob.value = pro03ValueHolderMob.toFixed(2);
  totalValueMob = pro03ValueMob.value;
  
  totalValueFunMob();

  if(pro03Mob.disabled === true || pro033Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro03PlusMob.addEventListener('click', () =>{

  pro03QuantityMob.value ++;
 
  pro03ValueHolderMob += 4300;
  pro03ValueMob.value = pro03ValueHolderMob.toFixed(2);
  totalValueMob = pro03ValueMob.value;

  totalValueFunMob();
});

pro03MinusMob.addEventListener('click', () =>{

  pro03QuantityMob.value --;
   
  pro03ValueHolderMob -= 4300;
  pro03ValueMob.value = pro03ValueHolderMob.toFixed(2);
  totalValueMob = pro03ValueMob.value;
  
  totalValueFunMob();

  if(pro03ValueHolderMob === 0) {
    pro03DelMob.click();
  }
});

pro04Mob.addEventListener('click', () => {
  
  pro04Mob.disabled = true;
  pro04Mob.innerText = 'DODATO U KORPU';
  pro044Mob.disabled = true;
  pro044Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro04DelMob);
  pro04DelMob.style.display = 'BLOCK';
  plus.appendChild(pro04PlusMob);
  pro04PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro04MinusMob);
  pro04MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro04QuantityMob);
  pro04QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro04VarMob);
  pro04VarMob.style.display = 'block';
  price.appendChild(pro04ValueMob);
  pro04ValueMob.style.display = 'block';

  pro04ValueHolderMob = 4900;
  pro04ValueMob.value = pro04ValueHolderMob.toFixed(2);
  totalValueMob = pro04ValueMob.value;

  totalValueFunMob();

  if(pro04Mob.disabled === true || pro044Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro04PlusMob.addEventListener('click', () =>{

  pro04QuantityMob.value ++;
 
  pro04ValueHolderMob += 4900;
  pro04ValueMob.value = pro04ValueHolderMob.toFixed(2);
  totalValueMob = pro04ValueMob.value;

  totalValueFunMob();
});

pro04MinusMob.addEventListener('click', () =>{

  pro04QuantityMob.value --;
   
  pro04ValueHolderMob -= 4900;
  pro04ValueMob.value = pro04ValueHolderMob.toFixed(2);
  totalValueMob = pro04ValueMob.value;
  
  totalValueFunMob();

  if(pro04ValueHolderMob === 0) {
    pro04DelMob.click();
  }
});

pro05Mob.addEventListener('click', () => {
  
  pro05Mob.disabled = true;
  pro05Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro05DelMob);
  pro05DelMob.style.display = 'BLOCK';
  plus.appendChild(pro05PlusMob);
  pro05PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro05MinusMob);
  pro05MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro05QuantityMob);
  pro05QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro05VarMob);
  pro05VarMob.style.display = 'block';
  price.appendChild(pro05ValueMob);
  pro05ValueMob.style.display = 'block';

  pro05ValueHolderMob = 7500;
  pro05ValueMob.value = pro05ValueHolderMob.toFixed(2);
  totalValueMob = pro05ValueMob.value;

  totalValueFunMob();

  if(pro05Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro05PlusMob.addEventListener('click', () =>{

  pro05QuantityMob.value ++;
 
  pro05ValueHolderMob += 7500;
  pro05ValueMob.value = pro05ValueHolderMob.toFixed(2);
  totalValueMob = pro05ValueMob.value;

  totalValueFunMob();
});

pro05MinusMob.addEventListener('click', () =>{

  pro05QuantityMob.value --;
   
  pro05ValueHolderMob -= 7500;
  pro05ValueMob.value = pro05ValueHolderMob.toFixed(2);
  totalValueMob = pro05ValueMob.value;
  
  totalValueFunMob();

  if(pro05ValueHolderMob === 0) {
    pro05DelMob.click();
  }
});

pro06Mob.addEventListener('click', () => {
  
  pro06Mob.disabled = true;
  pro06Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro06DelMob);
  pro06DelMob.style.display = 'BLOCK';
  plus.appendChild(pro06PlusMob);
  pro06PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro06MinusMob);
  pro06MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro06QuantityMob);
  pro06QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro06VarMob);
  pro06VarMob.style.display = 'block';
  price.appendChild(pro06ValueMob);
  pro06ValueMob.style.display = 'block';

  pro06ValueHolderMob = 12900;
  pro06ValueMob.value = pro06ValueHolderMob.toFixed(2);
  totalValueMob = pro06ValueMob.value;

  totalValueFunMob();

  if(pro06Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro06PlusMob.addEventListener('click', () =>{

  pro06QuantityMob.value ++;
 
  pro06ValueHolderMob += 12900;
  pro06ValueMob.value = pro06ValueHolderMob.toFixed(2);
  totalValueMob = pro06ValueMob.value;

  totalValueFunMob();
});

pro06MinusMob.addEventListener('click', () =>{

  pro06QuantityMob.value --;
   
  pro06ValueHolderMob -= 12900;
  pro06ValueMob.value = pro06ValueHolderMob.toFixed(2);
  totalValueMob = pro06ValueMob.value;
  
  totalValueFunMob();

  if(pro06ValueHolderMob === 0) {
    pro06DelMob.click();
  }
});

pro07Mob.addEventListener('click', () => {
  
  pro07Mob.disabled = true;
  pro07Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro07DelMob);
  pro07DelMob.style.display = 'BLOCK';
  plus.appendChild(pro07PlusMob);
  pro07PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro07MinusMob);
  pro07MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro07QuantityMob);
  pro07QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro07VarMob);
  pro07VarMob.style.display = 'block';
  price.appendChild(pro07ValueMob);
  pro07ValueMob.style.display = 'block';

  pro07ValueHolderMob = 3600;
  pro07ValueMob.value = pro07ValueHolderMob.toFixed(2);
  totalValueMob = pro07ValueMob.value;

  totalValueFunMob();

  if(pro07Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro07PlusMob.addEventListener('click', () =>{

  pro07QuantityMob.value ++;
 
  pro07ValueHolderMob += 3600;
  pro07ValueMob.value = pro07ValueHolderMob.toFixed(2);
  totalValueMob = pro07ValueMob.value;

  totalValueFunMob();
});

pro07MinusMob.addEventListener('click', () =>{

  pro07QuantityMob.value --;
   
  pro07ValueHolderMob -= 3600;
  pro07ValueMob.value = pro07ValueHolderMob.toFixed(2);
  totalValueMob = pro07ValueMob.value;
  
  totalValueFunMob();

  if(pro07ValueHolderMob === 0) {
    pro07DelMob.click();
  }
});

pro08Mob.addEventListener('click', () => {
  
  pro08Mob.disabled = true;
  pro08Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro08DelMob);
  pro08DelMob.style.display = 'BLOCK';
  plus.appendChild(pro08PlusMob);
  pro08PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro08MinusMob);
  pro08MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro08QuantityMob);
  pro08QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro08VarMob);
  pro08VarMob.style.display = 'block';
  price.appendChild(pro08ValueMob);
  pro08ValueMob.style.display = 'block';

  pro08ValueHolderMob = 3600;
  pro08ValueMob.value = pro08ValueHolderMob.toFixed(2);
  totalValueMob = pro08ValueMob.value;

  totalValueFunMob();

  if(pro08Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro08PlusMob.addEventListener('click', () =>{

  pro08QuantityMob.value ++;
 
  pro08ValueHolderMob += 3600;
  pro08ValueMob.value = pro08ValueHolderMob.toFixed(2);
  totalValueMob = pro08ValueMob.value;

  totalValueFunMob();
});

pro08MinusMob.addEventListener('click', () =>{

  pro08QuantityMob.value --;
   
  pro08ValueHolderMob -= 3600;
  pro08ValueMob.value = pro08ValueHolderMob.toFixed(2);
  totalValueMob = pro08ValueMob.value;
  
  totalValueFunMob();

  if(pro08ValueHolderMob === 0) {
    pro08DelMob.click();
  }
});

pro011Mob.addEventListener('click', () => {
  
  pro01Mob.disabled = true;
  pro01Mob.innerText = 'DODATO U KORPU';
  pro011Mob.disabled = true;
  pro011Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro011DelMob);
  pro011DelMob.style.display = 'BLOCK';
  plus.appendChild(pro011PlusMob);
  pro011PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro011MinusMob);
  pro011MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro011QuantityMob);
  pro011QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro011VarMob);
  pro011VarMob.style.display = 'block';
  price.appendChild(pro011ValueMob);
  pro011ValueMob.style.display = 'block';

  pro011ValueHolderMob = 1500;
  pro011ValueMob.value = pro011ValueHolderMob.toFixed(2);
  totalValueMob = pro011ValueMob.value;

  totalValueFunMob();

  if(pro01Mob.disabled === true || pro011Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro011PlusMob.addEventListener('click', () =>{

  pro011QuantityMob.value ++;
 
  pro011ValueHolderMob += 1500;
  pro011ValueMob.value = pro011ValueHolderMob.toFixed(2);
  totalValueMob = pro011ValueMob.value;

  totalValueFunMob();
});

pro011MinusMob.addEventListener('click', () =>{

  pro011QuantityMob.value --;
   
  pro011ValueHolderMob -= 1500;
  pro011ValueMob.value = pro011ValueHolderMob.toFixed(2);
  totalValueMob = pro011ValueMob.value;
  
  totalValueFunMob();

  if(pro011ValueHolderMob === 0) {
    pro011DelMob.click();
  }
});

pro022Mob.addEventListener('click', () => {
  
  pro02Mob.disabled = true;
  pro02Mob.innerText = 'DODATO U KORPU';
  pro022Mob.disabled = true;
  pro022Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro022DelMob);
  pro022DelMob.style.display = 'BLOCK';
  plus.appendChild(pro022PlusMob);
  pro022PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro022MinusMob);
  pro022MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro022QuantityMob);
  pro022QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro022VarMob);
  pro022VarMob.style.display = 'block';
  price.appendChild(pro022ValueMob);
  pro022ValueMob.style.display = 'block';

  pro022ValueHolderMob = 1500;
  pro022ValueMob.value = pro022ValueHolderMob.toFixed(2);
  totalValueMob = pro022ValueMob.value;

  totalValueFunMob();

  if(pro02Mob.disabled === true || pro022Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro022PlusMob.addEventListener('click', () =>{

  pro022QuantityMob.value ++;
 
  pro022ValueHolderMob += 1500;
  pro022ValueMob.value = pro022ValueHolderMob.toFixed(2);
  totalValueMob = pro022ValueMob.value;

  totalValueFunMob();
});

pro022MinusMob.addEventListener('click', () =>{

  pro022QuantityMob.value --;
   
  pro022ValueHolderMob -= 1500;
  pro022ValueMob.value = pro022ValueHolderMob.toFixed(2);
  totalValueMob = pro022ValueMob.value;
  
  totalValueFunMob();

  if(pro022ValueHolderMob === 0) {
    pro022DelMob.click();
  }
});

pro033Mob.addEventListener('click', () => {
 
  pro03Mob.disabled = true;
  pro03Mob.innerText = 'DODATO U KORPU';
  pro033Mob.disabled = true;
  pro033Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro033DelMob);
  pro033DelMob.style.display = 'BLOCK';
  plus.appendChild(pro033PlusMob);
  pro033PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro033MinusMob);
  pro033MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro033QuantityMob);
  pro033QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro033VarMob);
  pro033VarMob.style.display = 'block';
  price.appendChild(pro033ValueMob);
  pro033ValueMob.style.display = 'block';

  pro033ValueHolderMob = 4300;
  pro033ValueMob.value = pro033ValueHolderMob.toFixed(2);
  totalValueMob = pro033ValueMob.value;

  totalValueFunMob();

  if(pro03Mob.disabled === true || pro033Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro033PlusMob.addEventListener('click', () =>{

  pro033QuantityMob.value ++;
 
  pro033ValueHolderMob += 4300;
  pro033ValueMob.value = pro033ValueHolderMob.toFixed(2);
  totalValueMob = pro033ValueMob.value;

  totalValueFunMob();
});

pro033MinusMob.addEventListener('click', () =>{

  pro033QuantityMob.value --;
   
  pro033ValueHolderMob -= 4300;
  pro033ValueMob.value = pro033ValueHolderMob.toFixed(2);
  totalValueMob = pro033ValueMob.value;
  
  totalValueFunMob();

  if(pro033ValueHolderMob === 0) {
    pro033DelMob.click();
  }
});

pro044Mob.addEventListener('click', () => {
  
  pro04Mob.disabled = true;
  pro04Mob.innerText = 'DODATO U KORPU';
  pro044Mob.disabled = true;
  pro044Mob.innerText = 'DODATO U KORPU';
  clear.appendChild(pro044DelMob);
  pro044DelMob.style.display = 'BLOCK';
  plus.appendChild(pro044PlusMob);
  pro044PlusMob.style.display = 'BLOCK';
  minus.appendChild(pro044MinusMob);
  pro044MinusMob.style.display = 'BLOCK';
  quantity.appendChild(pro044QuantityMob);
  pro044QuantityMob.style.display = 'BLOCK';
  cart.appendChild(pro044VarMob);
  pro044VarMob.style.display = 'block';
  price.appendChild(pro044ValueMob);
  pro044ValueMob.style.display = 'block';

  pro044ValueHolderMob = 4900;
  pro044ValueMob.value = pro044ValueHolderMob.toFixed(2);
  totalValueMob = pro044ValueMob.value;

  totalValueFunMob();

  if(pro04Mob.disabled === true || pro044Mob.disabled === true) {
    cartMother.style.display = 'grid';
  }
});

pro044PlusMob.addEventListener('click', () =>{

  pro044QuantityMob.value ++;
 
  pro044ValueHolderMob += 4900;
  pro044ValueMob.value = pro044ValueHolderMob.toFixed(2);
  totalValueMob = pro044ValueMob.value;

  totalValueFunMob();
});

pro044MinusMob.addEventListener('click', () =>{

  pro044QuantityMob.value --;
   
  pro044ValueHolderMob -= 4900;
  pro044ValueMob.value = pro044ValueHolderMob.toFixed(2);
  totalValueMob = pro044ValueMob.value;
  
  totalValueFunMob();

  if(pro044ValueHolderMob === 0) {
    pro044DelMob.click();
  }
});






pro01DelMob.addEventListener('click', () => {
  
  pro01DelMob.style.display = 'none';
  pro01Mob.disabled = false;
  pro01Mob.innerText = 'DODAJ U KORPU';
  pro011Mob.disabled = false;
  pro011Mob.innerText = 'DODAJ U KORPU';

  pro01PlusMob.style.display = 'none';
  pro01MinusMob.style.display = 'none';
  pro01QuantityMob.style.display = 'none';
 
  pro01ValueMob.style.display = 'none';
  pro01VarMob.style.display = 'none';
  pro01QuantityMob.value = 1;
  pro01ValueHolderMob = 0;

 
    totalValueFunMob();
});

pro02DelMob.addEventListener('click', () => {
 
  pro02DelMob.style.display = 'none';
  pro02Mob.disabled = false;
  pro02Mob.innerText = 'DODAJ U KORPU';
  pro022Mob.disabled = false;
  pro022Mob.innerText = 'DODAJ U KORPU';

  pro02PlusMob.style.display = 'none';
  pro02MinusMob.style.display = 'none';
  pro02QuantityMob.style.display = 'none';
 
  pro02ValueMob.style.display = 'none';
  pro02VarMob.style.display = 'none';
  pro02QuantityMob.value = 1;
  pro02ValueHolderMob = 0;


    totalValueFunMob();
});

pro03DelMob.addEventListener('click', () => {
 
  pro03DelMob.style.display = 'none';
  pro03Mob.disabled = false;
  pro03Mob.innerText = 'DODAJ U KORPU';
  pro033Mob.disabled = false;
  pro033Mob.innerText = 'DODAJ U KORPU';

  pro03PlusMob.style.display = 'none';
  pro03MinusMob.style.display = 'none';
  pro03QuantityMob.style.display = 'none';
 
  pro03ValueMob.style.display = 'none';
  pro03VarMob.style.display = 'none';
  pro03QuantityMob.value = 1;
  pro03ValueHolderMob = 0;

  
    totalValueFunMob();
});

pro04DelMob.addEventListener('click', () => {
  
  pro04DelMob.style.display = 'none';
  pro04Mob.disabled = false;
  pro04Mob.innerText = 'DODAJ U KORPU';
  pro044Mob.disabled = false;
  pro044Mob.innerText = 'DODAJ U KORPU';
 
  pro04PlusMob.style.display = 'none';
  pro04MinusMob.style.display = 'none';
  pro04QuantityMob.style.display = 'none';
  
  pro04ValueMob.style.display = 'none';
  pro04VarMob.style.display = 'none';
  pro04QuantityMob.value = 1;
  pro04ValueHolderMob = 0;

 
    totalValueFunMob();
});

pro05DelMob.addEventListener('click', () => {
  
  pro05DelMob.style.display = 'none';
  pro05Mob.disabled = false;
  pro05Mob.innerText = 'DODAJ U KORPU';

  pro05PlusMob.style.display = 'none';
  pro05MinusMob.style.display = 'none';
  pro05QuantityMob.style.display = 'none';
 
  pro05ValueMob.style.display = 'none';
  pro05VarMob.style.display = 'none';
  pro05QuantityMob.value = 1;
  pro05ValueHolderMob = 0;

 
    totalValueFunMob();
});

pro06DelMob.addEventListener('click', () => {
  
  pro06DelMob.style.display = 'none';
  pro06Mob.disabled = false;
  pro06Mob.innerText = 'DODAJ U KORPU';
 
  pro06PlusMob.style.display = 'none';
  pro06MinusMob.style.display = 'none';
  pro06QuantityMob.style.display = 'none';
 
  pro06ValueMob.style.display = 'none';
  pro06VarMob.style.display = 'none';
  pro06QuantityMob.value = 1;
  pro06ValueHolderMob = 0;

 
    totalValueFunMob();
});

pro07DelMob.addEventListener('click', () => {
  
  pro07DelMob.style.display = 'none';
  pro07Mob.disabled = false;
  pro07Mob.innerText = 'DODAJ U KORPU';
 
  pro07PlusMob.style.display = 'none';
  pro07MinusMob.style.display = 'none';
  pro07QuantityMob.style.display = 'none';
 
  pro07ValueMob.style.display = 'none';
  pro07VarMob.style.display = 'none';
  pro07QuantityMob.value = 1;
  pro07ValueHolderMob = 0;

  
    totalValueFunMob();
});

pro08DelMob.addEventListener('click', () => {
  
  pro08DelMob.style.display = 'none';
  pro08Mob.disabled = false;
  pro08Mob.innerText = 'DODAJ U KORPU';

  pro08PlusMob.style.display = 'none';
  pro08MinusMob.style.display = 'none';
  pro08QuantityMob.style.display = 'none';
 
  pro08ValueMob.style.display = 'none';
  pro08VarMob.style.display = 'none';
  pro08QuantityMob.value = 1;
  pro08ValueHolderMob = 0;


    totalValueFunMob();
});

pro011DelMob.addEventListener('click', () => {
  
  pro011DelMob.style.display = 'none';
  pro01Mob.disabled = false;
  pro01Mob.innerText = 'DODAJ U KORPU';
  pro011Mob.disabled = false;
  pro011Mob.innerText = 'DODAJ U KORPU';

  pro011PlusMob.style.display = 'none';
  pro011MinusMob.style.display = 'none';
  pro011QuantityMob.style.display = 'none';
 
  pro011ValueMob.style.display = 'none';
  pro011VarMob.style.display = 'none';
  pro011QuantityMob.value = 1;
  pro011ValueHolderMob = 0;


 
    totalValueFunMob();
});

pro022DelMob.addEventListener('click', () => {
  
  pro022DelMob.style.display = 'none';
  pro02Mob.disabled = false;
  pro02Mob.innerText = 'DODAJ U KORPU';
  pro022Mob.disabled = false;
  pro022Mob.innerText = 'DODAJ U KORPU';

  pro022PlusMob.style.display = 'none';
  pro022MinusMob.style.display = 'none';
  pro022QuantityMob.style.display = 'none';
 
  pro022ValueMob.style.display = 'none';
  pro022VarMob.style.display = 'none';
  pro022QuantityMob.value = 1;
  pro022ValueHolderMob = 0;

 
    totalValueFunMob();
});

pro033DelMob.addEventListener('click', () => {
  
  pro033DelMob.style.display = 'none';
  pro03Mob.disabled = false;
  pro03Mob.innerText = 'DODAJ U KORPU';
  pro033Mob.disabled = false;
  pro033Mob.innerText = 'DODAJ U KORPU';

  pro033PlusMob.style.display = 'none';
  pro033MinusMob.style.display = 'none';
  pro033QuantityMob.style.display = 'none';
 
  pro033ValueMob.style.display = 'none';
  pro033VarMob.style.display = 'none';
  pro033QuantityMob.value = 1;
  pro033ValueHolderMob = 0;

 
    totalValueFunMob();
});

pro044DelMob.addEventListener('click', () => {
  
  pro044DelMob.style.display = 'none';
  pro04Mob.disabled = false;
  pro04Mob.innerText = 'DODAJ U KORPU';
  pro044Mob.disabled = false;
  pro044Mob.innerText = 'DODAJ U KORPU';
 
  pro044PlusMob.style.display = 'none';
  pro044MinusMob.style.display = 'none';
  pro044QuantityMob.style.display = 'none';
 
  pro044ValueMob.style.display = 'none';
  pro044VarMob.style.display = 'none';
  pro044QuantityMob.value = 1;
  pro044ValueHolderMob = 0;

 
    totalValueFunMob();
});



const contactEnglishBtn = document.querySelector('#contactEnglish');

contactEnglishBtn.addEventListener('click', () => {
    window.location.href = 'https://vex-code-artist.neocities.org/vexSubscribe';
  });



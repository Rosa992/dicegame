var myImages1 = new Array();

myImages1.push("dice1.jpg");
myImages1.push("dice2.jpg");
myImages1.push("dice3.jpg");
myImages1.push("dice4.jpg");
myImages1.push("dice5.jpg");
myImages1.push("dice6.jpg");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstButton() {
  document.dice1.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function secondButton() {
  document.dice2.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}

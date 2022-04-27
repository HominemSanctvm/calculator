const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnAllClear = document.getElementById('btnAllClear'); 
const btnEqual = document.getElementById('btnEqual');
const btnStyle = document.querySelectorAll('.btnStyle');
const outDisplayCalculator = document.getElementById('outDisplayCalculator');
let displayCalculator = '';
let userInputNumbers = ['0','0'];
let index = 0;
let userOperatorChoice = '';
let finishedCalc = false;

function calcSum(a,b) {
	return Number(a) + Number(b);
}

function calcMinus(a,b) {
	return Number(a) - Number(b);
}

function calcMultiply(a, b) {
	return Number(a) * Number(b);
}

function calcDivide(a, b) {
	return Number(a) / Number(b);
}

function operate() {
	switch (userOperatorChoice) {
		case '+':
			displayCalculator = userInputNumbers.reduce(calcSum);
			break;
		case '-':
			displayCalculator = userInputNumbers.reduce(calcMinus);
			break;
		case '*':
			displayCalculator = userInputNumbers.reduce(calcMultiply);
			break;
		case '/':
			displayCalculator = userInputNumbers.reduce(calcDivide);
			break;
	}			
	outDisplayCalculator.textContent = displayCalculator;
	userInputNumbers[0] = '0';
	userInputNumbers[1] = '0';
	index = 0;
	finishedCalc = true;
}

function initialize() {
	outDisplayCalculator.textContent = '0';
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
}

btnNumbers.forEach((button) => {
	button.addEventListener('click', function() {
		if (finishedCalc) {
			displayCalculator = '';
			finishedCalc = false;
		}

		displayCalculator += button.value;
		userInputNumbers[index] += Number(button.value);
		outDisplayCalculator.textContent = displayCalculator;
	});
})

btnOperators.forEach((operator) => {
	operator.addEventListener('click', function() {

		if (finishedCalc) {
			userInputNumbers[0] = Number(displayCalculator);
			finishedCalc = false;
		}

		userOperatorChoice = operator.value;
		index = 1;
		displayCalculator = '';
	});
})

btnStyle.forEach((button) => {
	button.addEventListener('click', function() {
		const beep = new sound('short-beep.wav');
		beep.play();
	});
})

initialize();
btnEqual.addEventListener('click', operate);

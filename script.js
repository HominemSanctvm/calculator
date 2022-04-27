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
	return parseFloat(a) + parseFloat(b);
}

function calcMinus(a,b) {
	return parseFloat(a) - parseFloat(b);
}

function calcMultiply(a, b) {
	return parseFloat(a) * parseFloat(b);
}

function calcDivide(a, b) {
	return parseFloat(a) / parseFloat(b);
}

function passNumber(button) {
	if (finishedCalc) {
		displayCalculator = '';
		finishedCalc = false;
	}

	displayCalculator += button.value;
	userInputNumbers[index] += button.value;
	outDisplayCalculator.textContent = displayCalculator;

}

function passOperator(operator) {
	if (finishedCalc) {
		userInputNumbers[0] = displayCalculator;
		finishedCalc = false;
	}

	userOperatorChoice = operator.value;
	index = 1;
	displayCalculator = '';

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

function clear() {
	
}

function allClear() {
	outDisplayCalculator.textContent = '0';
	displayCalculator = '';
	userInputNumbers[0] = '0';
	userInputNumbers[1] = '0';
	index = 0;
	finishedCalc = false;
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
		passNumber(button);
	});
})

btnOperators.forEach((operator) => {
	operator.addEventListener('click', function() {
		passOperator(operator);
	});
})

btnAllClear.addEventListener('click', allClear);

btnStyle.forEach((button) => {
	button.addEventListener('click', function() {
		const beep = new sound('short-beep.wav');
		beep.play();
	});
})

initialize();
btnEqual.addEventListener('click', operate);

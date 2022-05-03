const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnClear = document.getElementById('btnClear');
const btnAllClear = document.getElementById('btnAllClear'); 
const btnEqual = document.getElementById('btnEqual');
const btnStyle = document.querySelectorAll('.btnStyle');
let displayCalculator = '0';
let userInputNumbers = ['0','0'];
let index = 0;
let userOperatorChoice = '';
let finishedCalc = false;

function display(result) {
	const outDisplayCalculator = document.getElementById('outDisplayCalculator');
	outDisplayCalculator.textContent = result;
}

function calcSum(a,b) {
	return a + b;
}

function calcMinus(a,b) {
	return a - b;
}

function calcMultiply(a, b) {
	return a * b;
}

function calcDivide(a, b) {
	return a / b;
}

function passNumber(button) {
	if (finishedCalc) {
		displayCalculator = '0';
		finishedCalc = false;
	}

	if (displayCalculator.charAt(0) === '0')
 		displayCalculator = displayCalculator.substring(1);

	displayCalculator += button.value;
	display(displayCalculator);

}

function passOperator(operator) {
	if (finishedCalc) {
		userInputNumbers[0] = displayCalculator;
		finishedCalc = false;
	}

	userOperatorChoice = operator.value;
	userInputNumbers[index] = parseFloat(displayCalculator);
	index = 1;
	displayCalculator = '0';

}

function operate() {
	userInputNumbers[index] = parseFloat(displayCalculator);

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
	displayCalculator = displayCalculator.toString();
	display(displayCalculator);
	userInputNumbers[0] = '0';
	userInputNumbers[1] = '0';
	index = 0;
	finishedCalc = true;
}

function clear() {
	displayCalculator = displayCalculator.slice(0, -1);;
	userInputNumbers[index] = parseFloat(displayCalculator);

	if (displayCalculator == '')
		displayCalculator = '0';

	display(displayCalculator);
}

function allClear() {
	displayCalculator = '0';
	userInputNumbers[0] = '0';
	userInputNumbers[1] = '0';
	index = 0;
	finishedCalc = false;
	display(displayCalculator);
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

btnClear.addEventListener('click', clear);

btnAllClear.addEventListener('click', allClear);

btnStyle.forEach((button) => {
	button.addEventListener('click', function() {
		const beep = new sound('short-beep.wav');
		beep.play();
	});
})

btnEqual.addEventListener('click', operate);

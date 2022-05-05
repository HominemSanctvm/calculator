const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnClear = document.getElementById('btnClear');
const btnAllClear = document.getElementById('btnAllClear'); 
const btnEqual = document.getElementById('btnEqual');
const btnStyle = document.querySelectorAll('.btnStyle');
let inputNumbers = ['0','0'];
let index = 0;
let operatorChoice = '';
let finishedCalc = false;

function display(result) {
	const outDisplayCalculator = document.getElementById('outDisplayCalculator');
	outDisplayCalculator.textContent = result;
}

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
		inputNumbers[0] = '0';
		finishedCalc = false;
	}

	const number = button.value;
	inputNumbers[index] += number;
	const result = parseFloat(inputNumbers[index]);

	display(result);

}

function passOperator(operator) {
	if (finishedCalc)
		finishedCalc = false;

	operatorChoice = operator.value;
	index = 1;

}

function operate() {
	if (finishedCalc)
		return;

	let result = 0;

	switch (operatorChoice) {
		case '+':
			result = inputNumbers.reduce(calcSum);
			break;
		case '-':
			result = inputNumbers.reduce(calcMinus);
			break;
		case '*':
			result = inputNumbers.reduce(calcMultiply);
			break;
		case '/':
			result = inputNumbers.reduce(calcDivide);
			break;
	}			

	display(result);
	inputNumbers[0] = result.toString();
	inputNumbers[1] = '0';
	index = 0;
	finishedCalc = true;
}

function clear() {
	inputNumbers[index] = inputNumbers[index].slice(0, -1);;
	if (inputNumbers[index] == '' || isNaN(inputNumbers[index]))
		inputNumbers[index] = '0';

	let result = parseFloat(inputNumbers[index]);

	display(result);
}

function allClear() {
	inputNumbers[0] = '0';
	inputNumbers[1] = '0';
	operatorChoice = '';
	index = 0;
	finishedCalc = false;
	display('0');
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

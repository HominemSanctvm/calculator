const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnClear = document.getElementById('btnClear');
const btnAllClear = document.getElementById('btnAllClear'); 
const btnEqual = document.getElementById('btnEqual');
const btnPercentage = document.getElementById('btnPercentage');
const btnStyle = document.querySelectorAll('.btnStyle');
let numberOnDisplay = '0';
let inputNumbers = [0,0];
let product = 0; // 'result'
let index = 0;
let operatorChoice = '';

function calcDisplay(result) {
	const outDisplayCalculator = document.getElementById('outDisplayCalculator');
	const regex = new RegExp("^0+(?!$)",'g');
	const display = result.replace(regex, '');
	outDisplayCalculator.textContent = display;
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

function calcPercentage() {
	const a = inputNumbers[0];
	const b = inputNumbers[1];
	const result = (b / 100) * a;
	inputNumbers[1] = parseFloat(result);
	operate();

}

function passNumber(button) {
	if (numberOnDisplay.length == 9) {
		return;
	}
	const number = button.value;
	numberOnDisplay += number;
	inputNumbers[index] = parseFloat(numberOnDisplay);
	calcDisplay(numberOnDisplay);
}

function passOperator(operator) {
	if (index == 1) {
		operate();
	
	}
	operatorChoice = operator.value;
	numberOnDisplay = '0';
	
	index = 1;
}

function operate() {
	const a = inputNumbers[0];
	const b = inputNumbers[1];

	switch (operatorChoice) {
		case '+':
			product = calcSum(a, b);
			break;
		case '-':
			product = calcMinus(a,b);
			break;
		case '*':
			product = calcMultiply(a,b);
			break;
		case '/':
			product = calcDivide(a,b);
			break;
		default:
			product = a;
	}			

	numberOnDisplay = product.toString();

	calcDisplay(numberOnDisplay);

	numberOnDisplay = '0';
	inputNumbers[0] = product; 
	inputNumbers[1] = 0;
	index = 0;
}

function clear() {
	numberOnDisplay = numberOnDisplay.slice(0, -1);;

	if (numberOnDisplay == '')
		numberOnDisplay = '0';

	inputNumbers[index] = parseFloat(numberOnDisplay);

	calcDisplay(numberOnDisplay);
}

function allClear() {
	numberOnDisplay = '0';
	product = 0;
	inputNumbers[0] = 0;
	inputNumbers[1] = 0;
	operatorChoice = '';
	index = 0;
	calcDisplay(numberOnDisplay);
}

function playBeep() {
	const beep = document.getElementById('beep');
	beep.play();
}

btnNumbers.forEach((button) => {
	button.addEventListener('click', function() {
		passNumber(button);
	});
})

btnPercentage.addEventListener('click', calcPercentage);

btnOperators.forEach((operator) => {
	operator.addEventListener('click', function() {
		passOperator(operator);
	});
})

btnClear.addEventListener('click', clear);

btnAllClear.addEventListener('click', allClear);

btnStyle.forEach((button) => {
	button.addEventListener('click', function() {
		playBeep();	
	});
})
calcDisplay(numberOnDisplay);
btnEqual.addEventListener('click', operate);

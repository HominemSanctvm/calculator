const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnClear = document.getElementById('btnClear');
const btnCancelEntry = document.getElementById('btnCancelEntry'); 
const btnEqual = document.getElementById('btnEqual');
const btnPercentage = document.getElementById('btnPercentage');
const btnStyle = document.querySelectorAll('.btnStyle');
const btnDot = document.getElementById('btnDot');
let lockedDot = false;
let numberOnDisplay = '0';
let inputNumbers = [0,0];
let product = 0; // 'result'
let index = 0;
let operatorChoice = '';

function calcDisplay(result) {
	const outDisplayCalculator = document.getElementById('outDisplayCalculator');
	const regex = new RegExp("^0+(?!$)",'g');
	const display = result.replace(regex, '');

	if(result.length > 11)
		outDisplayCalculator.textContent = 'E' + display;
	else
		outDisplayCalculator.textContent = display;
}

function calcPercentage() {
	const a = parseFloat(inputNumbers[0]);
	const b = parseFloat(inputNumbers[1]);
	let result = parseFloat(b / 100);
	switch (operatorChoice) {
		case '+':
			result = result * a;
			break;
		case '-':
			result = result * a;
			break;
		default:
			break;
	}

	inputNumbers[1] = parseFloat(result);
	operate();

}

function passNumber(button) {
	if (numberOnDisplay.length == 10) {
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
	lockedDot = false;
	
	index = 1;
}

function operate() {
	const a = inputNumbers[0];
	const b = inputNumbers[1];

	switch (operatorChoice) {
		case '+':
			product = a + b;
			break;
		case '-':
			product = a - b;
			break;
		case '*':
			product = a * b;
			break;
		case '/':
			product = a / b;
			break;
		default:
			product = a;
	}			

	numberOnDisplay = product.toString();

	calcDisplay(numberOnDisplay);

	numberOnDisplay = '0';
	inputNumbers[0] = product; 
	inputNumbers[1] = 0;
	lockedDot = false;
	index = 0;
}

function cancelEntry() {
	numberOnDisplay = '0';
	lockedDot = false;

	inputNumbers[index] = parseFloat(numberOnDisplay);

	calcDisplay(numberOnDisplay);
}

function clear() {
	numberOnDisplay = '0';
	product = 0;
	inputNumbers[0] = 0;
	inputNumbers[1] = 0;
	operatorChoice = '';
	index = 0;
	lockedDot = false;
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

btnCancelEntry.addEventListener('click', cancelEntry);

btnClear.addEventListener('click', clear);

btnStyle.forEach((button) => {
	button.addEventListener('click', function() {
		playBeep();	
	});
})

btnDot.addEventListener('click', function() {
	if (lockedDot)
		return;
	else {
		passNumber(btnDot);
		lockedDot = true;
	}
})


btnEqual.addEventListener('click', operate);

calcDisplay(numberOnDisplay);

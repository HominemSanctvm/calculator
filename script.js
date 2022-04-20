const btnCalc = document.querySelectorAll('.btnCalc');
const btnAllClear = document.getElementById('btnAllClear'); 
const equalOperator = document.getElementById('equalOperator');
let firstNumber = 0;
let secondNumber = 0;

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

function calcAllClear() {
	inDisplay.value = '';
	outDisplay.value = '';
	firstNumber = 0;
	secondNumber = 0;
}

function disassembly(displayRaw) {
	const indexOfOperator = displayRaw.search(/\D/);
	return indexOfOperator;
}

function operate() {
	const inDisplay = document.getElementById('inDisplay');
	const outDisplay = document.getElementById('outDisplay');
	const userInput = inDisplay.value;
	
	const indexOfOperator = disassembly(userInput);
	const operator = userInput.charAt(indexOfOperator);

	firstNumber = parseInt(userInput.slice(0, indexOfOperator));
	secondNumber = parseInt(userInput.slice(indexOfOperator+1));
	
	switch (operator) {
		case '+':
			outDisplay.value = calcSum(firstNumber, secondNumber);
			break;
		case '-':
			outDisplay.value = calcMinus(firstNumber, secondNumber);
			break;
		case '*':
			outDisplay.value = calcMultiply(firstNumber, secondNumber);
			break;
		case '/':
			outDisplay.value = calcDivide(firstNumber, secondNumber);
			break;
	}
}

for (const button of btnCalc) {
	button.addEventListener('click', function() {
		inDisplay.value += button.value;
	});
}

btnAllClear.addEventListener('click', calcAllClear);
equalOperator.addEventListener('click', operate);

const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnAC = document.getElementById('btnAC'); 
const inOperation = document.getElementById('inOperation');
const outResults = document.getElementById('outResults');
const equalOperator = document.getElementById('equalOperator');
let firstNumber = 0;
let SecondNumber = 10;
let choosedOperator = '';

function calcSum(a,b) {
	return a + b;
};

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
	inOperation.value = '';
	outResults.value = 0;
}

function operate() {
//	switch (choosedOperator) {
//		case '+':
//			outResults.value = calcSum(firstNumber, SecondNumber);
//			inOperation.value = '';
//			break;
//		case '-':
//			outResults.value = calcMinus(firstNumber, SecondNumber);
//			inOperation.value = '';
//			break;
//		case 'X':
//			outResults.value = calcMultiply(firstNumber, SecondNumber);
//			inOperation.value = '';
//			break;
//		case '/':
//			outResults.value = calcDivide(firstNumber, SecondNumber);
//			inOperation.value = '';
//			break;
//	}
}

for (const button of btnNumbers) {
	button.addEventListener('click', function() {
		inOperation.value += button.value;
	});
};

for (const operators of btnOperators) {
	operators.addEventListener('click', function() {
//		firstNumber = parseInt(inOperation.value);
//		choosedOperator = operators.value;
//		inOperation.value += operators.value;
	});
};

btnAC.addEventListener('click', calcAllClear);
equalOperator.addEventListener('click', operate);

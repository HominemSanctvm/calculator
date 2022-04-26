const outDisplay = document.getElementById('outDisplay');
const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const btnAllClear = document.getElementById('btnAllClear'); 
const btnEqual = document.getElementById('btnEqual');
let displayNumber = '';
let userInputNumbers = [];
let operatorChoice = '';

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

function operate() {
	userInputNumbers.push(Number(outDisplay.value));
	for (let i = 0; i < userInputNumbers.length; i++) {
		alert(userInputNumbers[i]);}
//	switch (operatorChoice) {
	//	case '+':
	//	case '-':
	//	case '*':
	//	case '/':
	//}			
}

function display(something) {
	const outDisplay = document.getElementById('outDisplay');
	outDisplay.value = displayNumber;
}

btnNumbers.forEach((button) => {
	button.addEventListener('click', function() {
		displayNumber += button.value;
		display(displayNumber);
	});
})

btnOperators.forEach((operator) => {
	operator.addEventListener('click', function() {
		operatorChoice = operator.value;
		userInputNumbers.push(Number(outDisplay.value));
		displayNumber = '';
	});
})

btnEqual.addEventListener('click', operate);

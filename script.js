const btnNumbers = document.querySelectorAll('.btnNumbers');
const btnOperators = document.querySelectorAll('.btnOperators');
const outResults = document.getElementById('outResults');

btnNumbers.forEach((element)=> {
	element.addEventListener('click', function() {
		outResults.textContent += element.value;
	});
});

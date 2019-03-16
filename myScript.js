


function add(num1, num2) {
	return num1 + num2;
};


function subtract(num1, num2) {
	return num1 - num2;
};


function multiply(num1, num2) {
	return num1 * num2;
};


function divide(num1, num2) {
	if (num1 == 0 || num2 == 0) {
		confirm("Cannot divide by 0");
		return 0;
	}
	return num1 / num2;
}


function operate(operator, num1, num2) {
	let value = (operator == "+") ? add(num1, num2)
		: (operator == " -") ? divide(num1, num2)
		: (operator == "*") ? multiply(num1, num2)
		: divide(num1, num2);

	return (value % 1 == 0) ? value
		: value.toFixed(2);
}


let displayValue = "";


const operators = ["+", "-", "*", "/"];

let operator;
let lastInp;
let valueA;
let aLength;

let valueB;
let equal = true;


function calculator(e) {
	
	if (e.target !== e.currentTarget) {

		if (displayValue.length > 14) {
			confirm("Too many numbers for the display!")
			displayValue = displayValue.slice(0, 13)
		}
		

		clickedItem = e.target.id;
		if (Number(clickedItem) || clickedItem == "0") {
			displayValue += clickedItem;
		} else if (clickedItem == "del" && displayValue) {;
			lastInp = displayValue.slice(0, -1);
			if (lastInp == '-' || lastInp == "+" || lastInp == "/" || lastInp == "*") { // if deleting operator, reset operator
				operator = "";
				valueA;
				aLength;
				console.log("OPERATOR RESET")
			}
			displayValue = displayValue.substring(0, displayValue.length -1)
		} else if (operators.includes(clickedItem)) {
			equal = true;
			calcButton(clickedItem);
		} else if (clickedItem == "equal" && valueA && displayValue.length > aLength+1 && equal) {
			equal = false;
			valueB = Number(displayValue.substring(aLength+1));
			displayValue = operate(operator, valueA, valueB).toString();
			valueA = displayValue;
			operator = "";
		} else if (clickedItem == "clear") {
			equal = true;
			displayValue = "";
			valueA;
			aLength;;
			operator = "";
		}
	}
	e.stopPropagation();


	document.getElementById("display-value").innerHTML = displayValue;
	
};



function calcButton(button) {
	if (operator) {
		console.log("error, operator already decided.");
	} else {
		valueA = (Number(displayValue));
		displayValue = displayValue.toString();
		aLength = displayValue.length;;
		operator = button;
		displayValue += button;
	}
}






document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("calculator").addEventListener("click", calculator, false);

	
    
}, false);


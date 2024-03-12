
let num1 = '';
let num2 = '';
let operator = '';
function add (num1,num2) {
    return(num1 + num2);
}
function subtract (num1,num2) {
    return(num1 - num2);
}
function multiply (num1,num2) {
    return(num1 * num2);
}
function divide (num1,num2) {
    return num1 / num2;
}


function operate() {
    const display = document.getElementById("result");

    if (num1 !== '' && operator !== '') {
        num2 = display.value;

        switch (operator) {
            case '+':
                display.value = add(parseFloat(num1), parseFloat(num2));
                break;
            case '-':
                display.value = subtract(parseFloat(num1), parseFloat(num2));
                break;
            case '*':
                display.value = multiply(parseFloat(num1), parseFloat(num2));
                break;
            case '/':
                display.value = divide(parseFloat(num1), parseFloat(num2));
                break;
        }

        
        num1 = '';
        num2 = '';
        operator = '';
    }
}


function appendNumber(number) {
    const display = document.getElementById("result");
    display.value += number;
}
function showOperator(text) {
    const display = document.getElementById("result");
    const lastChar = display.value.slice(-1);

    if (isNaN(lastChar) && lastChar !== ".") {
        return;
    }

    // Check if an operator is already set
    if (operator !== '') {
        operate(); // Perform the operation if there's an existing operator
    }

    num1 = display.value; // Set the first operand
    operator = text;
    display.value += text;
}

function clearDisplay () {
    const display = document.getElementById("result");
    display.value ="" ;
}

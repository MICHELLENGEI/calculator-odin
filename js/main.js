
function addition(a, b) {
    let c = a + b;
    return c;
}
function subtraction(a, b) {
    let c = a - b;
    return c;
}
function multiplication(a, b) {
    let c = a * b;
    return c;
}
function division(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '*':
            return multiplication(a, b);
        case '/':
            return division(a, b);
        default:
            return "Invalid operator";
    }

}
let displayValue = "";

function addToDisplay(digit) {
    displayValue += digit;
    updateDisplay();

}
function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function() {
        addToDisplay(button.textContent);
    });
});
document.querySelector('.ac').addEventListener('click', function() {
    displayValue = "";
    updateDisplay();
});


document.querySelector('.equals').addEventListener('click', function() {
   
    let expression = displayValue.match(/(-?\d+\.?\d*)([+\-*\/])(-?\d+\.?\d*)/);
    if (expression) {
        let a = parseFloat(expression[1]);
        let operator = expression[2];
        let b = parseFloat(expression[3]);
        
        
        let result = operate(operator, a, b);
        
        
        displayValue = result.toString();
        updateDisplay();
    }
});



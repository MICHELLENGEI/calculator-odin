
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

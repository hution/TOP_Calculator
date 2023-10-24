function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(operator, val1, val2) {
    switch (operator) {
        case "+":
            return add(val1,val2);
            break;
        case "-":
            return subtract(val1,val2);
            break;
        case "*":
            return multiply(val1,val2);
            break;
        case "/":
            return divide(val1,val2);
            break;
    }

}

console.log(operate("+",10,31));
console.log(operate("-",10,31));
console.log(operate("*",10,31));
console.log(operate("/",10,31));
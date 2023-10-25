const body = document.querySelector("body");
const bodyContainer = document.querySelector("#container");

createCalculator();

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

function createCalculator(){
    //Create the buttons for 0-9, +, -, *,/,clear,=

    for(i=0;i<4;i++){
        const divRowContainer = document.createElement('div');
        divRowContainer.setAttribute('id','divRowContainer');
        bodyContainer.appendChild(divRowContainer);
        
        for(j=0;j<4;j++){
            const div = document.createElement('button');
            div.setAttribute('id','calcButton');
            divRowContainer.appendChild(div);    
        }
    }

}

console.log(operate("+",10,31));
console.log(operate("-",10,31));
console.log(operate("*",10,31));
console.log(operate("/",10,31));
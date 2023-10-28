const body = document.querySelector("body");

const bodyContainer = document.querySelector("#container");
bodyContainer.setAttribute('id','bodyContainer');

let buttonInfo = [
    {textContent:"CLR",operator:"CLR"},
    {textContent:" ",operator:""},
    {textContent:"<-",operator:"BCK"},
    {textContent:"/",operator:"/"},
    {textContent:"7",operator:"digit"},
    {textContent:"8",operator:"digit"},
    {textContent:"9",operator:"digit"},
    {textContent:"*",operator:"*"},
    {textContent:"4",operator:"digit"},
    {textContent:"5",operator:"digit"},
    {textContent:"6",operator:"digit"},
    {textContent:"-",operator:"-"},
    {textContent:"1",operator:"digit"},
    {textContent:"2",operator:"digit"},
    {textContent:"3",operator:"digit"},
    {textContent:"+",operator:"+"},
    {textContent:" ",operator:""},
    {textContent:"0",operator:"digit"},
    {textContent:" ",operator:""},
    {textContent:"=",operator:"="},
]

createCalculator();

function add(num1,num2){
    return Number(num1) + Number(num2);
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
    //Create the Display Bar
    const divDisplayBar = document.createElement('div');
    divDisplayBar.setAttribute('id','divDisplayBar');
    bodyContainer.appendChild(divDisplayBar)




    //Create the buttons for 0-9, +, -, *,/,clear,=

    for(i=0;i<5;i++){
        const divRowContainer = document.createElement('div');
        divRowContainer.setAttribute('id','divRowContainer');
        bodyContainer.appendChild(divRowContainer);
        
        for(j=0;j<4;j++){
            const div = document.createElement('button');
            div.setAttribute('class','calcButton');
            // div.setAttribute('id',buttonInfo[j+(i*4)].idVal;);
            div.textContent=buttonInfo[j+(i*4)].textContent;

            divRowContainer.appendChild(div);    
        }
    }

}
function getCurrentDisplay(){
    return document.getElementById('divDisplayBar').textContent;
}

function updateDisplay(newVal){
    let currentValue = getCurrentDisplay();
    divDisplayBar.textContent=currentValue+newVal;

}

function clearDisplay(){
    divDisplayBar.textContent="";
}

function backSpace(){
    let currentValue = getCurrentDisplay().trimEnd();
    divDisplayBar.textContent=currentValue.slice(0,-1);
}

function finalCalc(val){
    clearDisplay();
    updateDisplay(val);
}

function getProblemBefore(location, problem){

    return problem.slice(0,location-1);

}

function getProblemAfter(location,problem){
    return problem.slice(location+1)
}

function startCalculation(){
    let problem = getCurrentDisplay().split(' ');
    currentTotal=0
    console.log(problem);
    let problemBefore = {};
    let problemAfter = {};

    if (problem.length <= 3){
        if(problem.includes('*')){
            let loc = problem.findIndex((x) => x == '*');
            currentTotal = multiply(problem[loc-1],problem[loc+1]);
            finalCalc(currentTotal);
        }
        else if(problem.includes('/')){
            let loc = problem.findIndex((x) => x == '/');
            currentTotal = divide(problem[loc-1],problem[loc+1]);
            finalCalc(currentTotal);
        }
        else if(problem.includes('+')){
            let loc = problem.findIndex((x) => x == '+');
            currentTotal = add(problem[loc-1],problem[loc+1]);
            finalCalc(currentTotal);
        }
        else if(problem.includes('-')){
            let loc = problem.findIndex((x) => x == '-');
            currentTotal = subtract(problem[loc-1],problem[loc+1]);
            finalCalc(currentTotal);
        }
    }
    else {
        if(problem.includes('*')){
            let loc = problem.findIndex((x) => x == '*');
            currentTotal = multiply(problem[loc-1],problem[loc+1]);
            problemBefore = getProblemBefore(loc,problem);
            problemAfter = getProblemAfter(loc,problem); 
            problem[loc-1] = currentTotal;
            let newProblem = problemBefore + currentTotal + problemAfter;
            //can't have + in the array?
            console.log(currentTotal);
            console.log(newProblem);
            finalCalc(newProblem)
        }
    }

    

}

const buttonList = document.querySelectorAll('.calcButton');
buttonList.forEach((button) => {
    button.addEventListener('click', function (e) {
        switch(e.target.textContent){
            case "1":
                updateDisplay(e.target.textContent);
                break;
            case "2":
                updateDisplay(e.target.textContent);
                break;
            case "3":
                updateDisplay(e.target.textContent);
                break;
            case "4":
                updateDisplay(e.target.textContent);
                break;
            case "5":
                updateDisplay(e.target.textContent);
                break;
            case "6":
                updateDisplay(e.target.textContent);
                break;
            case "7":
                updateDisplay(e.target.textContent);
                break;
            case "8":
                updateDisplay(e.target.textContent);
                break;
            case "9":
                updateDisplay(e.target.textContent);
                break;
            case "0":
                updateDisplay(e.target.textContent);
                break;
            case "+":
                updateDisplay(" " + e.target.textContent+ " ");
                break;
            case "-":
                updateDisplay(" " + e.target.textContent+ " ");
                break;
            case "/":
                updateDisplay(" " + e.target.textContent+ " ");
                break;
            case "*":
                updateDisplay(" " + e.target.textContent+ " ");
                break;
            case "=":
                startCalculation();
                break;
            case "<-":
                backSpace();
                break;
            case "CLR":
                clearDisplay();
                break;  
            default:
                console.log("reached default in click event")
                break;
        }
    });

});
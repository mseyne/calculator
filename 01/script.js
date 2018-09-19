let result = document.getElementById("display");
const buttons = document.getElementsByClassName("btn");
let formula = "0";

// Erase formula and clear the result display
function reset(){
    formula = "0";
    displayResult()
}

// Button clicked with an action to update formula
function updateFormula(val){
    if (formula === "error") formula = "0";
    if (formula === "0") formula = "";
    if (val !== '.' || formula.charAt(formula.length - 1) !== ".") {
        formula += val;
    }
    displayResult();
}

// evaluate formula and display result
function updateResult() {
    if (formula === "0") formula = "";
    try {
        formula = eval(formula);
    } catch (error) {
        formula = "error";
    }
    displayResult();
}

function displayResult() {
    result.innerHTML = formula;
}

function start(){
    for (var btn of buttons) {
        btn.addEventListener("click", function() {
            let value = this.getAttribute("value");
            if (value === 'clear') {
                reset();
            } else if ( value === '=' ) {
                updateResult();
            } else if (this.classList.contains("setNB")){
                updateFormula(value);
            };
        });
    }
}

start();
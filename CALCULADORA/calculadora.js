let displayValue = '';
   
function appendNumber(number){
    displayValue +=number;
    updateDisplay();
}

function setOperador(operador){
    displayValue +=operador;
    updateDisplay();
}
function Calcular(){
    try{
        displayValue = eval(displayValue);
        updateDisplay();

    }catch (error){displayValue = 'Error';
    updateDisplay()
    }
}
function ClearDisplay(){
    displayValue = '';
    updateDisplay();

}
function appendDecimal(){
    if (!displayValue.includes('.')){
        displayValue += '.';
        updateDisplay();
        
    }
}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}
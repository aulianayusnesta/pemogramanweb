document.addEventListener('DOMContentLoaded', function () {
    let currentInput = '0';
    let display = document.getElementById('display');
    let lastOperator = '';  

    
    function appendNumber(number) {
        if (currentInput === '0' || display.innerText === 'Error') {
            currentInput = number.toString();
        } else {
            currentInput += number;
        }
        display.innerText = currentInput;
        lastOperator = '';  
    }

   
    function appendOperator(operator) {
        
        if (lastOperator !== '') {
            currentInput = currentInput.slice(0, -1) + operator;  
        } else {
            currentInput += operator;
        }
        display.innerText = currentInput;
        lastOperator = operator;
    }

   
    function clearDisplay() {
        currentInput = '0';
        display.innerText = currentInput;
        lastOperator = '';  
    }

    
    function toggleSign() {
        if (currentInput !== '0') {
            if (currentInput.startsWith('-')) {
                currentInput = currentInput.substring(1);
            } else {
                currentInput = '-' + currentInput;
            }
            display.innerText = currentInput;
        }
    }

   
    function calculate() {
        try {
            currentInput = eval(currentInput).toString();  
            display.innerText = currentInput;
            lastOperator = '';  
        } catch (error) {
            display.innerText = 'Error';
            currentInput = '';  
        }
    }

  
    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.clearDisplay = clearDisplay;
    window.toggleSign = toggleSign;
    window.calculate = calculate;
});

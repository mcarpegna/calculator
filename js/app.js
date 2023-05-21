let finalNum = '';
let firstNum = '';
let secondNum = '';
let operator = '';
let isOperatorSelected = false;
let isResultObtained = false;

const display = document.querySelector('.display');

const miniDisplay = document.querySelector('.mini-display');


const keys = document.querySelectorAll('.key');
keys.forEach(key => {

    key.addEventListener('click', () => {

        if (key.classList.contains('number')) {
            const selectedNum = key.dataset.value;

            if (selectedNum === '.' && finalNum.includes('.') || selectedNum === '.' && finalNum === '') {
                // Do not allow another dot to be entered if there is already one in the current number
                // Do not allow the first digit to be a dot
            } else {
                finalNum += selectedNum;
                display.value = finalNum;
                if (!isOperatorSelected) {
                    firstNum = finalNum;
                } else {
                    secondNum = finalNum;
                    display.value = firstNum + operator + secondNum;
                }
            }
        };

        if (key.classList.contains('operator')) {
            if (firstNum !== '') {
                operator = key.dataset.value;
                isOperatorSelected = true;
                display.value = firstNum + operator;
                finalNum = '';
            }
        };

        if (key.classList.contains('delete')) {
            if (!isResultObtained) {
                if (secondNum !== '') {
                    secondNum = secondNum.slice(0, -1);
                    finalNum = secondNum;
                    display.value = firstNum + operator + secondNum;
                } else if (operator !== '') {
                    operator = '';
                    isOperatorSelected = false;
                    display.value = firstNum;
                } else if (firstNum !== '') {
                    firstNum = firstNum.slice(0, -1);
                    finalNum = firstNum;
                    display.value = firstNum;
                }
            }
        }

        if (key.classList.contains('equal')) {
            if (firstNum !== '' && secondNum !== '' && operator !== '') {
                let result = operate(firstNum, secondNum, operator);
                display.value = result;
                miniDisplay.textContent = firstNum + operator + secondNum;
                selectedNum = '';
                finalNum = '';
                firstNum = result;
                secondNum = '';
                operator = '';
                isOperatorSelected = false;
                isResultObtained = true;
            }
        };

        if (key.classList.contains('clear')) {
            selectedNum = '';
            finalNum = '';
            firstNum = '';
            secondNum = '';
            operator = '';
            isOperatorSelected = false;
            isResultObtained = true;
            display.value = '';
            miniDisplay.textContent = '';
        }
    });
});


function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case 'x':
            return multiply(firstNum, secondNum);
        case '÷':
            return divide(firstNum, secondNum);
        case '^':
            return power(firstNum, secondNum);
    }
}


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (parseFloat(b) === 0) {
        return "Error!";
    } else {
        return parseFloat(a) / parseFloat(b);
    }
}

function power(a, b) {
    return Math.pow(parseFloat(a), parseFloat(b));
}
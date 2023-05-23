let finalNum = '';
let firstNum = '0';
let secondNum = '';
let operator = '';
let isOperatorSelected = false;
let isResultObtained = false;

// Displays
const display = document.querySelector('.display');
const miniDisplay = document.querySelector('.mini-display');

// Do calculator work with clicks
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {

        key.classList.add('key-animation');

        if (key.classList.contains('number')) {
            const selectedNum = key.dataset.value;

            if (selectedNum === '.' && finalNum.includes('.') || selectedNum === '.' && finalNum === '') {

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
                if (operator === '/') {
                    display.value = firstNum + "÷";
                };
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
            firstNum = '0';
            secondNum = '';
            operator = '';
            isOperatorSelected = false;
            isResultObtained = true;
            display.value = '';
            miniDisplay.textContent = '';
        }

        setTimeout(() => {
            key.classList.remove('key-animation');
        }, 100);
    });
});

// Do calculator work with keyboard
window.onkeydown = function (e) {
    let keyInUse = e.key;
    let chosenKey;
    switch (keyInUse) {
        case '1':
            chosenKey = document.querySelector('[data-value="1"]');
            chosenKey.click();
            break;
        case '2':
            chosenKey = document.querySelector('[data-value="2"]');
            chosenKey.click();
            break;
        case '3':
            chosenKey = document.querySelector('[data-value="3"]');
            chosenKey.click();
            break;
        case '4':
            chosenKey = document.querySelector('[data-value="4"]');
            chosenKey.click();
            break;
        case '5':
            chosenKey = document.querySelector('[data-value="5"]');
            chosenKey.click();
            break;
        case '6':
            chosenKey = document.querySelector('[data-value="6"]');
            chosenKey.click();
            break;
        case '7':
            chosenKey = document.querySelector('[data-value="7"]');
            chosenKey.click();
            break;
        case '8':
            chosenKey = document.querySelector('[data-value="8"]');
            chosenKey.click();
            break;
        case '9':
            chosenKey = document.querySelector('[data-value="9"]');
            chosenKey.click();
            break;
        case '0':
            chosenKey = document.querySelector('[data-value="0"]');
            chosenKey.click();
            break;
        case '.':
            chosenKey = document.querySelector('[data-value="."]');
            chosenKey.click();
            break;
        case '+':
            chosenKey = document.querySelector('[data-value="+"]');
            chosenKey.click();
            break;
        case '-':
            chosenKey = document.querySelector('[data-value="-"]');
            chosenKey.click();
            break;
        case '*':
            chosenKey = document.querySelector('[data-value="x"]');
            chosenKey.click();
            break;
        case '/':
            chosenKey = document.querySelector('[data-value="/"]');
            chosenKey.click();
            break;
        case '^':
            chosenKey = document.querySelector('[data-value="^"]');
            chosenKey.click();
            break;
        case 'Delete':
            chosenKey = document.querySelector('[data-value="ac"]');
            chosenKey.click();
            break;
        case 'Backspace':
            chosenKey = document.querySelector('[data-value="del"]');
            chosenKey.click();
            break;
        case 'Enter':
            chosenKey = document.querySelector('[data-value="="]');
            chosenKey.click();
            break;
        default:
            break;
    }

    if (chosenKey) {
        chosenKey.classList.add('key-animation');
        setTimeout(() => {
            chosenKey.classList.remove('key-animation');
        }, 100);
    }
};

// Calculate
function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case 'x':
            return multiply(firstNum, secondNum);
        case '/':
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
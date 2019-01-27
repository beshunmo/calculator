const numbers = document.querySelectorAll('.number');
const orations = document.querySelectorAll('.opearion');
const dot = document.querySelector('.dot');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('#screen');
console.log(numbers);

let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryOperation = '';

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', (e) => {
        pressNumber(e.target.innerText);
        console.log('Клавиша с цифрой');
    })
}

for (let i = 0; i < orations.length; i++) {
    let operation = orations[i];
    operation.addEventListener('click', (e) => {
        pressOperation(e.target.innerText);
    })
}

dot.addEventListener('click', pressDot);
clearBtn.addEventListener('click', clear);

function pressNumber(num) {
    if (memoryNewNumber) {
        display.innerText = num;
        memoryNewNumber = false;
    } else {
        if (display.innerText === '0') {
            display.innerText = num;
        } else {
            display.innerText += num;
        }
    }
}

function pressOperation(operation) {
    let localMemoryOperatin = display.innerText;

    if (memoryNewNumber && memoryOperation !== '=') {
        display.innerText = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (memoryOperation === '+') {
            memoryCurrentNumber += parseFloat(localMemoryOperatin);
        } else if (memoryOperation === '-') {
            memoryCurrentNumber -= parseFloat(localMemoryOperatin);
        } else if (memoryOperation === '*') {
            memoryCurrentNumber *= parseFloat(localMemoryOperatin);
        } else if (memoryOperation === '/') {
            memoryCurrentNumber /= parseFloat(localMemoryOperatin);
        } else {
            memoryCurrentNumber = parseFloat(localMemoryOperatin);
        }
        memoryOperation = operation;

        display.innerText = memoryCurrentNumber;
    }
}

function clear() {
    display.innerText = '0';
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryNewNumber = '';
}

function pressDot() {
    let localMemmoryDot = display.innerText;
    if (memoryNewNumber) {
        localMemmoryDot = '0.';
        memoryNewNumber = false;
    } else {
        if (localMemmoryDot.indexOf('.') === -1) {
            localMemmoryDot += '.';
        }
    }
    display.innerText = localMemmoryDot;
}
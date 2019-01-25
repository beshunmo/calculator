let entryField = document.getElementById('Screen');
let signs = document.querySelector('.signs');

function resolve(str) {
    let elements = str.split(' ');
    var resolved = 0;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === '+') {
            resolved += (+elements[i + 1]);
            i++;
        } else if (elements[i] === '-') {
            resolved -= (+elements[i + 1]);
            i++;
        } else if (elements[i] === '*') {
            resolved *= (+elements[i + 1]);
            i++;
        } else if (elements[i] === '/') {
            resolved /= (+elements[i + 1]);
            i++;
        } else {
            resolved += (+elements[i]);
        }
    }

    return resolved;
}

function getExample() {
    let example = '';
    let number = ''
    let currentSign = '';
    let dot = '';
    let a = '';

    signs.addEventListener('click', (e) => {
        let sign = e.target.innerText;

        if (!isNaN(sign)) {
            console.log('in');

            number += sign;
            //currentSign = '';                    
        } else if (sign === '.') {
            if (dot === '.') {
                number += '';
                dot = '.';
            } else {
                number += sign;
                dot = '.';
            }
        }

        entryField.innerText = number;

        example += number[number.length-1];
        console.log(example);
        console.log(number);


        if ((sign === '+') || (sign === '-') || (sign === '*') || (sign === '/')) {
            if ((currentSign === '+') || (currentSign === '-') || (currentSign === '*') || (currentSign === '/')) {
                example += '';
            }         
        

            //entryField.innerText = ;
            example += ` ${sign}`;

            number = '';

            console.log('dasdas', example);

            
            currentSign = sign; 
        }

        if (sign === 'C') {
            entryField.innerText = 0;
            number = 0;
        }

        if (sign === '=') {
            resolve(getExample());
        }
    })

    return example;
}

getExample();
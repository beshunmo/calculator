let entryField = document.querySelector('.');
let signs = document.querySelector('.');

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
    let example = [];

    signs.addEventListener('click', (e) => {
        let sign = e.target.value;

        let number = ''
        let currentSign = '';

        if (typeof (+sign) === 'number') {
            entryField.innerText = sign;

            if (sign === '.') {
                entryField.innerText = `${number}${sign}`;
                number += sign;
            }
            number += sign;
            currentSign = '';
        } 

        example.push(number);

        if ((sign === '+') || (sign === '-') || (sign === '*') || (sign === '/')) {
            example.push(sign);
            if ((currentSign === '+') || (currentSign === '-') || (currentSign === '*') || (currentSign === '/')) {
                exapmle.pop();
                example.push(currentSign);
            }
            currentSign = sign; 
        }

        if (sign === 'C') {
            entryField.innerText = 0;
        }

        if (sign === '=') {
            resolve(getExample());
        }
    })

    return example.join(' ');
}


const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    const morseArr = [];

    while(expr !== '') {
        morseArr.push(toMorse(expr.substring(0, 10)));
        expr = expr.substring(10);
    }

    let decodedExpr = '';

    morseArr.forEach(function(item) {
        decodedExpr += fromMorse(item);
    })

    return decodedExpr;
    
}

function fromMorse (item) {
    for(let code in MORSE_TABLE) {
        if(code === item){
            return MORSE_TABLE[code];
        }
        else if (item === ' ')
            return ' ';
        }
}


function toMorse (item) {
    let letter = '';
        for(let i = 0; i < item.length; i++) {
            if(item[i] === '0') {
                i++;
            }
            else if(item[i] === '1' && item[i + 1] === '0') {
                letter += '.';
                i++;
            }
            else if(item[i] === '1' && item[i + 1] === '1') {
                letter += '-';
                i++;
            }
            else if(item[i] === '*') {
                return ' ';
            }          
        }
    return letter;
}

module.exports = {
    decode
}


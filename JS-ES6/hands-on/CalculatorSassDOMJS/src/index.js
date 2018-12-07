
// Calculates the result based on operands and operator provided as arguments

function consoleCalculator(operator = '+', operand1 = 0, operand2 = 0) {
    let result = 0;
    const floatOperand1 = parseFloat(operand1, 10);
    const floatOperand2 = parseFloat(operand2, 10);
    // return if arguments are not number convertable
    if(isNaN(floatOperand1) || isNaN(floatOperand2)) {
        console.log('arguments are not proper');
        return;
    }
    //if(typeof operand1 !== 'number' || typeof operand2 !== 'number') {
    //    console.log('arguments are not proper');
     //   return;
    //}
    switch (operator) {
        case '+':
            result = floatOperand1 + floatOperand2;
            break;
        case '-':
            result = floatOperand1 - floatOperand2;
            break;
        case '*':
            result = floatOperand1 * floatOperand2;
            break;
        case '/':
            result = floatOperand1 / floatOperand2;
            break;
        case '%':
            result = floatOperand1 % floatOperand2;
            break;
        case '**':
            result = floatOperand1 ** floatOperand2;
            break;
        default:
            break;
    }
    return result;
}
console.log('API example: consoleCalculator("+", 10, 20)');
console.log(consoleCalculator('+', 10, 20));
console.log(consoleCalculator('-', 10, 20));
console.log(consoleCalculator('*', 10, 20));
console.log(consoleCalculator('/', 10, 20));
console.log(consoleCalculator('%', 10, 20));
console.log(consoleCalculator('**', 10, 20));
console.log(consoleCalculator('**', 'asd', 20));

const inputField = document.getElementById('inputField');
let selectedOperator = null;
let operand1 = 0;
let operand2 = null;
let clearInput = false;
document.getElementsByClassName('numpad')[0].addEventListener('click', function(e) {
    const text = e.target.innerHTML;
    console.log(text);
    let inputValue = inputField.value;
    const operators = ['+', '-', '*', '/', '%'];
    if(operators.indexOf(text) > -1) {
        selectedOperator = text;
        inputField.value = inputValue + text;
        clearInput = false;
    }
    else {
        if(text === '0' && inputValue === '0') {
            return;
        }
        else if(text === '=') {
            const result = consoleCalculator(selectedOperator, parseFloat(operand1), parseFloat(operand2));
            inputField.value = result;
            selectedOperator = null;
            clearInput = true;
            operand1 = result;
            operand2 = null;
        }
        else {
            if(clearInput) {
                clearInput = false;
                inputField.value = text;
                inputValue = text;
            }
            else {
                inputField.value = (inputValue === "0" ? '' : inputValue) + text;
            }
            if(selectedOperator) {
                operand2 = inputField.value.substring(inputField.value.indexOf(selectedOperator) + 1);
            }
            else {
                operand1 = inputField.value;
            }
        }
    }
})
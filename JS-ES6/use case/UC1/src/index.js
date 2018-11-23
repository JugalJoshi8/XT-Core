
// Calculates the result based on operands and operator provided as arguments

function consoleCalculator(operator = '+', operand1 = 0, operand2 = 0) {
    let result = 0;
    const intOperand1 = parseInt(operand1, 10);
    const intOperand2 = parseInt(operand2, 10);
    // return if arguments are not number convertable
    if(isNaN(intOperand1) || isNaN(intOperand2)) {
        console.log('arguments are not proper');
        return;
    }
    //if(typeof operand1 !== 'number' || typeof operand2 !== 'number') {
    //    console.log('arguments are not proper');
     //   return;
    //}
    switch (operator) {
        case '+':
            result = intOperand1 + intOperand2;
            break;
        case '-':
            result = intOperand1 - intOperand2;
            break;
        case '*':
            result = intOperand1 * intOperand2;
            break;
        case '/':
            result = intOperand1 / intOperand2;
            break;
        case '%':
            result = intOperand1 % intOperand2;
            break;
        case '**':
            result = intOperand1 ** intOperand2;
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
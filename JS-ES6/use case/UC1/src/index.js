
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
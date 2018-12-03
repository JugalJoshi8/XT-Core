function add(a, b) {
    return a + b;
}

function calculate(a, b) {
    return add(a, b);
}

function main() {
    var result = calculate(10, 10);
    console.log('Add', result);
}

main();
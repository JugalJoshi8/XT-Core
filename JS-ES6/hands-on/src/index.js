let age = 18;
const STATUS = true;
const employee = null;

// ES6 function arguments default value syntax
function add(a = 0, b = 0) {
    return a + b;
}

console.log(`sum is ${add()}`);
console.log(`sum is ${add(10)}`);
console.log(`sum is ${add(10, 10)}`);
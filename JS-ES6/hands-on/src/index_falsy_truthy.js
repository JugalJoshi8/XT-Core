var x = null;
console.log(`null is ${Boolean(x)}`);
x = 0;
console.log(`0 is ${Boolean(x)}`);

x = '';
console.log(`empty string is ${Boolean(x)}`);

x = undefined;

console.log(`undefined is ${Boolean(x)}`);

x = {};

console.log(`empty object is ${Boolean(x)}`);

x = [];

console.log(`empty array is ${Boolean(x)}`);

// logical operators
var greetings = '';
var message = greetings || 'hello';
console.log(message);
var message = greetings && 'hello';
console.log(message);

// terniary operator
var age = 19;
var eligibility = age >= 18 ? "adult" : "minor";
console.log(eligibility);
var counter = 0;
var score = counter ? "you won" : "you lost";
console.log(score);

// typeof

var str = '212'
var num = 1;
var bool = true;
var un;
var naN = 100 * un;
var func = () => { 'hello' };
var obj = {};
var arr = [];
var nul = null
console.log(`type of num is ${typeof num}`);
console.log(`type of str is ${typeof str}`);
console.log(`type of bool is ${typeof bool}`);
console.log(`type of un is ${typeof un}`);
console.log(`type of naN is ${typeof naN}`);
console.log(`type of func is ${typeof func}`);
console.log(`type of obj is ${typeof obj}`);
console.log(`type of arr is ${typeof arr}`);
console.log(`type of null is ${typeof nul}`);

var switchTest = 0;
switch (switchTest) {
    case 0:
        console.log('number');
        break;
    case '0':
        console.log('string');
        break;
    default:
        console.log('none');
        break;
}

var step;
for(step = 1; step < 6; step++) {
    console.log('step: ' + step)
}



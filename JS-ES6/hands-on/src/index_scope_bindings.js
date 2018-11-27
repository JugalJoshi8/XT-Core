'use strict';

// object augmentation

// empty object
function Employee() {

}

const emp = new Employee();

emp.id = 1;

console.log(emp);

// static binding

var a = 100;
var print_a = function print_a() {
    console.log(a);
}

function print() {
    var a = 10;
    print_a();
}

function run() {
    print();
}

run();

// dynamic binding (this)

// callee
function greet() {
    console.log(this);
}

// caller, window by default
greet(); // undefined in strict mode

window.greet();

/////////

function getCoordinate(...name) {
    console.log(`${name} : x is ${this.x} y is ${this.y}`);
}

// No caller
//getCoordinate();

const map = {
    x: 1000,
    y: 2000
}
// binding on map
getCoordinate.call(map);

// window coordinates
var x = 999; 
var y = 99;
getCoordinate.call(window, 'Google Map', 'and');
getCoordinate.apply(window, ['Google Map', 'asdgshj']);

// bind

function increament() {
    return ++this.count;
}

const CounterApp = {
    count: 0
}

const inc = increament.bind(CounterApp);
for(let i = 0; i < 10; i++) {
    console.log('counter: ', inc());
}

var name = 'Ravi';
const training = {
    name: 'subramanian',
    teach: function() {
        let self = this;
        console.log(this.name);
        /*let learn = function() {
            console.log('learn:', this.name);
            console.log('learn:', training.name);
            console.log('learn:', self.name);
        }*/
        let learn = () => {
            console.log('learn:', this.name);
        }
        learn();
        //learn.call(training);
    }
};

training.teach();

////////

function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function(sub) {
            console.log(this.name + " teaching " + sub);
            let that = this;
            let notes = '.js-notes';
            let doLearn = function() {
                console.log(this.name + ' learning ' + sub + ' with ' + notes + ' from ' + that.name);
            }
            console.log('teaching ends');
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    /*const tnr = new Trainer('Subramanian');
    const e1 = new Employee('E1');
    const e2 = new Employee('E2');*/
    const tnr = Trainer('Subramanian');
    const e1 = Employee('E1');
    const e2 = Employee('E2');
    const doLearn = tnr.doTeach('.js');
    doLearn.call(e1);
    const e2LearnFunc = doLearn.bind(e2);
    e2LearnFunc();
}

sessionStart();
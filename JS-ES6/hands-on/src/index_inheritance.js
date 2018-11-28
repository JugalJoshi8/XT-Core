/// ES 5 Inheritance

function Person(name = 'name') {
    console.log('Person called');
    this.name = name;
}

function Employee(name) {
    Person.call(this, name);
    console.log('Emp called');
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee('jj');
console.log(emp1);

const emp2 = new Employee('kk');
console.log(emp2);

const emp3 = new Employee('ll');
console.log(emp3);

/// ES 6 Inheritance
class AccParent {
    testMethod() {
        console.log('test parent');
    }
}

class Account extends AccParent {
    constructor(number) {
        super();
        console.log('Acc created');
        this.number = number;
    }

    testMethod() {
        super.testMethod();
        console.log('test');
    }
}

class SavingAccount extends Account {
    constructor(number, name) {
        super(number);
        this.name = name;
        console.log('Saving acc');
    }

    testMethod() {
        super.testMethod();
        console.log('test saving');
    }
}

var savAcc = new SavingAccount(1212, 'jj');
savAcc.testMethod();

//// No parent

const hero = Object.create(null);
console.log(hero);
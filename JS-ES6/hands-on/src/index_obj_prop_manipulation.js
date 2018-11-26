// if function is for Object template, then name should be noun

function Employee(id = 1, name = 'John', salary = 1) {
    this.id = id;
    this.name = name;
    this.salery = salary;
    this.calculateSalary = function () {
        return 1000 * this.salery;
    }
}

let emp = new Employee();
console.log(emp.id, emp.name, emp.calculateSalary());

let emp1 = new Employee(12, 'Sam', 20);
console.log(emp1.id, emp1.name, emp1.calculateSalary());

// literal pattern

let customer = {
    id: 1,
    name: 'Ram',
    calculateInvoice: function () {
        return 1000;
    }
};

console.log(customer.id, customer.name, customer.calculateInvoice());


// class pattern

class Account {
    constructor(accNo = 0, name = 'John') {
        this.accNo = accNo;
        this.name = name;
    }

    withDraw() {
        return 'withdraw';
    }

    deposit() {
        return 'deposit';
    }
}

let account = new Account(1, 'Jugal');
console.log(account.accNo, account.name, account.withDraw(), account.deposit());
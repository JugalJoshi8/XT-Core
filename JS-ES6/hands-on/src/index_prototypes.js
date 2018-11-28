function Account() {
    this.id = 1;
    this.name = 'jj';
    this.calculatorInterest = function () {
        return 20;
    }
}
Account.prototype.balance = 20000;

Account.prototype.calculateInterest = function (p=1000, r=10, t=1) {
    return p * r * t / 100;
}

const acc1 = new Account();
acc1.id = 100;
console.log(acc1.id, acc1.name, acc1.balance, acc1.transactionLimit);

const acc2 = new Account();
acc2.id = 200;
console.log(acc2.id, acc2.name, acc2.balance, acc2.transactionLimit);

console.log(acc2.hasOwnProperty('id'));
console.log(acc2.hasOwnProperty('balance'));


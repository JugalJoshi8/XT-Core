const Account = require('./../models/Account');

class NOSQLAccountRepository {
    constructor() {
        console.log('NOSQLAccountRepository initialized');
    }

    loadAccount(num) {
        console.log('loading account ' + num);
        return new Account(num, 1000.00);
    }

    updateAccount(account) {
        console.log('Updating account ' + account.num, account.balance);
    }
}

module.exports = NOSQLAccountRepository;
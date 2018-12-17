const NOSQLAccountRepository = require('../repository/NoSQLAccountRepository');

class NEFTTransferService {
    constructor() {
        console.log('NEFTTransferService instance created');
    }

    transfer(amount, fromAccNum, toAccNum) {
        console.log('transfer begin..');
        const sqlRepo = new NOSQLAccountRepository();

        // load account(s)
        const fromAccount = sqlRepo.loadAccount(fromAccNum);
        const toAccount = sqlRepo.loadAccount(toAccNum);
        
        // debit and credit
        fromAccount.balance -= amount;
        toAccount.balance += amount;

        // update accounts
        sqlRepo.updateAccount(fromAccount);
        sqlRepo.updateAccount(toAccount);
        console.log('transfer successful');
    }
}

module.exports = NEFTTransferService;
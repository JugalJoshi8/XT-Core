class CustomerDataAccessLayer {
    constructor() {
        this.fs = require('fs');
    }
    storeData(data) {
        this.fs.writeFile('./customers_orders.json', JSON.stringify(data), (err) => {
            if(err) {
                throw err;
            }
            console.log('data written successfully');
        });
    }

    getCustomerOrders(filePath) {
        const options = {
            encoding: 'UTF-8'
        };
        return new Promise((resolve, reject) => {
            this.fs.readFile(filePath, options, (err, data) => {
                if(err) {
                    reject(err);
                }
                resolve(data);
            })
        })

        
    }
}

module.exports = CustomerDataAccessLayer;
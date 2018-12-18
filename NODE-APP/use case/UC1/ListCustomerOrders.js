class ListCustomerOrders {
    constructor(customerOrderService) {
        this.customerOrderService = customerOrderService;
    }

    listCustomerOrders(filePath) {
        this.customerOrderService.getCustomerOrders(filePath)
        .then(data => {
            const customerOrders = JSON.parse(data);
            customerOrders.customers.forEach((customer, index) => {
                console.log((index + 1) + ' ' + customer.name);
                console.log('  Orders');
                let orderValue = 0;
                customer.orders.forEach(order => {
                    console.log('    OrderID: ' + order.id + ' ' + order.value);
                    orderValue += order.value;
                });
                console.log('---------------------------------------');
                console.log('                  ' + orderValue);

                console.log('---------------------------------------');
            });
        })
        .catch(err => {
            console.log('something went wrong', err)
        });
    }
}

const CustomerOrderService = require('./CustomerOrderService');
const CustomerDataAccessLayer = require('./CustomerDataAccessLayer');
new ListCustomerOrders(new CustomerOrderService(new CustomerDataAccessLayer())).listCustomerOrders('./customers_orders.json');
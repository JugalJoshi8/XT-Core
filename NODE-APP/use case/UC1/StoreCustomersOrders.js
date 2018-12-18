class StoreCustomersOrders {
    constructor(customerOrderService) {
        this.customerOrderService = customerOrderService;
    }

    storeData(customersData) {
        this.customerOrderService.storeData(customersData);
    }
}



const customersData = {
    customers: [{
        name: 'c1',
        id: '1',
        orders: [{
            id: 'o11',
            value: 1
        },
        {
            id: 'o12',
            value: 2
        },
        {
            id: 'o13',
            value: 3
        },
        ]
    },
    {
        name: 'c2',
        id: '2',
        orders: [{
            id: 'o21',
            value: 4
        },
        {
            id: 'o22',
            value: 5
        },
        {
            id: 'o23',
            value: 6
        },
        ]
    },
    {
        name: 'c3',
        id: '3',
        orders: [{
            id: 'o31',
            value: 7
        },
        {
            id: 'o32',
            value: 8
        },
        {
            id: 'o33',
            value: 9
        },
        ]
    }]
}

const CustomerOrderService = require('./CustomerOrderService');
const CustomerDataAccessLayer = require('./CustomerDataAccessLayer');
new StoreCustomersOrders(new CustomerOrderService(new CustomerDataAccessLayer())).storeData(customersData);

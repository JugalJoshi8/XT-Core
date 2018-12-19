let orders = [ 
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        }
    ];

exports.addOrder = function(order) {
    orders.push(order);
}

exports.orders= orders;
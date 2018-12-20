const express = require('express');
const { orders, addOrder } = require('./../models/Orders');
const OrderCtrl = express.Router();
const orderMiddleware = (req, res, next) => {
    console.log('welcome to order api');
    next();
}
OrderCtrl.use(orderMiddleware);

OrderCtrl.get('/', (req, res) => {
    res.status(200).json(orders);
})

OrderCtrl.post('/', (req, res) => {
    //without middleware
    // req.on('data', (data) => {
    //     addOrder(JSON.parse(data));
    // })
    //res.end('ordes post');
    //with middleware -body -parser
    const order = req.body;
    addOrder(order);
    res.status(201).json(orders);
})

OrderCtrl.put('/:id', (req, res) => {
    res.end('ordes put');
})

OrderCtrl.delete('/:id', (req, res) => {
    res.end('ordes delete');
})

module.exports = OrderCtrl;
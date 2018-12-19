const express = require('express');
const { orders, addOrder } = require('./../models/Orders');
const OrderCtrl = express.Router();
OrderCtrl.get('/', (req, res) => {
    res.status(200).json(orders);
})

OrderCtrl.post('/', (req, res) => {
    req.on('data', (data) => {
        addOrder(JSON.parse(data));
    })
    res.end('ordes post' + JSON.stringify(req.body));
})

OrderCtrl.put('/1', (req, res) => {
    res.end('ordes put');
})

OrderCtrl.delete('/1', (req, res) => {
    res.end('ordes delete');
})

module.exports = OrderCtrl;
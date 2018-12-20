const express = require('express');
const OrderController = require('./controllers/OrderController')
 const app = express();
 const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({
    extended: true
  }));
const welcomeMiddleware = (req, res, next) => {
    console.log('welcome to my app');
    next();
}



app.use(welcomeMiddleware);

app.use('/api/orders', OrderController);
 app.listen(8081, () => console.log('server is ready'));
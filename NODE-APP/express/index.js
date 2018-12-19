const express = require('express');
const OrderController = require('./controllers/OrderController')
 const app = express();
//  const bodyParser = require('body-parser');
//  app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use('/api/orders', OrderController);
 app.listen(8081, () => console.log('server is ready'));
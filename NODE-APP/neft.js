const NEFTTransferService = require('./services/NEFTTansferService');

//init phase
console.log('----------');
const neftService = new NEFTTransferService();
console.log('----------');

//use
console.log('----------');
neftService.transfer(100.00, "1", "2");
neftService.transfer(100.00, "2", "1");
console.log('----------');
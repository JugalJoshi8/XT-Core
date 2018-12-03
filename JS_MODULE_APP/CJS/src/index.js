const { calculate } = require('./calculate');
console.log(calculate(10, 20));

const FetchService = require('./fetch_service');
const fs = new FetchService();
console.log(fs.findAll());
console.log(fs.findById(22));  
// Numbers
var price = 10;
console.log(`Price is ${price}`);
var lightSpeed = 786784623877777777777777777777777777777777777777777777777777777777777777777;
console.log(lightSpeed);
var stockValue = 89.7890;
console.log(stockValue);
var hexValue = 0xff;
console.log(hexValue);
var qty = '10';
//implicit conversion
var totalPrice = price * qty;
console.log(`Price 1 ${totalPrice}`)
//explicit conversion
var tPrice = parseInt(qty, 10) * price;
console.log(`Price 2 ${tPrice}`)
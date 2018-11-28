class Order {

}
const order = new Order();
console.log('order instanceof Order', order instanceof Order);

class Person {

}

class Employee extends Person {

}

const emp = new Employee();
console.log('emp instanceof Employee', emp instanceof Employee);
console.log('emp instanceof Order', emp instanceof Order);


// ES 5 - object 'Has A' relationship

function Address(doorNo = 1, street = 'street', city = 'city', zipCode = 'zipCode', state = 'state') {
    this.doorNo = doorNo;
    this.street = street;
    this.city = city;
    this.zipcode = zipCode;
    this.state = state;
}

function Employee(id = 1, name = 'name', address = new Address()) {
    this.id = id;
    this.name = name;
    this.address = address;
}

function Animal() {

}

let emp = new Employee();
console.log(emp.id, emp.name, emp.address.city);

let address = new Address('22', 's1', 'c1', '1212', 'uk');
let emp1 = new Employee(11, 'jj', address);
console.log(emp1.id, emp1.name, emp1.address.city);

//// ES 6 - object 'Has A' relationship
class Order{
    constructor(orderId = '1', value = 0) {
        this.orderId = orderId;
        this.value = value;
    }
}

class Customer {
    constructor(id= 1, name = 'name', order = new Order()) {
        this.id = id;
        this.name = name;
        this.order = order;
    }
}

//UI
class CustomerComponent {
    constructor() {
        console.log('Customer UI is called');
    }

    render() {
        let order = new Order('222', 'order1', '100');
        let customer = new Customer(11, 'customer1', order);
        console.log(customer);
    }
}

new CustomerComponent().render();
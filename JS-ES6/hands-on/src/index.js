'use strict';

// object destructuring
function getEmployee({ id1: id, name, salary }) {
    console.log(id, name, salary);
}

getEmployee({ id1: 1, name: 'Jugal', salary: 100 });

// object destructuring with returning object using '()'

const getStocks = () => ({
    id: 1,
    value: 100,
    symbol: 'NSF'
})

// returning object with inputs

const getStocks1 = (id, value, symbol) => ({
    id,
    value,
    symbol
});
console.log(getStocks1(3, 900, "DSF"));

// Deconstructoring nested objects
const getCustomers = ({custId: id, address: { city }}) => {
    console.log(id, city);
};

const customer = {
    custId: 1,
    address: {
        city: 'Delhi'
    }
}
getCustomers(customer);


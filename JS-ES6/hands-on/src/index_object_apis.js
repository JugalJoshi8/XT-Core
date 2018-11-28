// Object.freeze, seal, assign, preventExtensions
//'use strict';

// freeze: Nothing can be added to or removed from the properties set of a frozen object
const object1 = {
  property1: 42
};

Object.freeze(object1);
// Throws an error in strict mode
delete object1.property1;
object1.property1 = 33;

console.log(object1.property1);
// expected output: 42

//seal: The Object.seal() method seals an object, preventing new properties from being added to it and 
// marking all existing properties as non-configurable. Values of present properties can still be changed 
//as long as they are writable

const object2 = {
  property1: 42
};

Object.seal(object2);
object2.property1 = 33;
console.log(object2.property1);
// expected output: 33

delete object2.property1; // cannot delete when sealed
console.log(object2.property1);

// prevent extensions: The Object.preventExtensions() method prevents new properties 
//from ever being added to an object (i.e. prevents future extensions to the object). 
//existing properties can be deleted and modified

const object3 = {a: 1234}
Object.preventExtensions(object3);
object3.b = 22;
console.log(object3.b);
object3.a = 11;
console.log(object3.a);
delete object3.a;
console.log(object3.a);

//The Object.assign(target, ..source) method is used to copy the values of all enumerable own properties 
//from one or more source objects to a target object. It will return the target object.
const object4 = {
  a: 1,
  b: 2,
  c: 3
};

const object5 = Object.assign({c: 4, d: 5}, object4);

console.log(object5);


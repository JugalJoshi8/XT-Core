// ES 5 static api simulation

function Utility() {
    
}
Utility.add = function(a, b) {
    return a + b;
}
console.log(Utility.add(10, 20));

//build-in static api
console.log(Math.random());

///// ES 6

class MathUtility {
    static add(a, b) {
        return a +b;
    }
}

console.log(MathUtility.add(20, 30));
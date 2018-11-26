var x = 1;
var y = 2;
var num1 = 20;
function a() {
    var num1 = 10;
    console.log('a');
    function b() {
        console.log('b');
    }
}
a();

var b = function() {
    
}
b();
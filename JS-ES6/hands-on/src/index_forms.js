document.querySelector('#firstName').addEventListener('input', function(e) {
console.log(e.target.value);
document.querySelector('#myName').innerHTML = e.target.value;
});

document.querySelector('#lastName').addEventListener('input', function(e) {
    console.log(e.target.value);

});
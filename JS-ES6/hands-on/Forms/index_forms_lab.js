document.querySelector('#firstName').addEventListener('input', function (e) {
    console.log(e.target.value);
});

document.querySelector('#lastName').addEventListener('input', function (e) {
    console.log(e.target.value);

});

document.querySelector('#country').addEventListener('input', function (e) {
    console.log(e.target.value);
});

document.querySelector('#gender1').addEventListener('input', function (e) {
    console.log(e.target.value);
});

document.querySelector('#gender2').addEventListener('input', function (e) {
    console.log(e.target.value);
});

document.querySelector('#adult').addEventListener('input', function (e) {
    console.log(e.target.checked);
});

document.querySelector('#criminal').addEventListener('input', function (e) {
    console.log(e.target.checked);
});

document.querySelector('#pform').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('First name', document.querySelector('#firstName').value);
    console.log('Last name', document.querySelector('#firstName').value);
    console.log('Country', document.querySelector('#country').value);
    console.log('Gender', document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : 'Not selected');
    console.log('Adult', document.querySelector('#adult').checked);
    console.log('Criminal', document.querySelector('#criminal').checked);
});
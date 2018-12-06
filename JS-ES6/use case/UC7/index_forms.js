
const form = document.getElementsByTagName('form')[0];
const submitButton = document.querySelector('input[type=submit]');


document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('input', function (e) {
        if(form.checkValidity()) {
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
        if(e.target.className.indexOf('touched') === -1) {
            e.target.className = e.target.className + ' touched';
        }
    });
})

async function submitForm(e) {
    e.preventDefault();    
    // document.querySelector('form').className = 'formTouched';
    // let errors = [];
    // const firstNameValid = document.querySelector('#firstName').checkValidity();
    // const lastNameValid = document.querySelector('#lastName').checkValidity();
    // const gender = document.querySelector("input[name='gender']:checked") ? document.querySelector("input[name='gender']:checked").value : '';
    // const isEmailValid =  document.querySelector('#email').checkValidity();
    // if(!firstNameValid) {
    //     errors.push('First name is empty');
    // }
    // if(!lastNameValid) {
    //     errors.push('Last name is empty');
    // }
    // if(!gender || !gender.trim()) {
    //     errors.push('Gender is empty');
    // }
    // if(!isEmailValid) {
    //     errors.push('Email is invalid');
    // }
    // if(errors.length) {
    //     alert(errors);
    //    // e.preventDefault();
    // }
    const personalInfo = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        zipcode: document.querySelector('#zipcode').value,
        city: document.querySelector('#city').value,
        mobile: document.querySelector('#mobile').value,
        country: document.querySelector('#country').value,
        gender: document.querySelector("input[name='gender']:checked").value,
        adult: document.querySelector('#adult').checked,
        criminal: document.querySelector('#criminal').checked
    }
    try {
        const response = await fetch('http://localhost:3000/personalInfo', {
            method: 'POST',
            body: JSON.stringify(personalInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200 && response.status !== 201) {
            alert('Error occurred when submitting the form');
        }
        else {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.successMsg').style.display = 'block';
        }
        //return await response.json();
    }
    catch (err) {
        alert('Error occurred when submitting the form');
    }
}

document.querySelector('#pform').addEventListener('submit', submitForm);
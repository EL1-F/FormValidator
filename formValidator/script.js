const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input,message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function checkLength(input,min,max) {
    if (input.value.length < min) {
        error(input,`${input.id} en az ${min} karakter olmalı` );
    }else if (input.value.length> max) {
        error(input,`${input.id} en fazla ${max} karakter olmalı` );
    }else{
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, 'Parololar eşleşmiyor.')
    }
}

function checkPhone(input) {
    var exp = /^\d{10}$/;
    if (!exp.test(input.value)) {
        error(input,'Telefon 10 karakter olmalıdır.')
    }
}

function control(inputs) {

    for(var i of inputs){

        if (i.value === '') {
            error(i,`${i.id} is required`);
        }else{
            success(i);
              
            checkLength(username,7,15);
            checkLength(password,7,12);
            validateEmail(email);
            checkPasswords(password,repassword);
            checkPhone(phone);
        }
    };

}


form.addEventListener('submit', function(e) {
    e.preventDefault(); 


    var formElements = document.querySelectorAll('.form-control');   
    control(formElements);
    
    
});



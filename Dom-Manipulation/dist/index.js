"use strict";
const form = document.querySelector('.user-form');
console.log(form);
const emaill = document.querySelector('#email');
const namee = document.querySelector('#name');
console.log(namee);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        name: namee.value,
        emaill: emaill.value,
    };
    console.log(data);
});

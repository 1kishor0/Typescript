const form = document.querySelector('.user-form') as HTMLFormElement;
console.log(form);

const emaill = document.querySelector('#email') as HTMLInputElement;
const namee = document.querySelector('#name') as HTMLInputElement;
console.log(namee);



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        name: namee.value,
        emaill: emaill.value,
    };
    console.log(data);

});



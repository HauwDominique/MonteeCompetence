const formTitle = document.querySelector('.form-title');
const form  = document.getElementById('form');
const firstname = document.getElementById('firstname');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errors = document.querySelectorAll('.error');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    errors.forEach(item => {
        item.classList.add('invisible');
    });

    const firstnameValue = firstname.value.trim();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue =  message.value.trim();

    if (firstnameValue.length < 2 || firstnameValue.length > 12) {
        firstname.nextElementSibling.classList.remove('invisible');
     } else if (nameValue.length < 3 || nameValue.length > 20) {
        name.nextElementSibling.classList.remove('invisible');
    } else if (messageValue.length < 10 || message.length > 100) {
        message.nextElementSibling.classList.remove('invisible');
    } else {
        formTitle.innerText = "Merci pour l'envoie de votre formulaire !";
        form.remove();
    };
});



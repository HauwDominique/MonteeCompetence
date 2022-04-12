const icon = document.querySelector('.fa-meh-blank');
const btn = document.querySelector('button');
const iconBells = document.querySelector('.bell')

icon.addEventListener('click',function () {
    icon.classList.toggle('fa-smile-wink');
    icon.classList.toggle('happy');
});

btn.addEventListener('click', function () {
    if (btn.innerText === 'Abonnez-vous') {
        btn.innerText = 'Abonné';
        btn.classList.add('abonne');
        iconBells.classList.add('fa-bell');
    } else {
        btn.innerText = 'Abonnez-vous';
        btn.classList.remove('abonne');
        iconBells.classList.remove('fa-bell');
    }
});
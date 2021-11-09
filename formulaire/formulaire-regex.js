// Todo A la saisie dans un champ, vérifier ce champ selon ses spécificités

/*
 - 1 boucle sur chaque input
 - Un ecouteur d'évenement de type keydown ?sur chaque input
 - Récupérer le data-check de l'input saisi (name, age, email, phone ?)
 - une condition qui déclenche une méthode selon le datacheck d'input.
   Chaque méthode de vérification est en dehors de cette condition
   Cette condition se déclenche et affiche un message

   les verifications
   - age =>18
   - name : alphanumerique => regex.test(value)
   - mail: doit avoir un '.', un '@' => boucle cherchant un '.' et un '@'
   - phone: doit avoir 10 chiffres => lengh <10

   Affficher sous les inputs les messages d'erreur
   => cibler le label html, et injecter par appendchild le message en fonction de l'input
   => voir pour faire une fonction qui génère les message

 - Envoyer dans un tableau  toutes les erreurs associées à leurs inputs
    => créer un tableau
    => créer un div qui va recevoir le contenu du tableau
    => faire une boucle sur ce tableau qui va ensuite appendchild à chaque itération le contenu de cette boucle

*/

const formCivil = document.querySelector(".form-civil");
const inputs = formCivil.querySelectorAll("input");

const regex = {
    name: /[^a-zA-Z0-9]/,
    mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^(\+\d{2,3}|0)\d{9}$/
};

const errors = {
    empty : 'Champ vide',
    name : 'Présence de caractère invalide dans le nom',
    age : 'Vous êtes mineur',
    email : 'Email invalide',
    phone : 'Téléphone invalide'
};

// const checkPhone = (inputVal) => {
//     if(!inputVal.match(regex.phone)) {
//         return true;
//     } else {
//         return false;
//     }
// };

//Même principe que la fonction checkPhone sous forme de ternaire
const checkName = (inputVal) => regex.name.test( inputVal ) ? true : false;
const checkAge = inputVal => inputVal < 18 ? true : false; //on peut  supprimer les parenthèses de la fonction fléchée parce qu'il n'y a qu'1 argument à ma fonction. C'est MIEUX !
const checkMail = inputVal => !inputVal.match(regex.mail) ? true : false;
const checkPhone = inputVal => !inputVal.match(regex.phone) ? true : false;
const button = document.querySelector('button');
const resumeErrors = document.querySelector('.resumeErrors');
const arrayErrors = [];

const addError = (input, errorMessage,) => {
    const errorMessageElt = document.createElement('p');

    input.classList.add('error');
    input.classList.remove('valid');
    errorMessageElt.innerHTML = errorMessage;
    input.parentElement.appendChild(errorMessageElt);

    arrayErrors.push(errorMessage);
    // console.log(arrayErrors)

    // resumeErrors.

};

const addClassValid = input => {
    const errorMessages = input.parentElement.querySelectorAll('p');

    if (input.value !== '') {
        input.classList.add('valid');
    }
    input.classList.remove('error');

    for (const errorMessage of errorMessages) {
        errorMessage.remove();
    }
};

const checkInput = (input) => {
    const inputDataCheck = input.getAttribute('data-check');
    const inputVal = input.value;
    const errorMessages = input.parentElement.querySelectorAll('p');

    for (const errorMessage of errorMessages) {
        errorMessage.remove();
    };

    if (inputVal === '') {
        addError(input, errors.empty);
    } else if (inputDataCheck === 'name') {
        checkName(inputVal) ? addError(input, errors.name):addClassValid(input);
    } else if (inputDataCheck === 'age') {
        checkAge(parseInt(inputVal, 10)) ? addError(input, errors.age):addClassValid(input);
    } else if (inputDataCheck === 'email') {
        checkMail(inputVal) ? addError(input, errors.email):addClassValid(input);
    } else if (inputDataCheck === 'phone') {
        checkPhone(inputVal) ? addError(input, errors.phone):addClassValid(input);
    }
}

for(const input of inputs) {
    input.addEventListener('keyup', function () {
        setTimeout(function(){checkInput(input);
        }, 500);
    })
}

button.addEventListener('click', function () {
    for(const input of inputs) {
        checkInput(input)
    }
});
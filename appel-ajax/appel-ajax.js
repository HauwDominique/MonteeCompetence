// todo Afficher une liste d'utilisateurs sous forme de carte
// Cette liste est obtenu via un appel ajax à une api

/* CONCEPTION

- faire un appel api via l'ajax
- récupérer le résultat au format json
- stocker le résultat dans une variable (un objet)
- boucler sur cette variable pour injecter dans le html sous forme de li
    => créer un elt html ul dans le dom, et le stocker dans une variable
    => injecter dans cet ul, des li contenant le nom, prenom, addresse des utilisateurs
    => créer un innertext ou innerhtml ?

- Adresse :
on récupère via user.address, un objet.
    => boucler sur cet objet pour créer les éléments html et les associer au propriété de l'objet address
        ATTENTION, il faut pouvoir injecter la div address


- récupérer l'addresse à l'aide d'une fonction qui injecte automatiquement le code html
    => créer une fonction qui boucle sur l'addresse et qui génère du code html
 */


const apiUsers = 'https://jsonplaceholder.typicode.com/users';
const usersList = document.querySelector('.users-list');
let users = [];

const createCardContent = (user) => {
    // const userCard = document.querySelector('.user-card');
    const userAddress = user.address;

    // const addressContain = document.createElement('div');
    // userCard.appendChild(addressContain);

    usersList.innerHTML += `
        <li class="user-card"> 
            <p class="name"> <span> Nom : </span> ${user.name}</p>
            <p class="user-name"><span>Prénom : </span>${user.username}</p>
            <p class="user-mail"><span>Email : </span>${user.email}</p>
            <div class="address">
                <p class="address__title">Adresse</p>
                <p> <span> Rue :</span> ${userAddress.street}</p>
                <p> <span> Code Postal :</span> ${userAddress.zipcode}</p>
                <p> <span> Ville :</span> ${userAddress.city}</p>
            </div>
         </li>
        `
};

const getUsers = async () => {
    const response = await  fetch(apiUsers);
    users = await response.json();
    console.log('users :' + users) // renvoie un tableau d'objet

    for(user of users) {
        createCardContent(user);
        // console.log(user)
    }
}

getUsers();



// const getUsers = () =>

// fetch('https://example.com/profile/avatar', {
//     method: 'PUT',
//     body: formData
// })
//     .then(response => response.json())
//     .then(result => {
//         console.log('Success:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// CODE ARTHUR -------------------------------------------------------------------

// const result = document.querySelector('.users-list')
// const apiUsers = 'https://jsonplaceholder.typicode.com/users'
// let users = []
//
// const getUsers = async () => {
//     try {
//         const response = await fetch(apiUsers);
//         // console.log(await response.text());
//         if (!response.ok) {
//             console.log('error')
//             const message = `An error has occured: ${response.status}`
//             throw new Error(message)
//         }
//         users = await response.json()
//         displayUsers()
//     }
//     catch (error) {
//         // console.log('fetch failed', error)
//         displayError(error.message)
//     }
// }
//
// const displayError = error => result.innerHTML = `<li>${error}</li>`
// const displayUsers = () => {
//     let userList = ''
//     for (const user of users) {
//         userList += `
//                     <li class="user">
//                         ${user.id} // ${user.name}
//                         <ul>
//                             <li>${user.address.suite}</li>
//                             <li>${user.address.street}</li>
//                             <li>${user.address.city}</li>
//                             <li>${user.address.country}</li>
//                         </ul>
//                     </li>
//                 `
//     }
//     result.innerHTML = userList
// }
// const button = document.querySelector('#loadUsers')
// button.addEventListener('click', () => getUsers())
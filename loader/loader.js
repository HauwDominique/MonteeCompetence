/* TODO

Au clic sur un bouton afficher un loader pendant 5s
Puis masquer le loader et afficher un message de fin


faire un appel ajax qui déclenche le loader et le masque  lorsque l'appel est terminé

Faire un overlay sur le composant le temps que le loader tourne

Ce qui pourrait être aussi intéressant, sera de faire un debounce sur le bouton afin que le loader se réinitialise


*/

/* Conception
    créer les éléments hmtl

    faire le css pour le loader (overlay avec le loader en after)

    faire le js qui appelle le loader/overlay (le isLoading)

    créer un setimeout qui appelle une fonction qui déclenche le loader, avec un timing de 3s

    Cette fonction doit ensuite ajouter une classe qui masque le loader

    Ensuite créer un écouteur d'évènement qui déclenche le loader au clic

    Voir aussi pour mettre en place un debounce

 */

const usersLoad = document.querySelector('.users-load');
const usersClear = document.querySelector('.users-clear');
const apiUsers = 'https://jsonplaceholder.typicode.com/users';
const usersList = document.querySelector('.users-list');

const postsLoad = document.querySelector('.posts-load');
const postsClear = document.querySelector('.posts-clear');
const postNext = document.querySelector('.post-next');
const apiPosts = 'https://jsonplaceholder.typicode.com/posts';
const postsList = document.querySelector('.posts-list');

let users = [];
let posts = [];
let postIndex = 1;

//appel Ajax

const getUsers = async () => {
    try {
        const response = await fetch(apiUsers);
        if (!response.ok) {
            console.log('error')
            // const message = `An error has occured: ${response.status}`
            throw new Error(message)
        }
        users = await response.json();

        displayUsers();
    }
    catch (error) {
        console.log('fetch failed', error)
        // displayError(error.message)
    }
};

const getPosts = async () => {
    try {
        const response = await fetch(apiPosts);
        if (!response.ok) {
            console.log('error')
            // const message = `An error has occured: ${response.status}`
            throw new Error(message)
        }
        posts = await response.json();
        // console.log('posts' + posts)

        displayPosts();
    }
    catch (error) {
        console.log('fetch failed', error)
        // displayError(error.message)
    }
};

const getNextPost = async (postIndex) => {
    try {
        const response = await fetch(apiPosts + '/'+ postIndex);
        if (!response.ok) {
            console.log('error')
            // const message = `An error has occured: ${response.status}`
            throw new Error(message)
        }
        posts.push(await response.json());
        // console.log('posts' + posts)

        displayPosts();
    }
    catch (error) {
        console.log('fetch failed', error)
        // displayError(error.message)
    }
};

const displayUsers = () => {
    let userList = '';
    for (const user of users) {
        userList += `
                    <li class="user">
                        ${user.id} // ${user.name}
                        <ul>
                            <li>${user.address.suite}</li>
                            <li>${user.address.street}</li>
                            <li>${user.address.city}</li>
                        </ul>
                    </li>
                `
    }
    usersList.innerHTML = userList;
    usersList.classList.add('active');

    isLoading(usersList, false);
};

const displayPosts = () => {
    let postList = '';
    for (const post of posts) {
        postList += `
                    <div class="post">${post.id} - 
                        <span class="title">${post.title}</span> 
                        <div>${post.body}</div>
                     </div>
                `
    }
    postsList.innerHTML = postList;
    postsList.classList.add('active');

    isLoading(postsList, false);

};

function isLoading(elt, load = false) {
    const loadElt = elt.parentNode.querySelector('.overlay');
    if(load) {
        const loader = document.createElement('div');
        loader.classList.add('overlay');
        elt.parentNode.append(loader);
    } else if (loadElt) {
        loadElt.remove();
    }
};

clearUsers = function() {
    users = [];
};

clearPosts = function() {
    posts = [];
    postIndex = 1;
};

let timeout;

usersLoad.addEventListener('click', function () {
    usersList.classList.remove('active');
    isLoading(usersList, true);
    // getUsers()
    timeout = setTimeout(getUsers, 1000);
});

usersClear.addEventListener('click', function () {
    clearUsers();
    displayUsers();
});

postsLoad.addEventListener('click', function () {
    postsList.classList.remove('active');
    isLoading(postsList, true);
    // getUsers()
    timeout = setTimeout(getPosts, 1000);
});

postNext.addEventListener('click', function () {
    isLoading(postsList, true);
    getNextPost(postIndex);
    postIndex += 1;
});

postsClear.addEventListener('click', function () {
    clearPosts();
    displayPosts();
});


const form = document.getElementById('form');
const country = document.getElementById('country');
const start = document.getElementById('start');
const end = document.getElementById('end');
const listResult = document.querySelector('.list-results');

//Création d'un tableau d'objet
const voyages = [
    {
        country: 'borabora',
        price : 1790,
        voyageurs: 4
    },
    {
        country: 'borabora',
        price : 1490,
        voyageurs: 2
    },
    {
        country: 'bahamas',
        price : 1790,
        voyageurs: 4
    },
    {
        country: 'bahamas',
        price : 1490,
        voyageurs: 2
    },
    {
        country: 'tahiti',
        price : 1290,
        voyageurs: 1
    },    {
        country: 'tahiti',
        price : 1490,
        voyageurs: 2
    },    {
        country: 'tahiti',
        price : 1790,
        voyageurs: 4
    }
];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //je stocke dans un objet le choix du user
    const choice = {
        country: country.value,
        start: start.value,
        end: end.value
    };

    //je transforme l'objet en chaine de caractère (pour être setter vers le localstorage
    const choiceString = JSON.stringify(choice);
    // je stocke dans le localstorage
    window.localStorage.setItem('details', choiceString);

    // je rafraichis la page pour afficher dans les champs les données du localStorage
    window.location.href = window.location.href;

});

//je récupère les données du localStorage
function displayDetails() {
    const choiceObject = JSON.parse(window.localStorage.getItem('details'));

    //j'attribue à chaque champ les valeurs récupérées dans le localStorage
    country.value = choiceObject.country;
    start.value = choiceObject.start;
    end.value = choiceObject.end;

    //je recherche dans le tableau une correspondance avec le pays choisi par le user
    const results = voyages.filter((voyage) => voyage.country === country.value);

    if (results.length > 0) {
        //je boucle sur le tableau des correspondance
        results.forEach( result =>{
            const item = `
                        <div class="item">
                            <p class="item-country">${result.country}</p>
                            <p>Nombre de voyageurs : ${result.voyageurs}</p>
                            <p class="item-price">Prix : ${result.price} euros</p>
                        </div>
                        `;
            //J'injecte dans le Dom le résultat
            listResult.innerHTML += item;
        });
    } else {
        const item = `<p class="error"> Désolé, aucune destination de trouvée.</p>`;
        listResult.innerHTML += item;
    };

};

displayDetails();


const form = document.getElementById('form');
const todo = document.getElementById('todo');
const listItems = document.querySelector('.list-items');
const error = document.getElementById('error');

//je récupère la valeur de l'input
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const todoValue = todo.value;

    error.innerText = '';

    if(todoValue) {
        let item = `
                    <div class="item">
                        <p>${todoValue}</p>
                        <button class="btn-delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="btn-archive">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                `;

        listItems.innerHTML += item;
    } else {
        error.innerText = 'Veuillez saisir une tâche !';
    };



    //je stocke tous les btnDelete présent dans ma div list-items
    const btnDelete = document.querySelectorAll('.btn-delete');

    //je boucle sur le tableau obtenu et au click sur le bouton cible (i)
    btnDelete.forEach(i => {
        i.addEventListener('click', function () {
            console.log('delete');
            i.parentElement.remove();
        });
    });

//    je gère la modification de la tâche
    const btnArchive = document.querySelectorAll('.btn-archive');
    btnArchive.forEach(i => {
        i.addEventListener('click', function () {
            const parentElt = i.parentElement;
            parentElt.classList.toggle('done');
        });
    });

    //on réinitialise le formulaire (donc l'input)
    form.reset();

});
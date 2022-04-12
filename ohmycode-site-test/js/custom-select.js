const selectOption = document.querySelectorAll('#country option');
const labelSelectCustom = document.getElementById('custom-country-label');
const customItems = document.querySelector('.select-item-js-hide');

/* --------------------- EN JAVASCRIPT UNIQUEMENT ----------------------------------------------------*/

//Récupération et chargement des options dans un ul custom
selectOption.forEach(option => {
    optionVal = option.innerHTML;
    const loadLi = `
        <li class="load">${optionVal}</li>
    `;
    customItems.innerHTML += loadLi;
});




//Il faut attendre le chargement complet du Dom afin que les li soient créées dans le customSelect
window.addEventListener('load', (e) => {
    // console.log('Dom chargé');
    const selectCustomItems = document.querySelectorAll('.select-item-js-hide li');

    //On boucle dans les options select pour chercher l'option sélectionnée
    selectOption.forEach(option => {
        optionAttr = option.hasAttribute('selected');

        //si l'option a l'attribut selected, alors on set son texte dans le labelSelectCustom
        if (optionAttr) {
            optionVal = option.innerHTML;
            labelSelectCustom.innerText = this.optionVal;
        };
    });


    labelSelectCustom.addEventListener('click', function () {
        customItems.classList.toggle('active');
    });

    // Récupérer la valeur d'un item au click
    //On fait une boucle sur les li du customSelect
    selectCustomItems.forEach( item => {
        let itemVal = item.innerHTML;

        item.addEventListener('click', function () {
            // on set dans le champ labelSelectCustom le text de l'item cliqué
            labelSelectCustom.innerText = this.innerHTML;

            selectOption.forEach(option => {
                let optionVal = option.value;

                if(optionVal === itemVal) {
                    option.selected = true;
                }
            });
        });
    });
});


//
// const btnMoreAll = document.querySelectorAll('.btn__qty-more')
// const btnMore = document.querySelector('.btn__qty-more')
// console.log('btnMoreAll' + btnMoreAll)
// console.log('btnMore' + btnMore)

const qtyContains = document.querySelectorAll('.input-qty-contain')

function more(input) {
    // console.log(typeof input.value)
    input.value = parseInt(input.value) + 1
    /* même si l'input est de type number, ce n'est pas un number qui est reçu (car on récupère un objet sur lequel on récupère la value)
    * Le type number en html, sert principalement pour le clavier. Cela n'implique pas que la valeur de cet objet de type number (ça reste un string)
    * */
}

function less(input) {
    input.value --
}

//BOUCLE-----------------------------------------------------
for(const contain of qtyContains) {
    const btnLess = contain.querySelector('.btn__qty-less')
    const btnMore = contain.querySelector('.btn__qty-more')
    const inputSelector = contain.querySelector('.input-qty')

    // console.log(btnMore)
    // console.log(input)

    btnMore.addEventListener("click", function () {
        more(inputSelector)
    })
    // btnMore.addEventListener("click", more()) => ne fonctionne pas

    btnLess.addEventListener("click", () => {
        if(inputSelector.value > 0) {
            less(inputSelector)
        }
    })
}

/* VOIR AVEC ARTHUR pourquoi je dois avoir mes fonction more() et less() à l'intérieur de la boucle ?
    => parce que je ne passais pas d'argument (le input) dans la fonction lorsqu'elle est en dehors de la boucle */



/* SOLUCE d'Arthur

const qtyInputs = document.querySelectorAll('.input-quantity')

        const qtyInputs = document.querySelectorAll('.input-quantity')
        for(const input of qtyInputs) {
            const minus = input.querySelector('.minus')
            const plus = input.querySelector('.plus')
            const qty = input.querySelector('.quantity')
            minus.addEventListener('click', () => qty.value > 0 ? qty.value = parseInt(qty.value) - 1 : '')
            plus.addEventListener('click', () => qty.value = parseInt(qty.value) + 1)
        }

 */





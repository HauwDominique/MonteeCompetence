const vignettes = document.querySelectorAll('.small');
const fullImg = document.getElementById('full');
const btnAddCart = document.querySelector('.btn-add');
const cartContainer = document.querySelector('.cart-container');

let cartQty = 0;


vignettes.forEach((item)=> {
    item.addEventListener('click', function () {
        let imgSrc =  item.getAttribute('src');
        fullImg.setAttribute('src', imgSrc);
    });
});

btnAddCart.addEventListener('click', function () {
   cartQty +=1;
   cartContainer.style.display = 'block';

   if (cartQty <= 1) {
       cartContainer.innerText = 'Vous avez ajouté ' + cartQty + ' produit dans votre panier.';
   } else {
       cartContainer.innerText = 'Vous avez ajouté ' + cartQty + ' produits dans votre panier.';
   }
});
//Création d'un classe contenant le html du header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="navbar-mobile">
                    <i class="fas fa-bars"></i>
                    <div class="modal">
                        <div class="navbar-mobile-list">
                            <a href="homepage.html">Accueil</a>
                            <a href="you-tube-abonnement.html">You tube abo</a>
                            <a href="toast.html">Notifications</a>
                            <a href="faq.html">Accordéon</a>
                            <a href="fiche-produit.html">Fiche produit</a>
                            <a href="posts.html">Posts</a>
                            <a href="formulaire.html">Formulaire</a>
                            <a href="todoList.html">TodoList</a>
                            <a href="artist-finder.html">Artist-finder</a>
                            <a href="formulaire-voyage.html">Voyages</a>
                            <a href="select-custom-with-jquery.html">Custom-Select</a>
                        </div>
                    </div>
                </div>
        
                <div class="navbar-desktop">
                    <a href="homepage.html">Accueil</a>
                    <a href="you-tube-abonnement.html">You tube abo</a>
                    <a href="toast.html">Notifications</a>
                    <a href="faq.html">Accordéon</a>
                    <a href="fiche-produit.html">Fiche produit</a>
                    <a href="posts.html">Posts</a>
                    <a href="formulaire.html">Formulaire</a>
                    <a href="todoList.html">TodoList</a>
                    <a href="artist-finder.html">Artist-finder</a>
                    <a href="formulaire-voyage.html">Voyages</a>
                    <a href="select-custom-with-jquery.html">Custom-Select</a>
                </div>
            </header>
        `
    }
};

//Appel de cette class et liaision avec lélement html "my-header" à cette classe
customElements.define('my-header', MyHeader);

//code js pour le fonctionnement de la navbar
const picto = document.querySelector('.navbar-mobile i');
const modal = document.querySelector('.modal');

picto.addEventListener('click', function () {
    modal.classList.toggle('modal-change');
    picto.classList.toggle('fa-times');
});
// Todo à chaque ajout d'un lien pointant vers une ancre, le scrollTo ANIME doit se faire de lui même
// si lien point vers un externe, pas d'animation sur le scrollTo

// 1 - boucler sur tous les <a> avec un href qui commence par # mais qui n'est pas # uniquement
// 2 - écouter l'event click sur ces liens
// 3 - ajouter un prevent default à l'écoute de l'event
// 4 - on récupère la valeur de chaque href pour en déduire l 'id de l'ancre cible
// 5 - on déclenche le scrollTo. On accepte l'option scroll-behavior: smooth, de la méthode js scrollTo

const links = document.querySelectorAll('a');

for(const link of links) {
    const linkVal = link.getAttribute("href");

    link.addEventListener('click', function (e) {
        e.preventDefault();

        if(linkVal === '#') {
            // console.log(linkVal)
            return;
        }

        // je récupère la position de la cible (l'id qui a la même valeur que celle du href linkVal
        const anchorCoordsX = document.querySelector(linkVal).offsetTop;

        window.scrollTo({
            top: anchorCoordsX,
            left: 0,
            behavior: 'smooth'
        });
    });
}


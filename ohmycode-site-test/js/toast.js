const btn = document.querySelector('.btn');
const notifications = document.querySelector('.notification-wrapper');

btn.addEventListener('click', function () {
    //Je crée un élément
    const notification = document.createElement('div');

    //Je lui donne un style
    notification.classList.add('toast');

    //Je lui insère un contenu (ici du texte)
    notification.innerText = 'Votre fichier a été enregistré.';

    //J'insère la div dans le Dom
    notifications.appendChild(notification);

    //ProgressBar-------------------------------------------------------
    const progressBar = document.createElement('progress');
    progressBar.classList.add('progressBar');

    //Je lui ajoute des attributs
    progressBar.setAttribute('value', '0');
    progressBar.setAttribute('max', '4');
    //J'insère la div dans le Dom

    notification.appendChild(progressBar);

    let timeleft = 4;
    downloadTimer = setInterval(function(){
        progressBar.value = 4 - timeleft;
        timeleft -= 1;
    }, 1000);


    // Après xxxs, la div est supprimée
    setTimeout(function () {
        notification.remove();
    }, 5000);
});


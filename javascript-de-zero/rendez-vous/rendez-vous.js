//Objectif : valider un rendez vous

/* PSEUDO CODE
déterminé une heure de début de renez-vous
déterminé les minutes de début de rendez-vous
déterminé une heure de fin de journée (heure minute)
déterminé les minutes de fin de journée (heure minute)
déterminé la durée en minute du rendez vous

calculer l'heure et la minute du rendez vous
    si le total en minute >= à 60mn (modulo de 60?), alors ajouter le résulat du nombre entier à l'heure de fin de rendez-vous
   calculer le nombre de minute restante
comparer l'heure de fin de journée à l'heure de fin de journée
si l'heure de fin de journée est inférieur ou égale à l'heure de fin de rendez vous
alors accepter le rendez
sinon le refuser
*/

/* calcul de temps restant si heure >60
 - calcul de l'heure à ajouter = hourRendezVous + entier de (minute/60)
 */


/* JS AVEC DES INPUTS-----------------------------------------------------------------------------------------------------------------------
*
* Créer un html avec des inputs pour saisir l'heure du début du rendez-vous, sa durée et l'heure de fin de journée
* Au clic sur le bouton 'valider', gérer les messages d'erreur sous ces inputs
* si tous les champs sont remplis, afficher le message de rendez ok ou pas possible,
* désactiver le bouton 'valider',
* afficher un bouton 'Prendre un nouveau rendez-vous'
*
*Au clic sur ce nouveau bouton,
* recharcher le formulaire (les champs doivent être vide),
* activer le bouton "Valider"
* masquer la réponse sous ce bouton
* masquer le bouton "Prendre un nouveau rendez-vous
*
* Afficher la liste des rendez-vous pris pour la journée
* */


//LES 3S
const startRdv = document.getElementById('start-appointement');
const duringRdv = document.getElementById('during-appointement');
const endDayElt = document.getElementById('end-day');
const inputElt = document.querySelectorAll('.inputElt');
const btnConfirm = document.getElementById('confirm');
const responseElt = document.querySelector('.response');
const btnNewAppointement = document.getElementById('new-appointement');
const listAppointements = document.querySelector('.list-appointements');
let arrayAppointements = [];


function convertHoursToMin(time) {
//    On split l'heure récupéree et on la convertir en minutes
    let timeSplit = time.split(':');
    let minutes = parseInt(timeSplit[0]*60) + parseInt(timeSplit[1]);
    return minutes;
};

function convertMinsToHrsMin(minutes) {
    let h = Math.floor((minutes / 60));
    let m = minutes % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return h + 'h' + m;
};

btnConfirm.addEventListener('click', function (e) {
    let startInputValue = startRdv.value;
    let startInMinutes = convertHoursToMin(startInputValue);
    let duringValue = parseInt(duringRdv.value);
    let endInputValue = endDayElt.value;
    let endDayInMinutes = convertHoursToMin(endInputValue);
    let endAppointementInMinutes = startInMinutes + duringValue;
    let objAppointement = {};

    e.preventDefault();

    //On push dans un tableau les rendez-vous pris----------------------------------

    objAppointement['start'] = convertMinsToHrsMin(startInMinutes);
    objAppointement['end'] = convertMinsToHrsMin(endAppointementInMinutes);

    arrayAppointements.push(objAppointement);
    console.log(arrayAppointements)

    //function qui affiche le message de confirmation, qui gère l'affichage des bouton
    function displayResponse() {
        if (endDayInMinutes >= endAppointementInMinutes) {
            responseElt.classList.remove('error');
            responseElt.innerHTML = `<p>Rendez-vous confirmé. Il se terminera à ${convertMinsToHrsMin(endAppointementInMinutes)}.</p>
                                    <p> Votre journée se termine à ${convertMinsToHrsMin(endDayInMinutes)}, 
                                        votre rendez vous se terminera à ${convertMinsToHrsMin(endAppointementInMinutes)}.</p>
                                    `;
            btnConfirm.disabled = true;
            btnNewAppointement.classList.add('active');

            displayListAppointement();
        } else {
            responseElt.classList.add('error');
            responseElt.innerHTML = `<p>Rendez-vous IMPOSSIBLE.</p>
                                    <p> Votre journée se termine à ${convertMinsToHrsMin(endDayInMinutes)}, 
                                        votre rendez vous se terminerait à ${convertMinsToHrsMin(endAppointementInMinutes)}.</p>
                                    `;
        };
    };

    //on gère les messages d'erreur du formulaire
    inputElt.forEach(item =>  {
        if (item.value === '') {
            item.nextElementSibling.innerText = "Vous devez saisir une valeur dans ce champ.";
        } else {
            item.nextElementSibling.innerText ='';
        }
    });

    if (startInputValue !='' && duringValue !='' &&  endInputValue !='') {
        displayResponse();
    };

});


//list des rendez-vous
function displayListAppointement() {
    listAppointements.classList.add('active');
    listAppointements.innerHTML ='';

    arrayAppointements.forEach(item => {
        let appointement = `
            <p>De : ${item.start} à ${item.end}</p>
    `;
        listAppointements.innerHTML += appointement;
    });
};

function resetForm() {
    document.querySelector("form").reset();
    btnConfirm.disabled = false;
    btnNewAppointement.classList.remove('active');
    responseElt.innerHTML = '';
}

btnNewAppointement.addEventListener('click', function () {
   resetForm();
});

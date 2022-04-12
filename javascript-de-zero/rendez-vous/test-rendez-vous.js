/* PSEUDO CODE
*
* Vérifier la prise d'un rendez-vous, selon 3 critères :
* -  le début du rendez-vous (h et min)
* - la durée du rendez-vous (en min)
* - la fin de notre jounrée (h et min)
*
* si la fin du rendez-vous se termine après la fin de journée, le rendez-vous est refusé
*
*
* POSER l'algorithme
*
* 1 - déclarer les variables (heure et min du rendez-vous, durée du rendez-vous, heure et min de fin de journée
* 2 - calculer la fin du rendez-vous (début rendez vous + durée) =>
* 3 - comparer la fin du rendez-vous à la fin de la journée, et si la fin rdv < fin journée => rdv OK
*   - sinon rdv Not ok
*   => 2 cas :
*     SI - heureFinRdv < heureFinJournée => OK
*     OU - heureFinRdv === heureFinJournée && minuteFinRdv < minuteFinJournée => OK
*
* 3 - gérer les cas spéciaux
*   - lorsqu'on ajoute les minutes à rendez-vous, la fin de rdv en min >= 60
*   => il faut ajouter +1 à l'heure de fin rendez-vous, et calculer les minutes restantes aux minutes de fin rdv
*
*
* */

// let hourRdv = 16;
// let minutesRdv = 30;
// let hoursEndD = 17;
// let minutesEndD = 30;
// let dureeMinutes = 15;

function validateRdv(hourRdv, minutesRdv, hoursEndD, minutesEndD, dureeMinutes) {
    minutesFinRdv = minutesRdv + dureeMinutes;

    //Gestion du cas particulier où les minutes sont <= 60
    while (minutesFinRdv >= 60) {
        hourRdv += 1;
        minutesFinRdv = minutesFinRdv - 60;
    };

    //on stocke la condition dans une variable. Cette variable aura pour valeur true ou false.
    let rdvOk = hourRdv < hoursEndD || (hourRdv === hoursEndD && minutesFinRdv < minutesEndD);

    if (rdvOk) {
        console.log('Rdv OK. fin RDV : ' + hourRdv + 'h' + minutesFinRdv + ' - fin journée : ', hoursEndD + 'h' + minutesEndD);
    } else {
        console.log('Rdv NOT ok. fin RDV : ' + hourRdv + 'h' + minutesFinRdv + ' - fin journée : ', hoursEndD + 'h' + minutesEndD);
    }
}

//calcul rendez-vous : debut rdv 14h30, fin de journée 18h, durée 40
validateRdv(14, 30, 18, 00, 40);


//boucle de test
for(let dureeMinutes = 1; dureeMinutes <= 300;  dureeMinutes = dureeMinutes+ 1) {
    validateRdv(14, 30, 18, 00, dureeMinutes);
}
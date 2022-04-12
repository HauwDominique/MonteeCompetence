// let compteur = 0;
//
// //while (on ne connait pas la valeur d'arrêt
// while (compteur < 3) {
//     console.log("compteur = ", compteur);
//     compteur +=1 ;
// }
// console.log('fin de compteur');
//
//
// let passage = 0;
// //Do while, on execute avant de boucler (ex pour vérification d'un mot de passe, on récupère le mdp saisi avant de le comparer
// do {
//     console.log('passage', passage);
//     passage += 1;
// } while (passage < 2);
// console.log('fin de passage');
//
// //la boucle for
// for(regarde = 0; regarde < 2; regarde++) {
//     console.log('++i = ', regarde);
//     console.log('regarde', regarde);
//     regarde += 1;
// }
// console.log('fin de regarde');
//
//
// //les boucles imbriquées
// let test = 0;
// while (test < 2) {
//     for(imbrique = 0; imbrique < 3; imbrique++) {
//         console.log('test : ', test + ' / imbrique : ', imbrique);
//     }
//     test ++;
// }

let line = 1;
let star = '';
while(line < 4) {
    for(colonne = 1; colonne < 4; colonne++) {
        star += '*';
        console.log('star', star);
    }
    line++;
}

// let lineBis = 1;
// let starBis = '';
// while(lineBis <= 4) {
//     for(colonne = 0; colonne < lineBis; colonne++) {
//         starBis += '*';
//         console.log('starBis', starBis);
//     }
//     lineBis++;
// }

//instruction Break => permet d'arrêter la boucle lorsqu'une condition est true
let compteur = 0;
while (compteur < 42) {
    if(compteur > 18) {
        break;
    }
    compteur += 10;
    console.log('compteur = ', compteur);
}
console.log('fin de boucle grâce à break');

//instruction 'continue', si elle est à true, on passe à l'itération suivante de la boucle, sans jouer le code suivant
// (ici le console.log('count') n'est pas joué lorsque la condition if est à true => console.log de count = 20 ne s'affichera pas, mais le count = 30 si
let count = 0;
while (count < 40) {
    count += 10;
    if (count === 20) {
        continue;
    }
    console.log('count = ', count);
}
console.log('fin de boucle avec continue');
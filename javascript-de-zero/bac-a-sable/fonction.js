console.log('avant la déclaration');

// déclarer une fonction
function maFunction() {
    console.log('instruction 1');
    console.log('instruction 2');
}

console.log('après la déclaration');

//Appel de la fonction
maFunction();

console.log("après l'appel de la funtion");

//sans return
function calculPrixTTC(prix, tva) {
    prix * (1 + tva / 100);
}
console.log('prix TTC : ', calculPrixTTC(10, 20));
// => undefined

function calculPrixReturn(prix, tva) {
    return prix + (1 * tva / 100);
}
console.log('calculPrixReturn :', calculPrixReturn(10, 30));

//avec une variable dans la fonction
function calculatePriceVariableInFct(price, taxe) {
    let result = price + (1 * taxe/100);
    return result;
};
console.log('calculatePriceVariableInFct : ', calculatePriceVariableInFct(10, 40));

//Avec écrasement d'une variable globale
let totalPrice;
function calculateTotalPrice(price, taxe) {
    totalPrice = price + (1 * taxe / 100);
}

calculateTotalPrice(10, 50);
console.log('calculateTotalPrice : ', totalPrice)
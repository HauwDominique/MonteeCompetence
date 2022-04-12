// let totalHT = 0;
// let totalTVA = 0;
// let totalTTC = 0;
// console.log("------ Liste d'articles --------");
//
// console.log("Chocolat chaud : " + 2 + " €");
// totalHT = totalHT + 2;
// totalTVA = totalTVA + 2 * 20 / 100;
//
// console.log("Tarte aux pommes : " + 5 + " €");
// totalHT = totalHT + 5;
// totalTVA = totalTVA + 5 * 20 / 100;
//
// console.log("------------ Montant total -----------------");
// totalTTC = totalHT + totalTVA;
// console.log("Net à payer : ", + totalTTC + " €");
// console.log("Dont TVA : ", + totalTVA + " €");


let totalHT = 0;
let totalTVA = 0;
let totalTTC = 0;
let priceChocolatChaud = 2;
let priceTarteAuxPommes = 5;

function writeTitle(title) {
    console.log("------" + title + "--------");
}

function writeArticle(articleName, priceHT){
    console.log(articleName + ' : ' + priceHT + " €");
}

function calculateTVA(priceHT) {
    const tvaInPourcent = 20;
    return priceHT  * tvaInPourcent / 100;
}

writeTitle("Liste d'articles");

writeArticle("pain au chocolat", priceChocolatChaud);
totalHT = totalHT + priceChocolatChaud;
totalTVA = totalTVA + calculateTVA(priceChocolatChaud);
// console.log('totalTVA -> ', totalTVA);

writeArticle("tart aux pommes", priceTarteAuxPommes);
totalHT = totalHT + priceTarteAuxPommes;
totalTVA = totalTVA + calculateTVA(priceTarteAuxPommes);
// console.log('totalTVA -> ', totalTVA);

writeTitle("Montant total");

totalTTC = totalHT + totalTVA;
console.log('Net à payer : ' + totalTTC + ' €');
console.log('(dont total tva : ' + totalTVA + ' €)');
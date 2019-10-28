

// Muutujad

// var
// muutujate defineerimine
var nimi = 'Anna'; // defineerimine
console.log(nimi);
nimi = 'Katrin'; // väärtuse omistamine
console.log(nimi);

// muutujate initsialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'Tere tulemast!';
console.log(tervitus);

// liitnimede kasutamine
var eesNimi = 'Anna'; // Camel Stiil
var ees_nimi = 'Anna'; // PHP Stiil
var EesNimi = 'Anna'; // Pascal Stiil
var eesnimi = 'Anna';

// let - muutuja
let pereNimi = 'Karutina';
console.log(pereNimi);
pereNimi = '?????';
console.log(pereNimi);

// const - konstant
const minuEesNimi = 'Anna';
console.log(minuEesNimi);
// minuEesNimi = 'Katrin';

// const kasutamise näide 1
const inimene = {nimi : 'Katrin', vanus : 20};
// inimene = {nimi: 'Katrin', rahvus: 'eestlane'};
console.table(inimene);
inimene.vanus = 21;
console.table(inimene);

// const kasutamine näide 2
const arvud = [1, 2, 3, 4, 5];
// arvud = [1, 2, 3, 4, 5, 6];
console.log(arvud);
arvud.push(6);
console.log(arvud);






// Tsüklid

// while
// eelkontrolliga tsükkel
let number = 5; // defineerime numbri
// defineerime jagaja algväärtuse
let jagaja = 2;

while(arv % jagaja != 0){
    jagaja++;
}
if(arv == jagaja) {
    console.log(arv + ' on algarv');
} else {
    console.log(arv + ' ei ole algarv');
}

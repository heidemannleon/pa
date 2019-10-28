

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



// näiteprogrammid
 // !=  ei võrdu



// näiteprogrammid 1
if (sisestatud_pin == "1234") {
    console.log('Sisenesid pangaautomaati!');
} else {
    console.error('Vale parool! Ligipääs keelatud!');
}

// näiteprogrammid 2

let vastus = ['0' + '0' + '7'];
if (vastus = '007') {
    console.log('On võrdsed!');
} else {
    console.error('Ei ole võrdsed!');
}

// näiteprogrammid 3
console.log('Kui vana oled');
let vanus = ;






// tsüklid

// for tsükkel
// ehk üldtsükkel

let arv;
for(arv = 1; arv <= 10; arv++)({
    if(arv < 10) {
    console.log('arv = ' + arv);
} else {
    console.log('arv = ' + arv);
}
}


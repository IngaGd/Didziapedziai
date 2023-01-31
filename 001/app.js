//console.log('Hello');

//sukurti masyva is 10 elementu. kiekvienas masyvo elementas yra atsitiktinis skaicius nuo 1 iki 10,
//masyva atspausdinti konsoleje

function arrRandom() {
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 10 + 1);;
    }

    return arr;
}

console.log(arrRandom());


//Desrytojo sprendimas:

//2

const arr2 = [...Array(10)].map(_ => parseInt(Math.random() * 10) + 1);
//spread, anonimine arrow f-ja ir map. _ underskoras - sintaksinis kintamasis, kurio reiksme mums nereikalinga
//gale +1, nes skaiciu panaudojo parseInt, paima tik sveikaja dali
console.log(arr2);

let a;
const genDigit = parseInt(Math.random() * 10 + 1);

if (genDigit > 5) {
    a = 'A';
} else {
    a = 'B';
}

let b = genDigit > 5 ? 'A' : 'B';
console.log(a, b);

//map filter reduce
//spread rest
// visur, kur tik imanoma naudojam const, kur negalima, let

let racoons = 5; // yra false boolean. 

if (racoons - 5) {
    console.log('yes');
} else {
    console.log('no');
}

let racoons2 = 'Labas'; // '' - tuscias string yra false boolean. 

if (racoons2) {
    console.log('yes');
} else {
    console.log('no');
}

let racoons3 = {}; // objektas visada true, net ir tuscias

if (racoons3) {
    console.log('yes');
} else {
    console.log('no');
}

//neegzistuojantis pobjektas js yra null-as, objekto tipas, reiskia, kad objekto nera, konvertuojasi i false
let racoons4 = null;

if (racoons3) {
    console.log('yes');
} else {
    console.log('no');
}

//undefined - neapsisprendes kintamasis, kuo nori buti, 
//if-e paverciamas i false

//NaN taip pat false rez
let racoons5 = 'a';
racoons5 = 5
console.log(racoons5);

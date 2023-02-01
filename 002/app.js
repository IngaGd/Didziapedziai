console.log('hello');

const r = document.querySelector('h1');
console.log(r);

// && ir || - vercia duomenu tipa i logini, 
//viskas vyksta mintyse, tiesiogionio ats nebuna

const a = 7;
const b = 5;
console.log('a && b', a && b);
console.log('a || b', a || b);

/*
    T && T => T
    T && F => F

    shortcut
    F && T => F
    F && F => F
 */

/*
    F || T => T
    F || F => F

    shortcut
    T || T => T
    T || F => T
*/

const D = 0; //turime sk, norime stringo
const SD = '' + D;
console.log(typeof D, '=>', typeof SD);

const S = '88';// norim is string padarysi sk
const DS = +D;
console.log(typeof S, '=>', typeof DS);

const L1 = !!D;// du kartus neigiame
const L2 = !!S;
console.log(L1, L2);
console.clear();

console.log(`
------------
`);
// kvietimas, cia vykdoma f-ja
sayHello();

// funkcijos deklaravimas, nevykdomas, kol neiskvieciama
function sayHello() {
    console.log('Labas');
}
// iskvietimas:
sayHello();

// anonimines f-jos, f-jos be vardo,
// kad jas iskviesti priskiriam kintamajam
// f-jos rezltatas yra tai, ka mes grazinam is funkcijos (return)

const sayLabas = function () {
    console.log('Hey there');
    return 'va taip va';
}
//sayLabas();
//console.log(sayLabas);
//console.log(sayLabas());

const varRun = sayLabas();
const vaNotRun = sayLabas; //f-ja nepaleidziama, bet galim is kviesti uzdeje 
//skliaustelius ant vaNotRun
console.log(varRun, vaNotRun());

const fun = function () {
    console.log('one');
    return function () {
        console.log('two');
        return function () {
            console.log('three');
        }
    }
}

//const makeFun = fun()(); //paleidzia visas tris
//makeFun();// paleidzia fun

//kitaip tas pats rez:
//const makeFun = fun();
//makeFun()();

//dar kitap tas pats rez:
const makeFun = fun;
makeFun()()();

//anonimine f-ja gali buti paversta i arrow
const Hi_1 = function () {
    return 'va taip';
}

//arrow (jei zodelis this egzistuoja, paveldi ji is aukstesnio scope):
const Hi_2 = () => {
    return 'va taip';
}

// ta pati f-ja uzrasopma viena eilute, tas pats return
const Hi_3 = () => 'va taip';

// hipsterinir variantas :) Jei anonimine f-ja turi viena parametra,
// mes ji galime rasyti be skliausteliu
const Hi_4 = _ => 'va taip';
console.log(Hi_4);

//kitas pvz:
const Hi_5 = s => 'va taip';
console.log(Hi_5());

//perdarom fun funkcija:
const tooFun = () => () => () => console.log('three');
tooFun()()();

const funFun = (a, b) => {
    console.log(a * b);
}

const _15 = 15;

//argumentai:
funFun(8, _15);

//gali buti ppriskirta default reiksme, taciau ja galim overridint,
//pvz priskiriant kintamojo _15 reiksme

const funFun2 = (a, b = 100) => {
    console.log(a * b);
}
//argumentai:
funFun2(8);

console.clear();

const animals = [
    'racoon',
    'beaver',
    'moose'
];

const colors = [
    'pink',
    'crimson',
    'skyblue'
];

const addStars = word => console.log('* ' + word + ' *');
const addPluses = word => console.log('+ ' + word + ' +');
//ilgesnis kodas:
//for (let i = 0; i < animals.length; i++) {
//    addStars(animals[i]);
//}

//for (let i = 0; i < animals.length; i++) {
//    addStars(colors[i]);
//}

//trumpesnis
//pirmas parametras, ka mes norime iteruoti,
// antras callback f-ja
// for each iteratorius
const iterator = (what, fun) => {
    for (let i = 0; i < animals.length; i++) {
        fun(what[i]);
    }
}
iterator(animals, addStars);
iterator(colors, addStars);

//dar kitaip:
animals.forEach(addStars);
colors.forEach(addPluses);

//dar labiau supaprastintai:
colors.forEach(word => console.log('+ ' + word + ' +'));

colors.forEach((word, index) => console.log(word, index));

//JS masyvas yra objektas. Vienas is objekto potipiu yra masyvas. 
animals.push('bird'); // prideda i gala masyvo
animals.unshift('mouse', 'fox', 'wolf', 'rabbit'); //lipina priekyje masyvo, 
//geriau nenaudoti, ilgiau vekia, nes visus reikia perkelti vienu aukstui:)
//animals.pop('bird'); //issimam is virsutinio auksto
//animals.shift(); //isimam is rusio
//console.table(animals);
animals.unshift(...colors, ...animals);
console.log(animals);

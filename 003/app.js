const A = [
    'a',
    'b',
    'c'
];
const B = A;// priskiriamas A masyvas, taciau nepadaro dvieju, tiesgiog,
//kad dabar galime kreiptis dviem vardais i ji.

B.push('d');

console.log(A, B);

//kopijos padarymas:
const C = [...A];

//state keisti negalima. jei state kazka padarem tiesiogiai, 
//viskas, mire :) su kopija galime daryti viska, ka norim
//pvz slice() metodas kopijuoja

//kiekvienas specialus objektas (pvz map) buna prishertas metodais

//objektas yra pagamintas, mes padarom jam prototipa, 
//papildom ji metodu. pvz, kaip i array objekta ideti
//savo norima savybe:
Array.prototype.go = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
}
const addStars = word => console.log('* ' + word + ' *');
B.go(addStars);

B.forEach(l => console.log(l)); // foreach neturi return, neduoda rez
B.map(l => console.log(l)); // console.log nieko negrazina

const mr = B.map(l => l);// map grazina nauja kopija, nekeicia dydzio
const mr2 = B.map(l => l + '---->');
console.log(mr2);

const animals = [
    'racoon',
    'Fox',
    'beaver',
    'Moose',
    'fox',
];


//REACT imitacija, ka daro PROGRAMER
const out = animals.map(a => '<i style="color: crimson; display: block;">' + a + '</i>');
//REACT INSIDE (ka dar reacto vidus):
let html = '';
out.forEach(a => html += a);
document.querySelector('h1').innerHTML = html;

// filter:
B.push('');
console.log(B);
const mr3 = B.filter(l => l);
console.log(mr3);// jei true, deda i filtruota masyva, 
//jei false, nededa

const filtered = animals.filter(l => l.length > 4);
console.log(filtered);
//trinimas is masyvo:
const deleting = animals.filter(l => l != 'beaver').map(l => l + ' *');
console.log(deleting);

// push ir sort nekuria kopijos, keicia originala, negalimas ant state
console.log([...animals, 'wolf'].sort());

console.clear();
const an = [...animals];
//duoda du elementus, turim jam pasakyti, ar ta tvarka mus tenkina
//atsakyti teigiamu sk, jei netenkina, neigiamu sk, jei dzin - 0
//an.sort((a, b) => {
//    if (a > b) return -1;
//    if (a < b) return 1;
//    if (a = b) return 0;
//})
an.sort((a, b) => b.localeCompare(a));
console.log(an);

const dig = [88, 34, 10, 158, 1];
dig.sort((a, b) => b - a);
console.log(dig);

//paprastas objektas:
const man = {};
man.name = 'John';
man.surname = 'Smith';

//const man2 = man; //tas pats zmogus, tik su dviem vardais
//darom kopija:
const man2 = { ...man };
man2.name = 'Fiodor';
console.log(man, man2);

const man3 = {
    name: 'Petras',
    surname: 'Lioliovas'
}
console.log(man, man2, man3);

const name = 'Lina';
const surname = 'Lioliovė';

//const man4 = {
//    name: name,
//    surname: surname
//}
//supaprastinam:
const man4 = {
    name,
    surname
}
console.log(man, man2, man3, man4);

//sakykim savybe 'surname' yra dinamiska, kaitaliojasi
const prop = 'surname';

const man5 = {}
man5.name = 'Bronius';
man5[prop] = 'Kisas';//sitaip uzrasant nueis surname, ne prop
console.log(man, man2, man3, man4, man5);

console.clear();
const house = [man, man2, man3, man4, man5];
//console.log(house);//gaunam masyva nama su objektais - zmonemis

house.sort((a, b) => {
    if (a.surname < b.surname) return 1;
    if (a.surname > b.surname) return -1;
    //jei pavardes vienodos, rusiuojam pagal varda:
    if (a.name < b.name) return 1;
    if (a.name > b.name) return 1;
    //ir vardai vienodi
    return 0;
})
console.log(house);
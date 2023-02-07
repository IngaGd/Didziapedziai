//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29),
//kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const arr = [...Array(30)].map(_ => (parseInt(Math.random() * (26 - 5)) + 5));
console.log(arr);

//Naudodamiesi 1 uždavinio masyvu:
//a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

const arr2 = arr.filter(n => n > 10).length;
console.log(arr2);

//b) Raskite didžiausią masyvo reikšmę ir jos indeksą;
const max = Math.max(...arr);
console.log(max);

const maxNumAndIndex = arr.indexOf(Math.max(...arr));
console.log(maxNumAndIndex);

//c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
const arr3 = arr.filter(n => n % 2 === 0).length;
console.log(arr3);

//d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const arr4 = [...arr].map((el, index) => el - index);
console.log('arr4', arr4);

//e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, 
//kad bendras masyvas padidėtų iki indekso 39;
//const newItems = [...Array(10)].map(_ => (parseInt(Math.random() * (26 - 5)) + 5));
const newArr = [...arr, ...[...Array(10)].map(_ => (parseInt(Math.random() * (26 - 5)) + 5))];
console.log(newArr);

//f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, 
// o kitas iš porinių (pagal neporinį - porinį indeksą, ne reikšmę);

const arrEvenIndex = [...newArr].filter((el, index) => index % 2 === 0 ? el : 0);
console.log('arrEvenIndex', arrEvenIndex);
const arrOddIndex = [...newArr].filter((el, index) => index % 2 !== 0 ? el : 0);
console.log('arrOddIndex', arrOddIndex);
//g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
const arr5 = [...arrEvenIndex].map(n => n <= 15 ? n : 0);
console.log(arr5);

//h) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
for (const [i, num] of arr5.entries()) {
    if (num > 10) {
        console.log('pirmas indexas skaiciaus > 10:', i);
        break;
    }
}
const index = [...arr5].filter((el, i) => el > 10 ? console.log(i) : 0);

// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. 

//Array.from({ length: 5 }, (v, i) => i);
const l = ['A', 'B', 'C', 'D'];
const arr6 = Array.from({ length: 200 }, () => l[Math.floor(Math.random() * l.length)]);
console.log(arr6);

//Suskaičiuokite kiek yra kiekvienos raidės.
const countA = arr6.filter((el) => el === 'A' ? el : 0).length;
const countB = arr6.filter((el) => el === 'B' ? el : 0).length;
const countC = arr6.filter((el) => el === 'C' ? el : 0).length;
const countD = arr6.filter((el) => el === 'D' ? el : 0).length;
console.log('A sum:', countA, 'B sum:', countB, 'C sum:', countC, 'D sum:', countD);

//4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą.Sudėkite masyvus, sudėdami atitinkamas reikšmes.
//Paskaičiuokite kiek unikalių(po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.


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


//e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, 
//kad bendras masyvas padidėtų iki indekso 39;
//const newItems = [...Array(10)].map(_ => (parseInt(Math.random() * (26 - 5)) + 5));
const newArr = [...arr, ...[...Array(10)].map(_ => (parseInt(Math.random() * (26 - 5)) + 5))];
console.log(newArr);

//f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, 
// o kitas iš porinių (pagal neporinį - porinį indeksą, ne reikšmę);

let arrEvenIndex = [];
let arrOddIndex = [];
for (let i = 0; i < newArr.length; i++) {
    if (i % 2 === 0) {
        arrEvenIndex.push(newArr[i]);
    } else {
        arrOddIndex.push(newArr[i]);
    }
}
console.log(arrEvenIndex);
console.log(arrOddIndex);

//g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
const arr5 = arrEvenIndex.map(n => n <= 15 ? n : 0);
console.log(arr5);

//h) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;


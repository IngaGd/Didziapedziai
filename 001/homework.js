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
console.log('Hi 5');

let color = 'skyblue';

localStorage.setItem('myFavoritColor', color); //pridedam i console local storage
localStorage.removeItem('myFavoritColor'); //istrinam

console.log(localStorage.getItem('myFavoritColor'));

//local storage reikalingas, kad nustatymai nepasikeitinetu kas karta
// perkrovus puslapi

// objektai

const obj = {};
const arr = [];
const map = new Map();
console.log(obj);
console.log(arr);
console.log(map);

//custom objektas:
//1) sukuriamas objekto planas, t.y. klase
//jei planuojam priskirti kazkokius propercius, reikia 
//pradeti nuo konstruktoriaus aprasymo


//tevine klase
class SayName {

    static voice = 'big one';

    static whatIsYourVoice() {//patikrinamas tik kvieciant per klases
        return this.voice;
    }

    whatIsYourVoiceNotStatic() {//galima naudoti su objektas
        return this.constructor.voice;
    }

    constructor() {
        this.papers = 'Yes';
    }

    whatIsYourName() {
        return this.name;
    }
}

//vaika paveldi tevo metoda
class Cat extends SayName {

    static voice = 'small one';

    constructor(name, color) {
        super(); //kuriant reikia paleisti tevo konstruktoriu tokiu budu
        //super sakome i viena klase auksciau (sunus sako tevui, tevas seneliui)
        this.name = name;
        this.color = color;
        this.age = parseInt(Math.random() * 10 + 1);
    }

    whatIsYourName() {
        return 'Miau'; //overridina tevo metoda
    }

}

class Dog extends SayName {

    constructor(name) {
        super();
        this.name = name;
        this.age = parseInt(Math.random() * 15 + 1);
        this.papers = 'No';//overrridini tevo construktoriaus reiksme
    }

}

const murka = new Cat('Mūrka', 'pilkis');
const brisius = new Dog('Brisius');

console.log(murka, brisius);
console.log(brisius.whatIsYourName());
console.log(murka.whatIsYourName());

console.log(Cat.voice);//norint pakeisti statine savybe, reikia parsyti klases varda
console.log(Dog.voice);
console.log(Cat.whatIsYourVoice());
console.log(Dog.whatIsYourVoice());
//objektas neturi statinio metodo, norint paklausineti statiniu savybiu,
//reikia kreiptis i kalse
console.log(murka.whatIsYourVoiceNotStatic());
console.log(brisius.whatIsYourVoiceNotStatic());
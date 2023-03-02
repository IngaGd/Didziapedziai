import { useEffect } from "react";
import { useState, useRef } from "react";
import Fenix from "./Fenix";

function Counter() {

    //komponentas kaip funkcija gali buti iskvieciama daugybe kartu

    //life-cicle:
    //1. komponento gimimas, kai pirma karta idedamas i DOM
    //2. komponentas mirsta, kai komponenta isnaikinam (pvz istrintas kvadratukas), sinykimas is DOM'o, t.y. 
    // vaizdo

    console.log('Counter function');

    const a = useRef(1); //useRef gali buti naudojamas kaip paprastas kintamasis, jo poklytis neissaukia komponento
    //perkrovimo (gali pabuti paprastu kintamuoju, pvz vietoj let a = 1)
    const start = useRef(false);

    const [count, setCount] = useState(1);
    const [stars, setStars] = useState(''); // kiek yra count, tiek nupiesiama zvaigzduciu

    // const fun = _ => {

    // }

    // useEffect(() => {
    //     console.log('FUN');
    //     fun();
    // }, []);

    //si useEfect uzprogramuotas stebejimui count, kai count pasikeicia, pasileidzia nurodoma funkcija
    //pasileidzia ir tada, kai prasideda komponento lifecicle, nebent nurodome, kad nereikia paleisti is karto
    //su start.current salygom

    useEffect(() => {
        if (start.current) {
            console.log('count change');
        }  else {
            start.current = true;
        }  

    }, [count]); //masyvas, kuriame yra priklausomybes/dependensiai, dependensiuose turi buti irasyti visi state,
    //kurie yra panaudoti sioje funkcijoje

    useEffect(() => {
        setStars(''.padStart(count, '*'));//cia pravercia, kad count prasisuka ir pirma karta uzsikrovus komponentui
    }, [count]); //jei neirasom visu, isbalansuojam rekto asinchronini veikima, taciau reikia ziureti, kad neuzsiciklintu

    const add = _ => {
        setCount(c => c + 1);
        //setStars(''.padStart(count, '*'));
    }

    const remove = _ => {
        setCount(c => c - 1);
        //setStars(''.padStart(count, '*'));        
    }
    
    const addToVar = _ => {
        console.log(++a.current); // visada prideti current savybe, nes konctantos keisti negalime, su
        //kurent galime deti bet ka, kad ir objekta ir ji keisti. 
    }


    return (
        <>
        <h1>{count}</h1>
        <h2>{stars}</h2>
        {
            count > 15 ? <Fenix/> : null
        }
        <div className="sq-bin">
            <button className="blue" onClick={add}>+1</button>
            <button className="red" onClick={remove}>-1</button>
            <button className="coral" onClick={addToVar}>+1</button>                                    
        </div>
        </>
    )
}

export default Counter;
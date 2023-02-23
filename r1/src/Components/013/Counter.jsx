import { useEffect } from "react";
import { useState, useRef } from "react";
import Fenix from "./Fenix";

function Counter() {

    //komponentas kaip funkcija gali buti iskvieciama daugybe kartu

    //life-cicle:
    //1. kompinento gimimas, kai pirm1 karta idedamas i DOM
    //2. kompinentas mirsta, kai komponenta isnaikinam (pvz istrintas kvadratukas), sinykimas is DOM'o, t.y. 
    // vaizdo

    console.log('Counter function');

    const a = useRef(1); //useRef gali buti naudojamas kaip paprastas kintamasis, jo perkrovimas neissaukia komponento
    //perkrovimo
    const start = useRef(false);

    const [count, setCount] = useState(0);
    const [stars, setStars] = useState(''); // kiek yra count, tiek nupiesiama zvaigzduciu

    // const fun = _ => {

    // }

    // useEffect(() => {
    //     console.log('FUN');
    //     fun();
    // }, []);

    useEffect(() => {
        if (start.current) {
            console.log('count change');
        }  else {
            start.current = true;
        }  

    }, [count]); //masyvas, kuriame yra priklausomybes/dependensiai

    useEffect(() => {
        setStars(''.padStart(count, '*'));
    }, [count]);

    const add = _ => {
        setCount(c => c + 1);
        //setStars(''.padStart(count, '*'));
    }

    const remove = _ => {
        setCount(c => c - 1);
        //setStars(''.padStart(count, '*'));        
    }
    
    const addToVar = _ => {
        console.log(++a.current); // visada prideti current savybe
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
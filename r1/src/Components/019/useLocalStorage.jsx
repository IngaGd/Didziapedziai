import { useEffect } from "react";
import { useState } from "react";



export const useLocalStorage = (lsKey, init) => { //pries irasant reiksme, pradine useState reiksme yra tokia, kokia
    //jis gauna is local storage, todel pries irasant reiksme, reikia nueiti i local storage ir ja pasiimti.
    //Nirint nueiti i localstorage, dar reikia localstorage keyjaus - lsKey.

    const [value, setValue] = useState(() => {
        const data = localStorage.getItem(lsKey);
        return null === data ? init : JSON.parse(data); //jeu null === data (t.y. localstorage tuscias),
        //grazinam pradine reiksme, kurios norime (init), jei ne tuscias, grazinam suparsindami data
    });

    useEffect(() => {
        localStorage.setItem(lsKey, JSON.stringify(value)); //irasome i localstorage pasikeitusia reiksme
    }, [value, lsKey]); //dedam lsKey i dependensius, nes jis nesikaitalioja, yra stringas is esmes

    return [value, setValue];

}

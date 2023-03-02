import { useEffect } from "react";
import Timer from './Timer';

function Fenix() {

    useEffect( //nurodom funkcijas, kurias norim paleisti, plius dependensius (masyvus)
                // funkcija paleidziama, kada komponentas yra sukuriamas
        () => { // visa funkcija, kuri susidaro is dvieju daliu, ka daro, kai komponentas uzsikrauna ir, 
            //ka daro, kai komponentas insyksta
            console.log('Fenix is alive');
            return () => {
                console.log('Fenix is dead');
            }
        },

        [] // tuscias masyvas reikalingas sekti life cicle
    )

    return (
        <>
        <h2>FENIX</h2>
        <Timer />
        </>

    );
}

export default Fenix;
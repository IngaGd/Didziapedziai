import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/dices';

export const useDataList = init => {

    const [list, setList] = useState(init);
    const [lastUpdate, setLastUpdate] = useState(Date.now());//1. setinam last update. 2. pakeiciam lastUpdate

    //aiskumo delei setLastUpdate ivyniojam i funkcija, kad nerasineti pastoviai Date.now():
    // const update = _ => {
    //     setLastUpdate(Date.now());
    // }

    useEffect(() => {
        axios.get(URL) //pakeistas lastUpdate sugeneruoja sita
            .then(res => { //sitas kreipiasi i serveri
                setList(res.data); //gauna lista is serverio, ji pasetina i list kintamaji, 
                //paskui ta list kintamaji mes tolyn persiduodam
            });
    }, [lastUpdate, setLastUpdate]);



    return [list, setLastUpdate];
}
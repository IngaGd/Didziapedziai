import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/dices';

export const useDataDelete = init => {

    const [response, setResponse] = useState(null);
    const [data, setData] = useState(init); //pasetinam i si custom hook delete objekta, kuri norime istrinti 
    //ir po kurio laiko state pasikeicia i serverio ats.
    //cia setData pakeicia data

    useEffect(() => {
        if (null === data) {
            return;
        }
        axios.delete(URL + '/' + data.id) //data issiuncia delete requesta i serveri, serveris istrina 
            .then(res => {
                setResponse(res.data); //serveris istrines atsiuncia atsakyma, ji isirasopme i setResponse ir 
                //grazinam respone apacioj
            });

    }, [data]);

    return [response, setData];
}
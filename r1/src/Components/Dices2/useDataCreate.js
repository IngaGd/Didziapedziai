import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/dices';

export const useDataCreate = init => {

    const [response, setResponse] = useState(null);
    const [data, setData] = useState(init);//data - duomenys, kuriuos siunciam i serveri, kai paklinkinam


    useEffect(() => {
        if (null === data) {
            return;
        }
        axios.post(URL, data) //kai creatinam, dedam be id, nes jis dar nera sukurtas
            .then(res => { //pakeitus state, prabunda si funkcija, i serveri issiunciami duomenys
                setResponse(res.data); //serveris atsako, jo ats idedam i response kintamaji
            });

    }, [data]);

    return [response, setData];
}
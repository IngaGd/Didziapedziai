import { useEffect } from "react";
import { useState } from "react"


export const useAdd23 = init => { // init - pradine reiksme nuo kurios prades pridedinet

    const [value, setValue] = useState(init);
    const [status, setStatus] = useState(true);


    useEffect(() => {
        setValue(v => v + 23); //cia uzfiksuojame matematika, kuri yra atliekama
        //skirta prie pradinio state prideti 23
    }, [status])

    //seteris ne tos reiksmes
    return [value, setStatus]

}
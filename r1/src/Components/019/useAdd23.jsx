import { useEffect } from "react";
import { useState } from "react"


export const useAdd23 = init => { // init - pradine reiksme nuo kurios prades pridedinet

    const [value, setValue] = useState(init);
    const [status, setStatus] = useState(true); //set status kontroliuoja c => !c, t.y. c bus tai true tai false,
    //status bus tai true tai false.


    useEffect(() => {
        setValue(v => v + 23); //cia uzfiksuojame matematika, kuri yra atliekama
        //skirta prie pradinio state prideti 23. status pokytis issauks sios funkcijos veikima
    }, [status])

    //seteris ne tos reiksmes
    return [value, setStatus]

}
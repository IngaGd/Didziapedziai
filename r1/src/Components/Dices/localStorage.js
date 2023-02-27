import { v4 as uuidv4 } from 'uuid';

// irasymas i duomenu baze
const write = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

//skaitymas:

export const read = key => {
    const data = localStorage.getItem(key);
    if (null === data) {
        return [];
    }
    return JSON.parse(data);
}

export const create = (key, data) => {
    const allData = read(key); //nuskaitom is localstorage
    data.id = uuidv4();//papildom atsiustus duomenis unikaliu identifikatorium id
    allData.push(data); // i nuskaitytus duomenis pridedam atsiusta
    write(key, allData); // ir vel viska irasome i localStorage
}
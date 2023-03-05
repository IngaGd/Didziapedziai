import { v4 as uuidv4 } from 'uuid';

const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const readData = key => {
    const data = localStorage.getItem(key);
    if (null === data) {
        return [];
    }
    return JSON.parse(data);
}

export const create = (key, data) => {
    const allData = readData(key);
    data.id = uuidv4();
    allData.push(data);
    saveData(key, allData);
}
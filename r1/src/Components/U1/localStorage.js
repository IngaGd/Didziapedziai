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

export const erase = (key, id) => {
    const allData = readData(key);
    const deleteAccount = allData.filter(a => id !== a.id);
    saveData(key, deleteAccount);
}

export const edit = (key, data, id) => {
    const allData = readData(key);
    const editAccount = allData.map(a => id === a.id ? { ...a, ...data, id } : { ...a });
    saveData(key, editAccount);
}
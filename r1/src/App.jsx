import { useEffect } from 'react';
import { useState } from 'react';
import Create from './Components/Dices/Create';
import List from './Components/Dices/List';
import { create, read, destroy } from './Components/Dices/localStorage';
import './Components/Dices/style.scss';


const KEY = 'FancyDices'; //konstanya, setingsas

function App() {


    // susikuriam state, kuri pavadinam createData, i data state idesim duomenis
    const [createData, setCreateData] = useState(null);

    //duomenys listui:
    const [list, setList] = useState(null);

    //state naudojamas, kad atsirastu daisai is karto paspaudis, on ne refreshinant
    const [lastUpdate, setLastUpdate] = useState(Date.now()); //updatinam dabar

    const [deleteModal, setDeleteModal] = useState(null);

    const [deleteData, setDeleteData] = useState(null);


    //kai uzsirkauna aplikacija ivyksta useEffect, pasikreipiam i localstorage ir gaunam visus daisus:
    useEffect(() => {

        //setTimeout(() => setList(read(KEY)), 1000) //uzlaikymas 1 sekunde

        setList(read(KEY));

    }, [lastUpdate]); //priklausomybe nuo lastupdate, jei pasikeis lastupdate time i kita, tai suveiks 
    //sis useEffect ir parsius nauja update'inta lista. LasteUpdate tai yra laikas, kuris reikalauja update
    //cia pat

    //reikia stebeti, kada pasikeicia createData:
    useEffect(() => {
        if (null === createData) { // jei null = createData, tada nieko nedarom
            return;
        }
        //jei ne:
        create(KEY, createData);
        setLastUpdate(Date.now());
    }, [createData])


    useEffect(() => {
        if (null === deleteData) { // jei null = deleteData, tada nieko nedarom
            return;
        }
        //jei ne:
        destroy(KEY, deleteData.id);
        setLastUpdate(Date.now());
    }, [deleteData])


    return (
        <>
            <div className='dices'>
                <div className='content'>
                    <div className='left'>
                        <Create setCreateData={setCreateData}/>
                        {/* perduodam duomenis */}
                    </div>
                    <div className='right'>
                        <List 
                        list={list} 
                        setDeleteModal={setDeleteModal} 
                        deleteModal={deleteModal}
                        setDeleteData={setDeleteData}
                        />
                    </div>
                </div>
            </div>
        </>
    );

}

export default App; 
import { useState, useEffect } from 'react';
import { create, readData } from './Components/U1/localStorage';
import './Components/U1/style.scss';

import CreateAccount from './Components/U1/CreateAccount';
import ClientsList from './Components/U1/ClientsList';


const KEY = 'Account';

function App() {

    const [list, setList] = useState(null);
    const [createAccount, setCreateAccount] = useState(null);
    const [showUpdate, setShowUpdate] = useState(Date.now());

    useEffect(() => {

        setTimeout(() => setList(readData(KEY)), 2000);

        //setList(readData(KEY));
    }, [showUpdate]);

    //stebim, kaip pasikeite create account:
    useEffect(() => {
        if (null === createAccount) {
            return;
        }
        create(KEY, createAccount);
        setShowUpdate(Date.now());
    }, [createAccount])

    return (
        <div className="App">
            <header className="App-header">

                <CreateAccount setCreateAccount={setCreateAccount}/>
                <ClientsList list={list} />

            </header>
        </div>
    );

}

export default App; 
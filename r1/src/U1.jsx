import { useState, useEffect } from 'react';
import { create, readData, erase, edit} from './Components/U1/localStorage';
import './Components/U1/style.scss';

import CreateAccount from './Components/U1/CreateAccount';
import ClientsList from './Components/U1/ClientsList';


const KEY = 'Account';

function App() {

    const [list, setList] = useState(null);
    const [createAccount, setCreateAccount] = useState(null);
    const [showUpdate, setShowUpdate] = useState(Date.now());
    const [deleteModal, setDeleteModal] = useState(null);
    const [deleteAccount, setDeleteAccount] = useState(null);
    const [editModal, setEditModal] = useState(null);    
    const [editAccount, setEditAccount] = useState(null);

    useEffect(() => {

        //setTimeout(() => setList(readData(KEY)), 2000);

        setList(readData(KEY));
    }, [showUpdate]);

    //stebim, kaip pasikeite create account:
    useEffect(() => {
        if (null === createAccount) {
            return;
        }
        create(KEY, createAccount);
        setShowUpdate(Date.now());
    }, [createAccount])

    //stebim deleteData state pasikeitima ir deletinam su delete metodu
    useEffect(() => {
        if (null === deleteAccount) {
            return;
        }
        erase(KEY, deleteAccount.id);
        setShowUpdate(Date.now());
    }, [deleteAccount])

    useEffect(() => {
        if (null === editAccount) {
            return;
        }
        console.log(editAccount);
        edit(KEY, editAccount, editAccount.id);
        setShowUpdate(Date.now());
    }, [editAccount])

    return (
        <div className="App">
            <header className="App-header">

                <CreateAccount setCreateAccount={setCreateAccount}/>
                <ClientsList 
                list={list}
                setDeleteModal={setDeleteModal}
                deleteModal={deleteModal}
                setDeleteAccount={setDeleteAccount}
                editModal={editModal}
                setEditModal={setEditModal}
                editAccount={editAccount}
                setEditAccount={setEditAccount}
                 />
            </header>
        </div>
    );

}

export default App; 
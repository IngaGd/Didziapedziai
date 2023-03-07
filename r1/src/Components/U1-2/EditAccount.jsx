import { useState } from "react";


function EditAccount({setEditAccount, setEditModal, editModal}) {

    const [clientName, setClientName] = useState(editModal.clientName);
    const [clientSurname, setClientSurname] = useState(editModal.clientSurname);
    const [balance, setBalance] = useState(editModal.balance);

    const edit = _ => {
        setEditAccount({
            clientName: clientName, 
            clientSurname: clientSurname,
            balance: parseInt(balance),
            id: editModal.id
        });
        setEditModal(null);
    }

    const inputControl1 = e => {
        setClientName(e.target.value);   
    }

    const inputControl2 = e => {
        setClientSurname(e.target.value); 
    }

    const inputControl3 = e => {
        setBalance(e.target.value); 
    }

    return (
        <>
        <div className="form">

            <label>Client name</label>
            <input type="text" value={clientName} onChange={inputControl1}/>

            <label>Client surname</label>
            <input type="text" value={clientSurname} onChange={inputControl2}/>

            <label>Account balance</label>
            <input type="text" value={balance} onChange={inputControl3}/>

            <button className="btn" onClick={edit}>Set balance</button>  
            <button className="red" onClick={() => setEditModal(null)}>cancel</button>                    
        </div>

        </>
    )
}

export default EditAccount;
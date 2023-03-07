import { useState } from "react";


function CreateAccount({setCreateAccount}) {


    const [clientName, setClientName] = useState('');
    const [clientSurname, setClientSurname] = useState('');
    const [balance, setBalance] = useState(0);

    const create = _ => {
        setCreateAccount({
            clientName: clientName, 
            clientSurname: clientSurname,
            balance: parseInt(balance)
        });
        setClientName('');
        setClientSurname('');
        setBalance(0)
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

            <button className="btn" onClick={create}>Set client data</button>          
        </div>

        </>
    )
}

export default CreateAccount;
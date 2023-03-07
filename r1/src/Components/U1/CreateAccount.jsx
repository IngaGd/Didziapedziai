import { useState } from "react";


// const selectAccountType = [
//     {text: 'Economy', value: 'e'},
//     {text: 'Standard', value: 's'},
//     {text: 'Premium', value: 'p'},    
// ]

// const cardType = [
//     {text: 'Master Card', value: 'mc'},
//     {text: 'Visa', value: 'v'},    
// ]

function CreateAccount({setCreateAccount}) {

    // const [clientInfo, setClientInfo] = useState([]);


    const [clientName, setClientName] = useState('');
    const [clientSurname, setClientSurname] = useState('');
    // const [accountType, setAccountType] = useState('');
    // const [card, setCard] = useState(null);
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


    // const showClientInfo = e => {
    //     setClientInfo(c => [{clientName, clientSurname, balance}, ...c]);
    //     setClientName('');
    //     setClientSurname('');
    // }

    // const cardTypeSelecting = v => {
    //     setCard(v);//neberikia pervaziuoti visus, pasiliekam tik ta, kuris pazymetas
    // }


    return (
        <>
        {/* <h2 className="clients">
            {
                clientInfo.map((c, i) => <div key={i}> {c.clientName} {c.clientSurname} {selectAccountType.find(s => s.value === c.accountType).text} {cardType.find(s => s.value === c.card).text}</div>)
            } 
        </h2> */}
        <div className="form">

            <label>Client name</label>
            <input type="text" value={clientName} onChange={inputControl1}/>

            <label>Client surname</label>
            <input type="text" value={clientSurname} onChange={inputControl2}/>

            {/* <label>Account type</label>
            <select className="select" value={accountType} onChange={selection}>
                {
                    selectAccountType.map(s => <option key={s.value} value={s.value}>{s.text}</option>)
                }
            </select> */}

            {/* <label>Card type</label>
            <div className='cb-bin'>
                {
                    cardType.map(c => <span key={c.value}>
                    <input type="checkbox" id={'r_' + c.value} checked={card === c.value}
                    onChange={() => cardTypeSelecting(c.value)}/>
                    <label className='cb' htmlFor={'r_' + c.value}>{c.text}</label> 
                    </span>)
                }
            </div> */}

            <label>Account balance</label>
            <input type="text" value={balance} onChange={inputControl3}/>


            {/* <button className="btn" onClick={showClientInfo}>Show client data</button>   */}
            <button className="btn" onClick={create}>Set client data</button>          
        </div>

        </>
    )
}

export default CreateAccount;
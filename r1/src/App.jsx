import { useEffect, useState } from 'react';
import Create from './Components/Dices2/Create';
import List from './Components/Dices2/List';
import './Components/Dices2/style.scss';
import axios from 'axios';
import Messages from './Components/Dices2/Messages';
import { GlobalContextProvider } from './Components/Dices2/GlobalContext';

const URL = 'http://localhost:3003/dices';

function App() {


    const [editData, setEditData] = useState(null);




    useEffect(() => {
        if (null === editData) {
            return;
        }
        axios.put(URL + '/' + editData.id, editData)
            .then(res => {
                console.log(res.data);
                //setLastUpdate(Date.now());
                //addMessage({text: res.data.message.text, type: res.data.message.type});
            });

    }, [editData]);



    return (
        <GlobalContextProvider>
            <div className="dices">
                <div className="content">
                    <div className="left">
                        <Create />
                    </div>
                    <div className="right">
                        <List
                            setEditData={setEditData}
                        />
                    </div>
                </div>
            </div>
            {
                <Messages />
            }
        </GlobalContextProvider>
    );

}

export default App;
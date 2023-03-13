import { useState } from 'react';
import './App.scss';
import BoxLarge from './Components/018/BoxLarge';
import Buttons from './Components/018/Buttons';
import {GlobalSqContextProvider} from './Components/018/GlobalSqContext';
import GlobalUserContext from './Components/018/GlobalUserContext';
//import GlobalSqContext from './Components/018/GlobalSqContext';
import rand from './Functions/rand';

const users = ['Bebras', 'Zebras', 'Ūdra'];

function App() {

    // const [sq1, setSq1] = useState([]);
    // const [sq2, setSq2] = useState([]);

    const [user, setUser] = useState(users[rand(0, 2)]);

    // const addSq1 = _ => {
    //     setSq1(s => [ ...s, rand(100, 999)]);
    // }

    // const addSq2 = _ => {
    //     setSq2(s => [...s, rand(100, 999)]);
    // }

    return (
        //kontekstas veikia ant visos aplikacijos, provideris turi vienintele savybe - value, dazniausiai perduodam
        //objekta. Kontekstai maunasi vienas i kita, dazniausiai jie vienas nuo kito bepriklauso
        <GlobalUserContext.Provider value={{user}}>
        {/* <GlobalSqContext.Provider value={
            {
                sq1: sq1,
                sq2,
            }
        }> */}
        <GlobalSqContextProvider>
            <div className="App">
                <header className="App-header">
                    <h1>conte-X-t</h1>


                    {/* <BoxLarge sq1={sq1} /> */}

                    <BoxLarge />
                    {/* <button className="coral" onClick={addSq1}>add</button>
                    <button className="blue" onClick={addSq2}>add</button> */}
                    <Buttons />
                    <button className="red" onClick={() => setUser(users[rand(0, 2)])}>user</button>
                </header>
            </div>
        {/* </GlobalSqContext.Provider> */}
        </GlobalSqContextProvider>
        </GlobalUserContext.Provider>
    );

}

export default App;
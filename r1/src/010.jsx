
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import AddButton from './Components/010/Buttons/AddButton';
import ClearButton from './Components/010/Buttons/ClearButton';
import ColorButton from './Components/010/Buttons/ColorButton';
import StopSpinButton from './Components/010/Buttons/StopSpinButton';
import SpinAllButton from './Components/010/Buttons/SpinAllButton';
import SortButton from './Components/010/Buttons/SortButton';
import Sq from './Components/010/Sq';
import DefaultSortButton from './Components/010/Buttons/DefaultSortButton';
import Filter500Button from './Components/010/Buttons/Filter500Button';
import ShowAllButton from './Components/010/Buttons/ShowAllButton';

//vizualizacija ir biznio logika viename

function App() {

    const [sq, setSq] = useState([]); 

    return (
        <div className="App">
            <header className="App-header">

                {/* binas, generuojantis kvadratukus. state sq mapinamas i nauja squera*/}

                <div className="sq-bin">
                    {
                        sq.map((s, i) => s.show ? <Sq key={i} s={s} i={i} setSq={setSq} /> : null)
                    }
                </div>

                {/* binas, generuojantis mygtukus: */}

                <div className="sq-bin">
                    <AddButton setSq={setSq} classes='blue'/>
                    <ClearButton setSq={setSq} classes="red"/>
                    <ColorButton setSq={setSq} classes="coral" />
                    <StopSpinButton setSq={setSq} classes=""/>
                    <SpinAllButton setSq={setSq} classes=""/>
                    <SortButton setSq={setSq} classes="blue"/> 
                    <DefaultSortButton setSq={setSq} classes="blue"/>
                    <Filter500Button setSq={setSq} classes="red"/>       
                    <ShowAllButton setSq={setSq} classes="red"/>                                                                                           
                </div>

            </header>
        </div>
    );

}

export default App;


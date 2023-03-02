import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
//import Sq from './Components/009/Sq';
import randColor from './Functions/randColor';
import { v4 as uuidv4 } from 'uuid';


function App() {

    // const [sqColor, setSqColor] = useState('crimson');
    // const [count, setCount] = useState(0);// 0 - reiksme nuo kurios pradedam

    // const changeColor = () => {
    //    // sqColor = 'skyblue'; negalima sitaip daryti, blogai baigsis :)
    //    setSqColor('skyblue');//naujos reiksmes priskyrimas
    // }

    // const changeColor2 = () => {
    //    setSqColor(c => 'crimson' === c ? 'skyblue' : 'crimson');//naujos reiksmes priskyrimas
    // }

    // const addOne = () => {
    //     //setCount(count++); //mirstam is karto
    //     //setCount(count+1);// negalima, bus ispejimas. cia reikismes redagavimas
    //     //visa redagavima reikia daryti per callback, tiesioginiai neikeiciam
    //     //darok per setCount - paimame sena reiksme ir priskiriame nauja:
    //     //setCount(c => c + 1); jei rasytume 3 kartus, gautume zingsni kas +3
    //     //setCount(c => c + 1);
    //     setCount(c => c + 1);
    // }

    const [sq, setSq] = useState([]);

    const addSq = () => {
        //setSq(sq.push(1)) // labai blogas variantas, nes keiciame sq
        //setSq(s => [...s, 1]); //prideda dar po viena kvadratuka
        setSq(s => [...s, {id: uuidv4(), color: randColor()}]) //nukopijuojam sena ir pridedam nauja el
        //pagal unikalu identifikatoriu
    }


    const delSq = id => {
        setSq(s => s.filter(s => s.id !== id));//trinimas pagal id
    }

    const cloneSq = id => {
        const clone = sq.find(s => s.id === id);//susirandam squerus, findinam, ka norim klonuoti
        
        setSq(s => [...s, {...clone, id: uuidv4()}]) //pridedam clona, kuriame overridiname id
    }

    const clearSq = () => {
        setSq([]);//kadangi needitinam, tai idedame be callback, clearinant idedam tuscia masyva
    }

    //grazinam nauja objekta, paimam pries tai buvusias obj savybes. kadangi nieko nepridedam ir nneatimam, o visus
    //keiciam, naudojam map
    const changeColors = () => {
        setSq(s => s.map(s => ({...s, color: randColor()} ))); 
    }

    return (
      <div className="App">
        <header className="App-header">
{/* 
            <div className="sq-bin">
                <div className="sq" style={{backgroundColor: sqColor}}></div>
                <div className="sq">
                    {count}
                </div>
            </div>
            <button className="blue" onClick={changeColor}>Make blue</button>
            <button className="blue" onClick={changeColor2}>Change</button>
            <button className="red" style={{backgroundColor: 'crimson'}} onClick={addOne}>+1</button>          */}
            <div className="sq-bin">
            {/* {
                sq.map((s, i) => <Sq key={i} s={s} i={i}/>)
            } */}

            {
                sq.map((s, i) => 
                <div key={i} className="sq spin" style={{
                    backgroundColor: s.color +'70',
                    borderColor: s.color
                }}> 
                    <div className="spin-back">
                        <button className='small red' onClick={() => delSq(s.id)}>del</button> 
                        <button className='small blue' onClick={() => cloneSq(s.id)}>clone</button> 
                    </div>
                </div>
            )}
            </div>
            <div className="sq-bin">
                <button className="coral" onClick={addSq}>+[]</button>
                <button className="red" onClick={clearSq}>clear</button>
                <button className="red" onClick={changeColors}>new</button>
            </div>              
        </header>
      </div>
  ); 
}

export default App;
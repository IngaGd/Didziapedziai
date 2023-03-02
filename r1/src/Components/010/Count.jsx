import {useState} from 'react';
import Buttons from './Buttons';
import Show from './Show';

function Count() {

    const [count, setCount] = useState(1); //upliftintas state'as
    //state turi buti paciam seniausiam teviniam el
    //ji paskui galime perduoti vaikams, perduoti galime ne tik state, bet ir setSate

    return (
        <>
            <Show count = {count}/>
            <Buttons setCount = {setCount}/>    
        </>
    )
}

export default Count;
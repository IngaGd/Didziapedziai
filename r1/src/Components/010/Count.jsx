import {useState} from 'react';
import Buttons from './Buttons';
import Show from './Show';

function Count() {

    const [count, setCount] = useState(1); //state turi buti paciam seniausiam teviniam el
    //ji paskui galime perduoti vaikams

    return (
        <>
            <Show count = {count}/>
            <Buttons setCount = {setCount}/>    
        </>
    )
}

export default Count;
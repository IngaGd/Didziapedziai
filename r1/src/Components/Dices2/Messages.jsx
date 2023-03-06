
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function Messages() {

    const {messages} = useContext(GlobalContext);


    return (
        <div className="messages">
            {/* gauname messages masyva, ji mapinam po viena message, ir dedam i div, messages turi id, i vidu idedam
            messages texta ir klase uzkabinam su arba erroru arba ok (message tipas)*/}
            {
                messages.map(m => <div key={m.id} className={'message ' + m.type}>{m.text}</div>)
            }
        </div>
    );

}

export default Messages;
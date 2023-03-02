import { useState } from 'react';
import AddButton from './Components/U1/AddButton';
import DeleteButton from './Components/U1/DeleteButton';
import RemoveButton from './Components/U1/RemoveButton';
import './Components/U1/style.scss';
import UsersList from './Components/U1/UsersList';


const users = [
    {id: 1, name: 'Leanne', surname: 'Graham', account: 120},
    {id: 2, name: 'Ervin', surname: 'Howell', account: 323},
    {id: 3, name: 'Clementine', surname: 'Bauch', account: 0},
    {id: 4, name: 'Patricia', surname: 'Lebsack', account: 4507},         
];



function App() {

    const [userColor, setColor] = useState('black');




    return (
        <div className="App">
            <header className="App-header">

                <ul className='list' style={{color: userColor}}>
                    {/* visada turi buti unikalus key */}
                    {
                        users.map((a, i) => <UsersList key={a.id} users={a} index={i}/>)
                    }
                </ul>

                <DeleteButton setColor={setColor}/>
                <AddButton />
                <RemoveButton />

            </header>
        </div>
    );

}

export default App; 
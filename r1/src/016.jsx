import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Fox from './Components/016/Fox';
import Home from './Components/016/Home';
import Menu from './Components/016/Menu';
import Racoon from './Components/016/Racoon';
import axios from 'axios';


function App() {

    const [page, setPage] = useState('home');

    //surisam su serveriu:
    const [content, setContent] = useState(null);

    //kol negavom kontento, nerodom viso psl. AXIOS kreipiasi i serveri

    useEffect(() => {

        axios.get('http://localhost:3003/api/' + page) //kreipiamasi i page
        .then(res => {                                   // kai gauname ats, pasetinam kontenta kaip response
            setContent(res.data);
        });

    }, [page])


    return (
        <div className="App">
            <header className="App-header">
                <Menu setPage={setPage}/>
                {
                    page === 'home' && null !== content ? <Home color={content.color} title={content.title} /> : null
                }
                {
                    page === 'racoon' && null !== content ? <Racoon color={content.color} title={content.title} /> : null
                }
                {
                    page === 'fox' && null !== content ? <Fox color={content.color} title={content.title} /> : null
                }

                {/* jei contentas nulinis, rodom loading: */}

                {
                    null === content ? <h1>LOADING</h1> : null
                }

            </header>
        </div>
    );

}

export default App; 
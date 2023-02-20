import './App.scss';
import Task1 from './Homeworks/02-React-base-list/Task1';



function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="App">
            <header className="App-header">
                {
                    dogs.map((a, i) => <Task1 index = {i} dogs = {a}/>)
                }
            </header>
        </div>
    );

}

export default App; 
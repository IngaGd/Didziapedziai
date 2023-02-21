import './App.scss';
//import Task1 from './Homeworks/02-React-base-list/Task1';
import Task2 from './Homeworks/02-React-base-list/Task2';



function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="App">
            <header className="App-header">
                {/* {
                    dogs.map((a, i) => <Task1 index = {i} dogs = {a}/>)
                } */}
                {
                    dogs.map((a, i) => <Task2 index = {i} dogs = {a}/>)
                }
            </header>
        </div>
    );

}

export default App; 
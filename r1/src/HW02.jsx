import './App.scss';
import Task2 from './Homeworks/02-React-base-list/Task2';

//import Task1 from './Homeworks/02-React-base-list/Task1';
//import Task2 from './Homeworks/02-React-base-list/Task2';



function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    const sortedDogs = () => [...dogs].sort((a, b) => b.length - a.length);



    return (
        <div className="App">
            <header className="App-header">
                {/* {
                    dogs.map((a, i) => <Task1 index = {i} dogs = {a}/>)
                } */}
                {        
                    <Task2 props={sortedDogs()} />
                }
            </header>
        </div>
    );

}

export default App; 
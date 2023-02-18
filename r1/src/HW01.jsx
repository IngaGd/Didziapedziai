import './App.scss';
import LabasZuiki from './Homeworks/01-React-base/LabasZuiki';
import SimpleProps from './Homeworks/01-React-base/SimpleProps';
import Task4 from './Homeworks/01-React-base/Task4';
import Task5 from './Homeworks/01-React-base/Task5';
import ZebraiBebrai from './Homeworks/01-React-base/ZebraiBebrai';


function App() {


    return (
        <div className="App">
            <header className="App-header">
                <LabasZuiki/>
                <SimpleProps text={'This is a text for simple props'}/>
                <ZebraiBebrai setColor='2'/>
                <Task4 props1 = 'cia bet kloks tekstas h1 tagui' props2 = 'cia bet kloks tekstas h2 tagui'/>
                <Task5 props1 = 'cia bet kloks tekstas h1 tagui' 
                props2 = 'cia bet kloks tekstas h2 tagui'
                color = 'green'
                />
            </header>
        </div>
    );

}

export default App; 
function Click(){


    // #1 paprasciausias budas, neperduodant argumento
    const go = () => { 
        console.log('GO RED!');
    }

    // #2 net ir neperduodant argumento mes ji galime pasiimti ir atsispausdinti
    const goEvent = e => { 
        console.log(e);
        console.log('GO RED!');
    }

    // #3 tie patys buttonai kreipiasi i ta pati metoda, perduodami parametrai
    const doSomething = color => {// ivyskta is karto, kai perkraunam psl
        return () => console.log('YES - ' + color);   // ivyskta tada, kai paspaudziam mygtuka
    }

    // #4 
    const doSomething2 = color => {
        console.log('YES-2 - ' + color);   
    }

    //#5 funkcija atskirai neisrasoma, rasome one line, funkcija iwrapinam tiesiai

    //#6 eventas perduotas onClik metu


    const letsGo = () => console.log('GO GREY');

    return (
        <div>
            <button className="red" onClick={go}>#1</button> 

            <button className="red" onClick={goEvent}>#2</button>

            <button className="coral" onClick={doSomething('coral button')}>#3 Coral</button> 
            <button className="red" onClick={doSomething('red button')}>#3 Red</button>  

            <button className="coral" onClick={() => doSomething2('coral button')}>#4 Coral</button> 
            <button className="red" onClick={() => doSomething2('red button')}>#4 Red</button>              

            <button className="blue" onClick={() => console.log('In one line')}>#5</button>
            <button className="blue" onClick={e => console.log(e, 'In one line')}>#6</button>

            <button className="" onClick={letsGo}>CLICK ME</button>                           
        </div>
    );
}

export default Click;
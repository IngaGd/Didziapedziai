import rand from '../../Functions/rand';
import ShowName from './ShowName';

function Animal({color, animalName, h1Class}) { //kad zinoti, kas perduodama, susirasom
    //const fox = <u>FOX number: {rand(100, 199)}</u>; // u - elementu kurimas
    //const labas = <i>Labas</i>;

    //galime apsirasyti kintamuosius ir {} - js metodus

    //ta pati funkcija gali tureti kelis return
    //if (rand(0,1)) {
    //    return <h6>Empty</h6> // kazkada perefreshine nebematysim racoon
    //}

    const fontFamily = 'monospace';

    return (
        <h1 className={'old-class' + h1Class} style={{ //cia h1Class yra stiliaus kintamasis
            color,
            //backgroundColor: 'navy',
            padding: '8px 30px',
            fontSize: rand(20, 50) + 'px', //keisis srifto dydis refreshinant
            letterSpacing: rand(0, 1) ? '5px' : null,//grazinimas null reiksia, kad salyga nepritaikyta
            fontFamily,
        }}><ShowName animalName={animalName} fontFamily={fontFamily}/> No: { //stilius reacte negali buti stringas, jis yra obj
            rand(11, 15)    // viduriniai geltoni {} - nurodo js obj
        }</h1>
    )
}

export default Animal;

//tevas perduoda duomenis vaikui per propsa
//propsu drilinimas: jei seneli  nori kazka perduodi savo anukui, tai senelis
//pirmiausia perduoda tevui, o sis tada savo vaikui
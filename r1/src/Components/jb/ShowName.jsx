function ShowName({animalName, fontFamily}) {

    switch(animalName) {
        case 'Racoon': return (
            <i>R-A-C-O-O-N</i>
        );
        case 'Fox': return (
            <u style={{fontFamily}}>FoX</u>
        );
        default: return (
            <b>what?</b>
        )
    }
}

export default ShowName;
//ShowName bus App anukas
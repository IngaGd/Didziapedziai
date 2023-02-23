function Task2({props}) {

    const list = () => props.map((a) => a);

    return (
        <div className="hw-circle">
            {list}
        </div>
    )
}

export default Task2;


// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. 
// Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, 
// o apskritimai sunumeruoti nuo 1 iki galo.
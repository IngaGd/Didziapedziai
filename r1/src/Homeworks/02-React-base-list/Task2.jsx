function Task2({dogs}) {

    const sortedDogs = () => [...dogs].sort((a, b) => b.length - a.length);

    return (
        <div className="hw-circle">
            {sortedDogs()}
        </div>
    )
}

export default Task2;


// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. 
// Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, 
// o apskritimai sunumeruoti nuo 1 iki galo.
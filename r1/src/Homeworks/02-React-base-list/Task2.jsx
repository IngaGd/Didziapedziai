function Task2({dogs, index}) {

    return (
            <div className="hw-circle">
                {dogs}
                <span className="circle-index">
                    {index}
                </span>
            </div>
    )
}

export default Task2;


// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. 
// Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, 
// o apskritimai sunumeruoti nuo 1 iki galo.
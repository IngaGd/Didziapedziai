function DelButton({classes, sq, setSq}) {

    //sq perduodamas is Square propsu sq={s}, sq yra kvadratuko id
    // setSq perduodamas is App i Sq, o is Sq i DelButton - drilinam

    //css klase perduodama propsu i del butona is Square 'red small', nes butonas yra square viduj

    const clickHandler = () => {
        setSq(s => s.filter(s => s.id !== sq.id));
    }

    return (
        <button className={classes} onClick={clickHandler}>del</button>
    )
}

export default DelButton;
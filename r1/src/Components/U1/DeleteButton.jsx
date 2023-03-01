function DeleteButton({setColor}) {

    const changeColor = () => {
        setColor('blue');
    }

    return (
        <button className="button-71" onClick={changeColor}>Delete</button>
    )

}

export default DeleteButton;
function DeleteButton({setColor}) {

    const changeColor = () => {
        setColor(c => c === 'black' ? 'blue' : 'black');
    }

    return (
        <button className="button-71" onClick={changeColor}>Delete</button>
    )

}

export default DeleteButton;
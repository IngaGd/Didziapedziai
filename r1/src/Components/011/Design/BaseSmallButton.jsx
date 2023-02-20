function BaseButton({title, clickHandler}) {

    return (
        <button className="small coral" onClick={clickHandler}>{title}</button>
    )
}

export default BaseButton;
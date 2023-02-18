function ZebraiBebrai({setColor}) {

    const coloring = () => {
       return setColor === '1' ? 'blue' : setColor === '2' ? 'red' : 0;
    }

    return (
        <>
        <h1 style={{color: coloring()}}>Zebrai ir Bebrai</h1>
        </>
    )
}

export default ZebraiBebrai;
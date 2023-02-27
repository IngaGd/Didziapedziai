import Delete from "./Delete";

function List({list, setDeleteModal, deleteModal, setDeleteData}) {

    if (null === list) { //jei useState(null), vadinasi dar negavom is serverio jokiu duomenu
        return (
            <div className="list">
                <div className="loader">
                    LOADING...
                </div>
            </div>            
        )
    }

    return (
        <div className="list">

            {
                list.map(d => <div key={d.id} className="item">
                    <div className={'dice _' + d.number} style={{
                            fontSize: d.size + 'px',
                            color: d.color
                    }}></div>
                    <div className="delete-button" onClick={() => setDeleteModal(d)}></div>
                    {
                        deleteModal && deleteModal.id === d.id ? <Delete dice={d} setDeleteModal={setDeleteModal} setDeleteData={setDeleteData}/> : null
                    }
                </div>)
            }

        </div>
    );
}

export default List;
import Delete from "./Delete";
import Edit from "./Edit";

function List({list, setDeleteModal, deleteModal, setDeleteData, setEditModal, editModal, setEditData}) {

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
        <>
            <div className="title">
                List of clients
            </div>
            <div className="client-list">
                {
                    list.map(d => <div key={d.id} className="client">
                        <div className="client-data"><span className="label-text">Name:</span> <span className="input-text">{d.name}</span></div>
                        <div className="client-data"><span className="label-text">Surname:</span> <span className="input-text">{d.surname}</span></div>
                        <div className="client-data"><span className="label-text">Balance:</span> <span className="input-text">{d.balance}</span></div>
                        <div className="delete-button" onClick={() => setDeleteModal(d)}></div>
                        <div className="edit-button" onClick={() => setEditModal(d)}></div>
                        {
                            deleteModal && deleteModal.id === d.id ? <Delete dice={d} setDeleteModal={setDeleteModal} setDeleteData={setDeleteData} /> : null
                        }
                        {
                            editModal && editModal.id === d.id ? <Edit setEditModal={setEditModal} editModal={editModal} setEditData={setEditData} /> : null
                        }                     
                        
                    </div>)
                }
            </div>
        </>
    );
}

export default List;
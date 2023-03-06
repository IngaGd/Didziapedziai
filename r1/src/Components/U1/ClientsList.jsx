import DeleteAccount from "./DeleteAccount";
import EditAccount from "./EditAccount";

function ClientsList({list, setDeleteModal, deleteModal, setDeleteAccount, editModal, setEditModal}) {

    if (null === list) { //dar negavome duomenu is serverio
        return (
            <div className="load">Loading...</div>
        )
    }

    return (
        <div>
            {
                list.map(a => <div key={a.id} className="item">
                    <div>{a.name} {a.surname} {a.accountType} {a.card} {a.balance}</div>
                        <div className="delete-btn" onClick={() => setDeleteModal(a)}></div>
                        <div className="edit-btn" onClick={() => setEditModal(a)}></div>                        
                        {
                            deleteModal && deleteModal.id === a.id ? <DeleteAccount client={a} setDeleteModal={setDeleteModal} setDeleteAccount={setDeleteAccount} /> : null
                        }
                        {
                            editModal && editModal.id === a.id ? <EditAccount setEditModal={setEditModal} editModal={editModal}/> : null
                        }
                    </div>)
                }
        </div>

    );
}

export default ClientsList;

//{a.name} {a.surname} {a.accountType} {a.card} {a.balance}
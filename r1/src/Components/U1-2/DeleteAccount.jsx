function DeleteAccount({setDeleteModal, setDeleteAccount, client}) {

    return (
        <button className="delete-modal">
            Confirm delete
            <span className="delete" onClick={() => setDeleteAccount(client)}>&#10003;</span>
            <span onClick={() => setDeleteModal(null)}>Cancel</span>
        </button>
    )

}

export default DeleteAccount;
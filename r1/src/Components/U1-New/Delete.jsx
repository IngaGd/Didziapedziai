function Delete({setDeleteModal, setDeleteData, account}) {

    return (
        <div className="delete-modal">
            Confirm delete
            <span onClick={() => setDeleteData(account)}>X</span>
            <span onClick={() => setDeleteModal(null)}>Cancel</span>            
        </div>
    )

}

export default Delete;
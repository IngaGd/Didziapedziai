function Delete({setDeleteModal, setDeleteData, dice}) {

    return (
        <div className="delete-modal">
            Confirm delete
            <span onClick={() => setDeleteData(dice)}>X</span>
            <span onClick={() => setDeleteModal(null)}>Cancel</span>            
        </div>
    )

}

export default Delete;
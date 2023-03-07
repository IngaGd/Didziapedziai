import { useState } from 'react';

function Edit({ setEditData, setEditModal, editModal }) {
  const [name, setName] = useState(editModal.name);
  const [surname, setSurname] = useState(editModal.surname);
  const [balance, setBalance] = useState(editModal.balance);
  const [amount, setAmount] = useState(0);

  const handleAddFunds = () => {
    setBalance(balance + amount);
    setAmount(0);
  };

  const handleWithdrawFunds = () => {
    setBalance(balance - amount);
    setAmount(0);
  };

  const saveChanges = () => {
    setEditData({
      name,
      surname,
      balance,
      id: editModal.id,
    });
    setEditModal(null);
  };

  return (
    <>
      <div className="edit-modal">
        <div className="buttons">
          {/* <button onClick={() => setAmount(0)}>Clear</button> */}
          <button className='edit-btn' onClick={handleAddFunds}>Add amount</button>
          <button className='edit-btn' onClick={handleWithdrawFunds}>Withdraw</button>
        </div>
        <div className='input-container'>
            <div className="input-group">
                <label className='label-amount'>Amount to change:</label>
                <input type="text" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
            </div>
            <div className="input-group">
                <label className='label-balance'>Current balance:</label>
                <input type="text" value={balance} onChange={(e) => setBalance(parseInt(e.target.value))} />
            </div>
        </div>

        <button className="bottom-btn" onClick={saveChanges}>
          Save changes
        </button>
        <button className="bottom-btn" onClick={() => setEditModal(null)}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default Edit;

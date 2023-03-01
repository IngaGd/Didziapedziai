function UsersList({users, index, userColor}) {

    return (
        <li style={{
            // color: users.account !== 0 ? 'green' : 'grey',
            // backgroundColor: index % 2 ? 'pink' : 'yellow',
        }} key={users.id} className='user'>{users.id} {users.name} {users.surname}</li>
    )
}

export default UsersList;
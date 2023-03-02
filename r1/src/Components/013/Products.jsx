import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {

    const [users, setUsers] = useState(null);//jei butu tuscias masyvas, tai serveris gali grazinti
    //tiesiog tuscia masyva, mes nezinosime, ar ats jau gautas, ar dar eina
    //kai esame dar negave is serverio duomenu, reiktu rodyti "loading"

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')//gavom userius
            .then(res => {                                      //laukiam, kada ateis ats ir idedam i userius
                setUsers(res.data.map((u, i) => ({...u, row: i})));//default tvarka
                //setUsers(res.data)
            });
    }, []);

    const sort = _ => {
        setUsers(u => [...u].sort((a, b) => a.name.localeCompare(b.name)));
    }

    const sortDefault = _ => {
        setUsers(u => [...u].sort((a, b) => a.row - b.row));//sortina pagal default tvarka
    }

    return (
        <div className="card">
            <div className="card-header">
                <h2>Users List</h2>
            </div>

            <ul className="list-group list-group-flush">
                {
                    users === null ? <li className="list-group-item">Loading...</li>//kai turime null, rodom loading
                    : users.map(u => <li className="list-group-item" key={u.id}>{u.name}</li>)// rodom, kai turim ne null
                }
            </ul>
            <button className="blue" onClick={sort}>sort</button>
            <button className="blue" onClick={sortDefault}>sort default</button>
        </div>
    );

}

export default Products;
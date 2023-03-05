function ClientsList({list}) {

    if (null === list) { //dar negavome duomenu is serverio
        return (
            <div className="load">Loading...</div>
        )
    }

    return (
        <div>
            {
                list.map(a => <div key={a.id}>
                    {a.name} {a.surname} {a.accountType} {a.card}
                </div>)
            }
        </div>

    );
}

export default ClientsList;
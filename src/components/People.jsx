const People = (props) => {
    const { list } = props;

    console.log(list);
    return (
        <>
            {list.map((person) => {
                return (
                    <div className="card">
                        <img src={person.image} alt="" />
                        <div>
                            <h3>{person.name}</h3>
                            <p className="email"> {person.email} </p>
                            <p className="age">{person.age} years</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default People;

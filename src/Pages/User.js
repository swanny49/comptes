import {useEffect, useState} from "react";


function User(){

    const [persons, setPersons] = useState([])

    useEffect(() => {
        fetch('/persons')

            .then(datas => {
                let copy = [...persons]
                for (let i = 0; i < datas.length; i++) {
                    let person = {
                        Name: datas[i].Name,
                        FirstName: datas[i].FirstName
                    }
                    copy.push(person)
                }
                setPersons(copy)
            })
    }, [])

    return (
        <div>
            {(typeof persons === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                persons.map((user, i) => (
                    <div key={i}>
                        <p>{user.Name}  {user.FirstName}</p>
                        <p></p>
                    </div>
                ))
            )}
        </div>
    )

}

export default User
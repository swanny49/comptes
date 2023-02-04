import {Link, useHistory, useLocation, useParams} from "react-router-dom";


function Depenses(){
    let {depenseID} = useParams()
    let {livretID} = useParams()
    let history = useHistory()
    let location = useLocation()

    return(
        <>
        <h1>Depenses {depenseID} {livretID ? ' du livret ' : ''}{livretID}</h1>
            <p>{location.pathname}</p>
            <Link to={
                {state : {
                    iddepense : depenseID
                },
                }
            }/>
            <button onClick={() => history.goBack()}>Prev</button>
        </>
    )
}

export default Depenses;
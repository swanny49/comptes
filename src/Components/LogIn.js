import {useEffect, useId, useState} from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

async function loginUser(credentials) {
    // console.log('credentials : ' + JSON.stringify(credentials))
    return fetch('/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        .catch(err => console.log(err))
}

function LogIn({setToken}) {

    // State
    // const [user, setUser] = useState([])
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // const [newUser, setNewUser] = useState("")
    // const mailRef = useRef()

    // Trigger
    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        console.log('token : ' + JSON.stringify(token))
        setToken(token)
    }

    // TODO : renvoyer un message si l'utilisateur n'existe pas


    //  Render
    return (
        <div>
            <h1>Application de comptes</h1>
            {/*<Link to="/register">Pas encore de comptes ?</Link>*/}
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" placeholder="Votre adresse mail" onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="Votre mot de passe"
                           onChange={e => setPassword(e.target.value)}/>
                </label>
                <button>Me connecter</button>
            </form>
            <p id="connexion-failed">L'utilisateur n'existe pas, veuillez réessayer</p>
        </div>
    )

}

export default LogIn

LogIn.propTypes = {
    setToken: PropTypes.func.isRequired
}

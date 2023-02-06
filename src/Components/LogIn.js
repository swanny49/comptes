import {useEffect, useId, useState} from "react";
import PropTypes from "prop-types";
import "../css/index.css"

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
        <div id="Login">
            <h1>Application de comptes</h1>
            {/*<Link to="/register">Pas encore de comptes ?</Link>*/}
            <div id="formulaire">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input id="email" type="text" placeholder="Votre adresse mail"
                               onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <input id="password" type="password" placeholder="Votre mot de passe"
                               onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <div>
                            <input id="remindme" type="checkbox"/>
                            <p>Se souvenir de moi</p>
                        </div>
                        <div className="button green">
                            <input type="submit" hidden/>
                            <div className="confirm">Me connecter</div>
                        </div>

                    </div>
                    {/*<input type="submit" value="Me connecter"/>*/}
                </form>
                <p id="connexion-failed" className="error">L'utilisateur n'existe pas, veuillez réessayer</p>
            </div>
        </div>
    )

}

export default LogIn

LogIn.propTypes = {
    setToken: PropTypes.func.isRequired
}

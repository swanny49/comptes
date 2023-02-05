import {Link} from "react-router-dom";

function Register(){

    return (
        <div>
            <h1>Nouveau compte</h1>
            <Link to="/logIn">Déjà un compte ?</Link>
        </div>
    )

}

export default Register
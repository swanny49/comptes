import {Link} from "react-router-dom";
import Home from "../Pages/Home";
import LogIn from "../Components/LogIn";


const Error404 = () => {
    return(
        <>
            <p>Not Found</p>
            <p>You seem to be lost, go back to Home</p>
            <Link to={Home}>Retour à la case départ</Link>
            <Link to={LogIn}>Me connecter</Link>
        </>
    )
}

export default Error404
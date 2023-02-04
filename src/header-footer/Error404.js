import {Link} from "react-router-dom";
import Home from "../Pages/Home";


function Error404(){


    return(
        <>
            <p>Not Found</p>
            <p>You seem to be lost, go back to Home</p>
            {/*<Link to={Home}/>*/}
        </>
    )
}

export default Error404
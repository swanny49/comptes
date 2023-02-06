import React from "react";
import {
    BrowserRouter as Router, Switch, Route, Link
    , Redirect, useParams, NavLink
} from "react-router-dom";
import Home from "../Pages/Home";
import Depenses from "../Pages/Depenses";
import "../css/Header.css"
import LogIn from "../Components/LogIn";
import Register from "../Pages/Register";
import ElementTest from "../Pages/ElementTest";
import Error404 from "./Error404";
import useToken from "../useToken";
 
const logOut = () => {
    localStorage.removeItem('token')
    return (useToken())
}

const Header = () => {
    return (
        <Router>
            <div>
                <nav id='header'>
                    <NavLink to="/"><img src="../img/logo_green.png"/></NavLink>
                    <ul>
                        {/*<li><Link to="/"> Home </Link></li>*/}
                        <li><NavLink to="/depenses" className={"activeMenu"}> Dépenses </NavLink></li>
                        <li><NavLink to="/libelles"> Libellés/tags </NavLink></li>
                        <li><NavLink to="/prets"> Prêts </NavLink></li>
                        <li><NavLink to="/analyses"> Analyses </NavLink></li>
                        <li><NavLink to="/logout"> Déconnexion </NavLink></li>
                        <li><NavLink to="/login"> Connexion </NavLink></li>
                        <li><NavLink to="/elements"> Elements </NavLink></li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/depenses/:depenseID/:livretID" component={Depenses}/>
                <Route path="/depenses/:depenseID" component={Depenses}/>
                <Route path="/depenses/" component={Depenses}/>
                <Route path="/libelles" exact>Libellés / tags</Route>
                <Route path="/prets" exact>Prêts</Route>
                <Route path="/analyses" exact>Analyses</Route>
                <Route path="/login" component={LogIn} exact/>
                <Route path="/register" component={Register} exact/>
                <Route path="/account" exact>account</Route>
                <Route path="/elements" component={ElementTest} exact/>
                <Route path="*" exact component={Error404}/>
                <div onClick={logOut}>Deconnexion</div>
                {/*<Route path="/logout" >Déconnexion</Route>*/}
            </Switch>
        </Router>
    )
}

export default Header;
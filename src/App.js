import Header from "./header-footer/Header";
import {BrowserRouter as Router, Switch, Route, Link
    , Redirect, useParams} from "react-router-dom";
import Home from "./Pages/Home";
import Depenses from "./Pages/Depenses";
import Error from "./header-footer/Error404";
import React from "react";

function App() {

    return (
            <Router>
                <nav id='header'>
                    <ul>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/depenses"> Dépenses </Link></li>
                        <li><Link to="/libelles"> Libellés/tags </Link></li>
                        <li><Link to="/prets"> Prêts </Link></li>
                        <li><Link to="/analyses"> Analyses </Link></li>
                        <li><Link to="/logout"> Déconnexion </Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/depenses/:depenseID/:livretID" component={Depenses}/>
                    <Route path="/depenses/:depenseID" component={Depenses}/>
                    <Route path="/depenses/" component={Depenses}/>
                    <Route path="/libelles" exact>Libellés / tags</Route>
                    <Route path="/prets" exact>Prêts</Route>
                    <Route path="/analyses" exact>Analyses</Route>
                    <Route path="/logout" exact>Déconnexion</Route>
                    <Route path="/account" exact>account</Route>
                    <Route path="*" exact>
                        Not Found
                        <Redirect to={Error}/>
                    </Route>
                </Switch>
            </Router>
    )
}

export default App
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link
    , Redirect, useParams} from "react-router-dom";
import Home from "../Pages/Home";
import Error from "./Error404"
import Depenses from "../Pages/Depenses";
import "../css/Header.css"

function Header() {


    return (
        <div>
            <Router>

                {/*<Switch>*/}
                {/*    <Route path="/" exact component={Home}/>*/}
                {/*    <Route path="/depenses/:depenseID/:livretID" component={Depenses} />*/}
                {/*    <Route path="/depenses/:depenseID" component={Depenses} />*/}
                {/*    <Route path="/depenses/" component={Depenses}/>*/}
                {/*    <Route path="/libelles" exact>Libellés / tags</Route>*/}
                {/*    <Route path="/prets" exact>Prêts</Route>*/}
                {/*    <Route path="/analyses" exact>Analyses</Route>*/}
                {/*    <Route path="/logout" exact>Déconnexion</Route>*/}
                {/*    <Route path="/account" exact>account</Route>*/}
                {/*    <Route path="*" exact>*/}
                {/*        Not Found*/}
                {/*        <Redirect to={Error}/>*/}
                {/*    </Route>*/}
                {/*</Switch>*/}
            </Router>
        </div>
    )
}

export default Header;
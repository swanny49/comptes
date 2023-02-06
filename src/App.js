import Header from "./header-footer/Header";
import React, {useState} from "react";
import LogIn from "./Components/LogIn";
import useToken from "./useToken"
import "./css/index.css";

function App() {

    const {token, setToken} = useToken()

    if (!token) {
        return <LogIn setToken={setToken}/>
    }

    const logOut = () => {
        localStorage.removeItem('token')
        return (useToken())
    }

    return (
        <>
            <Header/>
        </>

    )
}

export default App
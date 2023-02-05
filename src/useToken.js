import {useState} from "react";

export default function UseToken(){

    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.token
    }

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
    }

    const [token, setToken] = useState(getToken())

    return {
        setToken: saveToken,
        token
    }

}
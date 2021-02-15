import React, { useEffect, useState } from 'react';
import Login from './Login';
import Main from './Main';
import Register from './Register';

const App = () => {

    const [pageMode, setPageMode] = useState("Login") // or Main or Register
    const [token, setToken] = useState("")
    const [user, setUser] = useState("")

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            setUser(localStorage.getItem('user'))


            // TO MAKE IN FUTURE!
            // Make fetch request to validate token!
            // Then setPageMode('Main') --> redirect to the main page! 
            // for now let's test

            setPageMode('Main')
        }
    }, [])


    const togglePageMode = (newState) => {  // newState will be "Login", "Main" or "Register"
        setPageMode(newState)
    }


    if (pageMode === "Login") {
        return (
            <div>
                <Login togglePageMode={togglePageMode} />
            </div>
        )
    } else if (pageMode === "Main") {
        return (
            <div>
                <Main togglePageMode={togglePageMode} user={user} />
            </div>
        )
    } else if (pageMode === "Register") {
        return (
            <div>
                <Register togglePageMode={togglePageMode} />
            </div>
        )
    }
}


export default App
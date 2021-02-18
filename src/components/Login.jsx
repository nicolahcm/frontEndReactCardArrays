import React, { useState, useEffect } from 'react';
import MessageLoginRegister from './MessageLoginRegister';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

const Login = ({ togglePageMode }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [msg, setMsg] = useState("Hi")
    const [typeMsg, setTypeMsg] = useState("null")

    useEffect(() => {
        return () => {
            console.log("login component unmounted")
            clearTimeout(timer)
        }
    }, [])


    const location = useLocation()
    const { state } = location
    const { from } = state || { from: { pathname: "/" } };

    // console.log("location in login is", location)


    let timer;

    let history = useHistory()

    const handleClickLogin = (e) => {
        e.preventDefault()

        fetch('http://localhost:5000/api/users/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: password, username: username })
        })
            .then(firstReq => {
                console.log(firstReq)
                return firstReq.json()
            })
            .then(result => {   // result is either the token or the error.
                if (result.ableToLogin) {

                    console.log("result of login is", result)

                    // Setting local storage!
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("user", result.name)

                    console.log("history.replace main executing...")
                    history.replace(from)  // Redirects to main. Difference with push being that We cannot go back to login!
                    // Same as <Redirect to="/main">
                } else {
                    setTypeMsg('error')
                    setMsg('Invalid Password And Username! Or user does not exist')

                    timer = setTimeout(() => setTypeMsg('null'), 5000)
                }
            })
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClickRegisterBtn = (e) => {
        e.preventDefault()
        togglePageMode('Register')
    }

    return (
        <div>
            <MessageLoginRegister
                msg={msg}
                typeMsg={typeMsg}
            />

            <form className="mt-5">

                <input type="text" value={username} onChange={handleChangeUsername} />
                <br />
                <input type="password" value={password} onChange={handleChangePassword} />
                <br />
                <input type="button" onClick={handleClickRegisterBtn} value="New user? Register here!" />
                <input type="button" onClick={handleClickLogin} value="Login" />

            </form>
            <br />

        </div>
    )
}

export default Login
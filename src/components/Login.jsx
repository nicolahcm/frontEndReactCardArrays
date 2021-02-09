import React, { useState } from 'react';




const Login = ({ togglePageMode }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                    togglePageMode("Main")
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
            <form className="mt-5">

                <input type="text" value={username} onChange={handleChangeUsername} />
                <br />
                <input type="password" value={password} onChange={handleChangePassword} />
                <br />
                <input type="button" onClick={handleClickLogin} value="LOGIN" />
            </form>
            <br />

            <input type="button" onClick={handleClickRegisterBtn} value="Not a user yet? Register!" />

        </div>
    )
}

export default Login
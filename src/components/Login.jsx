import React, { useState } from 'react';




const Login = ({ togglePageMode }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClickLogin = (e) => {
        e.preventDefault()

        if (username === "nicola" && password == "hiEveryone") {
            togglePageMode()
        }
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form className="mt-5">

                <input type="text" value={username} onChange={handleChangeUsername} />
                <br />
                <input type="text" value={password} onChange={handleChangePassword} />
                <br />
                <input type="button" onClick={handleClickLogin} value="LOGIN" />
            </form>

        </div>
    )
}

export default Login
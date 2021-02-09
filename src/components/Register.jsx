import React, { useState } from 'react';
import MessageLoginRegister from './MessageLoginRegister';

const Register = ({ togglePageMode }) => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleClickLoginBtn = (e) => {
        e.preventDefault()
        togglePageMode('Login')
    }

    const handleClickRegisterBtn = (e) => {
        e.preventDefault()

        if (password === confirmPassword) {

            fetch('http://localhost:5000/api/users/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name, password: password, username: username }),
            })
                .then(firstHeaders => {
                    return firstHeaders.json()
                })
                .then(savedUser => {
                    console.log('savedUser successful!,', savedUser)
                    // Should display some messages and then redirect to the login.
                })
        }
    }



    return (
        <div>
            Hi Everyone

            <form>
                <input type="text" value={name} onChange={handleChangeName} placeholder="insert your name" />
                <br />
                <input type="text" value={username} onChange={handleChangeUsername} placeholder="insert your username" />
                <br />
                <input type="password" value={password} onChange={handleChangePassword} placeholder="insert your password" />
                <br />
                <input type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder="confirm password" />
                <br />
                <input type="button" onClick={handleClickRegisterBtn} value="Register" />
            </form>


            <input type="button" onClick={handleClickLoginBtn} value="Already a user? Login!" />
        </div>
    )
}

export default Register


// Things To do: 
// 1) Add message
// 2) Understand why chrome says that there has been a password breach!
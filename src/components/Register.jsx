import React, { useState, useEffect } from 'react';
import MessageLoginRegister from './MessageLoginRegister';
import { Link } from 'react-router-dom';

const Register = ({ togglePageMode }) => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [msg, setMsg] = useState("Hi")
    const [typeMsg, setTypeMsg] = useState("null")


    useEffect(() => {
        return () => {
            console.log("register component unmounted")
            clearTimeout(timer)
        }
    }, [])

    let timer;

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

                    if (savedUser.name) {
                        console.log('savedUser successful!,', savedUser)

                        setMsg("successful registration! Go and register now!")
                        setTypeMsg("success")

                        timer = setTimeout(() => setTypeMsg("null"), 5000)
                        // Should then redirect to the login.
                    }
                })
        }
    }



    return (
        <div>
            Hi Everyone

            <MessageLoginRegister
                typeMsg={typeMsg}
                msg={msg}
            />

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

            {/* <Redirect to="/login"> <button> Already a user? Login here</button></Redirect> ... This immediately redirects somewhere else...  */}
            <Link to="/login"> <button> Already a user? Login here</button> </Link>



        </div>
    )
}

export default Register


// Things To do: 
// 1) Add message
// 2) Understand why chrome says that there has been a password breach!
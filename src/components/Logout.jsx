import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const Logout = ({ setToken }) => {

    let history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()

        setToken(null)
        localStorage.clear()

        history.replace('/')
    }


    return (
        <button onClick={handleClick}  >
            LOGOUT
        </button>
    );
}

export default Logout;
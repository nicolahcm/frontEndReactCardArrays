import React, { useState } from 'react';


const Logout = ({ togglePageMode }) => {

    const handleClick = (e) => {
        e.preventDefault()
        togglePageMode('Login')
        localStorage.clear()
    }


    return (
        <button onClick={handleClick}  >
            LOGOUT
        </button>
    );
}

export default Logout;
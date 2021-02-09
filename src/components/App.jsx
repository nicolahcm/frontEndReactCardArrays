import React, { useState } from 'react';
import Login from './Login';
import Main from './Main';
import Register from './Register';

const App = () => {

    const [pageMode, setPageMode] = useState("Login") // or Main or Register


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
                <Main togglePageMode={togglePageMode} />
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
import React, { useState } from 'react';
import Login from './Login';
import Main from './Main';


const App = () => {

    const [pageMode, setPageMode] = useState("Login") // or Main


    const togglePageMode = () => {
        setPageMode(pageMode === "Login" ? "Main" : "Login")
    }

    return (
        <div>
            {pageMode === "Login" ? <Login togglePageMode={togglePageMode} /> : <Main togglePageMode={togglePageMode} />}
        </div>
    )

}

export default App
import React, { useEffect, useState } from 'react';
import Login from './Login';
import Main from './Main';
import Register from './Register';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Link, Switch, Route, useHistory, Redirect } from 'react-router-dom';

const App = () => {

    const [token, setToken] = useState(null)

    return (

        <Router>
            {
                token ? <Redirect to="/main" /> :
                    <>
                        <Link to="/login"> <button> LOGIN </button> </Link>
                        <Link to="/register"> <button> REGISTER </button> </Link>
                        <Link to="/main"> <button>MAIN</button></Link>
                    </>
            }

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

                <PrivateRoute path="/main" component={Main} setToken={setToken} />
            </Switch>
        </Router >
    )
}

export default App
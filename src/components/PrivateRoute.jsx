import React, { useEffect, useState } from 'react';
import { Route, useLocation, Redirect } from 'react-router-dom';
import verifyToken from '../authenticationChecker';

const PrivateRoute = ({ component: Component, setToken, ...rest }) => {

    const [toRender, setToRender] = useState(null)

    console.log("PrivateRoute mounted")

    const location = useLocation();
    // console.log("location in PrivateRoute is", location)
    // console.log("rest in PrivateRoute is", rest)

    // What other usually do, is just
    // checking that the localStorage contains a token.
    // If so, goes on with the view of the component.
    // In this case, other data, such as fetching the posts, 
    // require authentication. 

    useEffect(() => {

        console.log("using effect of Private Route.")
        verifyToken()
            .then((res) => {
                console.log("res verified is", res)
                if (res) {
                    setToRender(<Component setToken={setToken} />)

                    setToken(localStorage.getItem('token')) // when setting token, login, register, main buttons disappear.

                } else {
                    setToRender(<Redirect to={{ pathname: "/login", state: { from: location } }} />)
                }
            })
        return () => {
            console.log("privateroute component unmounted")
        }
    }, [])



    return (
        <Route {...rest} >
            {toRender}
        </Route>
    );
}

export default PrivateRoute;
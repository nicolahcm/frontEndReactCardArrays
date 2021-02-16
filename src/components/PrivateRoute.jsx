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
        verifyToken()
            .then((res) => {
                console.log("res verified is", res)
                if (res) {
                    setToRender(<Component setToken={setToken} />)
                } else {
                    setToRender(<Redirect to="/login" />)
                }
            })
    }, [])



    return (
        <Route {...rest} >
            {toRender}
        </Route>
    );
}

export default PrivateRoute;
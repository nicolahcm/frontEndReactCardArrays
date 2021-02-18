import React from 'react';


const LateralBar = (props) => {


    const styleLateralBar = {
        width: "290px",
        position: "fixed",
        left: "0px",
        top: "0px",
        backgroundColor: "#454772",
        height: "100vh",
        overflow: "scroll",
        color: "white"

    }

    return (
        <div style={styleLateralBar}>
            <h2> Hi Everyone</h2>
            {props.children}

        </div>
    );
}

export default LateralBar;
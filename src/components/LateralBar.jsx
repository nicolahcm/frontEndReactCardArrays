import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Scrollspy from 'react-scrollspy';



const LateralBar = (props) => {

    let { categories } = props

    const styleLateralBar = {
        width: "290px",
        position: "fixed",
        left: "0px",
        top: "0px",
        backgroundColor: "#454772",
        height: "100vh",
        overflow: "scroll",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    return (
        <div style={styleLateralBar} >
            <h2> Hi Everyone</h2>
            {props.children}
            <hr></hr>

            <Scrollspy id="menuContainerLeft" items={categories.map(cat => cat._id)} currentClassName="is-current">
                {categories.map(category => <li key={category._id} ><a className="nav-link" href={`#${category._id}`}>{category.title}</a> </li>)}
            </Scrollspy>

        </div>
    );
}

export default LateralBar;
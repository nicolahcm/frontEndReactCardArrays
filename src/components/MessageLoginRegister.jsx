import React, { useState, useEffect } from 'react';


const MessageLoginRegister = ({ msg, typeMsg }) => {


    if (typeMsg === "error") {
        return (
            <div className="errorMsg" >
                <h2>{msg} </h2>
            </div>
        )
    } else if (typeMsg === "success") {
        return (
            <div className="successMsg">
                <h2>{msg}</h2>
            </div>
        )
    } else if (typeMsg === "null") {
        return null
    }


}

export default MessageLoginRegister
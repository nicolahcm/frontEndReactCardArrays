import React from 'react';


const ButtonCreateNewCard = ({ toggleMode }) => {


    return (
        <div className="containerOfNewCardBtn">
            <span className="createNewCardContainer mb-4">
                <i className="fas fa-plus-circle addBtnCard" title="create new card" onClick={toggleMode}></i>
            </span>
        </div>
    )
}

export default ButtonCreateNewCard
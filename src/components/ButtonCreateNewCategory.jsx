import React from 'react';



const ButtonCreateNewCategory = ({ toggleMode }) => {

    return (
        <div className="createNewCategoryContainer mt-5" style={{
            marginLeft: "290px !important",
            marginBottom: "50px !important"
        }}>
            <i className="fas fa-plus-circle addBtnCategory" title="create new category" onClick={toggleMode}></i>
        </div >
    )
}


export default ButtonCreateNewCategory
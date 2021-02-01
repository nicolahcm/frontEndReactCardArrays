import React, { useState } from 'react';



const Card = ({ id, title, body, belongingCategoryId, deleteCard }) => {


    const [editMode, setEditMode] = useState(false)


    const handleOnCardClick = (e) => {

        if (e.target.classList.contains('trashingTheCard')) {
            deleteCard(id, belongingCategoryId)
        }
        else {
            setEditMode(editMode === true ? false : true)
        }

    }



    return (

        <div className="card text-white bg-primary mb-3 singleCardForArr" data-id={id} data-belongingcategoryid={belongingCategoryId} onClick={handleOnCardClick}>
            <i className={`fas fa-trash-alt trashingTheCard ${editMode === true ? "trashingCardVisible" : "trashingCardInvisible"}`}></i>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div >
    )
}

export default Card
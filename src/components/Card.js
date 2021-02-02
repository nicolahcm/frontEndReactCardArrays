import React, { useState } from 'react';



const Card = ({ id, title, body, categoryId, deleteCard }) => {


    const [editMode, setEditMode] = useState(false)


    const handleClickOnCard = (e) => {

        // the trash btn is on the card.
        if (e.target.classList.contains('trashingTheCard')) {
            deleteCard(id, categoryId)
        }
        else {
            setEditMode(editMode === true ? false : true)
        }
    }



    return (

        <div className="card text-white bg-primary mb-3 singleCardForArr" data-id={id} data-belongingcategoryid={categoryId} onClick={handleClickOnCard}>
            <i className={`fas fa-trash-alt trashingTheCard ${editMode === true ? "trashingCardVisible" : "trashingCardInvisible"}`}></i>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div >
    )
}

export default Card
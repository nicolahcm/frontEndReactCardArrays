import React, { useState } from 'react';



const Card = ({ id, title, body, categoryId, deleteCard, toggleMode }) => {


    const [showEditAndDeleteBtns, setShowAndDeleteBtns] = useState(false)

    const handleClickOnCard = (e) => {

        // DELETE (the trash btn is on the card.)
        if (e.target.classList.contains('trashingTheCard')) {

            // confirmation
            let areYouSureDelete = window.confirm('Are you sure you want to delete this card?')
            if (areYouSureDelete) {
                deleteCard(id, categoryId)
            }
        }

        // UPDATE 
        else if (e.target.classList.contains('editCard')) {
            console.log('edit Card btn pressed')

            toggleMode()  // go to updateForm mode.
        }

        // HIDE BTNS
        else {
            setShowAndDeleteBtns(showEditAndDeleteBtns === true ? false : true)
        }
    }


    return (
        <div className="card text-white bg-primary mb-3 singleCardForArr" data-id={id} data-belongingcategoryid={categoryId} onClick={handleClickOnCard}>
            <i className={`fas fa-trash-alt trashingTheCard ${showEditAndDeleteBtns === true ? "trashingCardVisible" : "trashingCardInvisible"}`}></i>
            <i className={`fas fa-edit editCard ${showEditAndDeleteBtns === true ? "editCardVisible" : "editCardInvisible"}`}></i>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
            </div>
        </div >
    )

}

export default Card
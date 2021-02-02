import React, { useState } from 'react';



const Card = ({ id, title, body, categoryId, deleteCard, updateCard }) => {


    const [showEditBtn, setShowEditBtn] = useState(false)
    const [mode, setMode] = useState('card')  // or formUpdate

    const [titleCardState, setTitleCardState] = useState(title)
    const [bodyCardState, setBodyCardState] = useState(body)


    const handleChangeBodyCardState = (e) => {
        setBodyCardState(e.target.value)
    }

    const handleChangeTitleCardState = (e) => {
        setTitleCardState(e.target.value)

    }

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
            setMode('formUpdate')
        }

        // HIDE BTNS
        else {
            setShowEditBtn(showEditBtn === true ? false : true)
        }
    }

    const handleClickOnFormUpdateBackBtn = (e) => {
        e.preventDefault()
        setMode('card')
    }

    const handleClickOnFormUpdateAddBtn = (e) => {
        e.preventDefault()
        updateCard(bodyCardState, titleCardState, id, categoryId)

        setMode('card')
        setShowEditBtn(false)
    }

    // Conditional rendering, 2 modes.

    if (mode === "card") {
        return (

            <div className="card text-white bg-primary mb-3 singleCardForArr" data-id={id} data-belongingcategoryid={categoryId} onClick={handleClickOnCard}>
                <i className={`fas fa-trash-alt trashingTheCard ${showEditBtn === true ? "trashingCardVisible" : "trashingCardInvisible"}`}></i>
                <i className={`fas fa-edit editCard ${showEditBtn === true ? "editCardVisible" : "editCardInvisible"}`}></i>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div >
        )
    } else if (mode === "formUpdate") {

        return (
            <div className="containerOfUpdateCard mb-3">
                <div className="formWrapper">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control input-sm" placeholder="Insert the title of the card" value={titleCardState} onChange={handleChangeTitleCardState} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <textarea rows="4" type="text" className="form-control input-group-sm" placeholder="Insert the content of the card" value={bodyCardState} onChange={handleChangeBodyCardState} />
                        </div>
                        <div className="buttonsContainerForm">
                            <button className="btn btn-primary" onClick={handleClickOnFormUpdateAddBtn}>Update</button>
                            <button className="btn btn-primary" onClick={handleClickOnFormUpdateBackBtn}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        )


    }

}

export default Card
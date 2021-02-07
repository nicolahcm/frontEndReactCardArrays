import React, { useState } from 'react';



const CreateNewCard = ({ addCard, categoryId }) => {

    // This is either the button or the form for creating a new card.

    const [mode, setMode] = useState("button")  // or form
    const [titleCard, setTitleCard] = useState("")
    const [bodyCard, setBodyCard] = useState("")


    const toggleMode = (e) => {
        e.preventDefault()
        setMode(mode === "button" ? "form" : "button")
    }

    const handleChangeTitle = (e) => {
        setTitleCard(e.target.value)
    }

    const handleChangeBody = (e) => {
        setBodyCard(e.target.value)
    }

    const handleClickBtnAdd = (e) => {
        e.preventDefault()
        addCard(titleCard, bodyCard, categoryId)
        toggleMode(e)

        // clear fields.
        setTitleCard("")
        setBodyCard("")
    }


    // Button mode
    if (mode === "button") {
        return (
            <div className="containerOfNewCardBtn">
                <span className="createNewCardContainer mb-4">
                    <i className="fas fa-plus-circle addBtnCard" title="create new card" onClick={toggleMode}></i>
                </span>
            </div>
        )
    }

    // Form mode
    else if (mode === "form") {
        return (
            <div className="containerOfNewCardBtn">
                <div className="formWrapper">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control input-sm" placeholder="Insert the title of the card" value={titleCard} onChange={handleChangeTitle} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <textarea rows="4" type="text" className="form-control input-group-sm" placeholder="Insert the content of the card" value={bodyCard} onChange={handleChangeBody} />
                        </div>
                        <div className="buttonsContainerForm">
                            <button className="btn btn-primary" onClick={handleClickBtnAdd}>Add</button>
                            <button className="btn btn-primary" onClick={toggleMode}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default CreateNewCard
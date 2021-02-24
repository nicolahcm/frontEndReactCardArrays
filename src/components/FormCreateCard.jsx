import React, { useState } from 'react';


const FormCreateCard = ({ toggleMode, addCard, categoryId }) => {


    const [titleCard, setTitleCard] = useState("")
    const [bodyCard, setBodyCard] = useState("")

    const handleChangeTitle = (e) => {
        setTitleCard(e.target.value)
    }

    const handleChangeBody = (e) => {
        setBodyCard(e.target.value)
    }

    const handleClickBtnAdd = (e) => {
        e.preventDefault()

        let token = localStorage.getItem('token')

        addCard(titleCard, bodyCard, categoryId, token)
        toggleMode(e)

        // clear fields.
        setTitleCard("")
        setBodyCard("")
    }

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

export default FormCreateCard
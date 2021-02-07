import React, { useState } from 'react';

const FormUpdateCard = ({ id, title, body, categoryId, updateCard, toggleMode }) => {

    const [titleCardState, setTitleCardState] = useState(title)
    const [bodyCardState, setBodyCardState] = useState(body)


    const handleChangeBodyCardState = (e) => {
        setBodyCardState(e.target.value)
    }

    const handleChangeTitleCardState = (e) => {
        setTitleCardState(e.target.value)
    }

    const handleClickOnFormUpdateBackBtn = (e) => {
        e.preventDefault()
        toggleMode()
    }

    const handleClickOnFormUpdateAddBtn = (e) => {
        e.preventDefault()
        updateCard(bodyCardState, titleCardState, id, categoryId)

        toggleMode() // return to card mode
    }

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

export default FormUpdateCard
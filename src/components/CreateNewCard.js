import React, { useState } from 'react';



const CreateNewCard = ({ addCard, categoryId }) => {

    const [modeAdd, setModeAdd] = useState(false)
    const [titleCard, setTitleCard] = useState("")
    const [bodyCard, setBodyCard] = useState("")


    const toggleModeAdd = (e) => {
        e.preventDefault()
        setModeAdd(modeAdd === true ? false : true)

    }

    const changeTitleHandler = (e) => {
        setTitleCard(e.target.value)
    }

    const changeBodyHandler = (e) => {
        setBodyCard(e.target.value)
    }

    const handleAddButton = (e) => {
        e.preventDefault()
        console.log("Works!")

        addCard(titleCard, bodyCard, categoryId)

        toggleModeAdd(e)
    }

    if (!modeAdd) {
        return (
            <span className="createNewCardContainer mb-4">
                <i className="fas fa-plus-circle addBtnCard" title="create new card" onClick={toggleModeAdd}></i>
            </span>
        )
    } else if (modeAdd) {
        return (
            <div className="formWrapper">
                <form >
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control input-sm" placeholder="Insert the title of the card" value={titleCard} onChange={changeTitleHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea rows="4" type="text" className="form-control input-group-sm" placeholder="Insert the content of the card" value={bodyCard} onChange={changeBodyHandler} />
                    </div>
                    <div className="buttonsContainerForm">
                        <button className="btn btn-primary" onClick={handleAddButton}>Add</button>
                        <button className="btn btn-primary" onClick={toggleModeAdd}>Back</button>
                    </div>
                </form>
            </div>
        )
    }



    ///    1ST SOLUTION. THIS WORKS. When trying to change colors to button. The above one is more elegant!
    ////

    // if (color === "normal") {
    //     return (
    //         <span className="createNewCardContainer mb-4">
    //             <i className="fas fa-plus-circle addBtnCard" title="create new card" onClick={changeColor}></i>
    //         </span>
    //     )
    // } else if (color === "green") {
    //     return (
    //         <span className="createNewCardContainer mb-4">
    //             <i className="fas fa-plus-circle addBtnCardGreen" title="create new card" onClick={changeColor}></i>
    //         </span>
    //     )
    // }

}



export default CreateNewCard
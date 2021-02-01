import React, { useState } from 'react';

const CreateNewCategory = ({ addCat }) => {

    const [modeAdd, setModeAdd] = useState(false)
    const [titleCategory, setTitleCategory] = useState("")

    const toggleModeAdd = (e) => {
        e.preventDefault()
        setModeAdd(modeAdd === false ? true : false)
    }

    const handleChangeInputCat = (e) => {
        setTitleCategory(e.target.value)
    }

    const handleAddBtnCatSend = (e) => {
        e.preventDefault()
        addCat(titleCategory)

        // clean field:
        setTitleCategory("")
    }

    if (!modeAdd) {
        return (
            <div className="createNewCategoryContainer mt-5 mb-5" >
                <i className="fas fa-plus-circle addBtnCategory" title="create new category" onClick={toggleModeAdd}></i>
            </div>
        )
    } else if (modeAdd) {
        return (
            <div className="categoryAddBtnContainer">
                <div className="formWrapper mt-5">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Category Title</label>
                            <input type="text"
                                className="form-control input-sm"
                                placeholder="Insert the title of the Category"
                                value={titleCategory}
                                onChange={handleChangeInputCat} />
                        </div>
                        <div className="buttonsContainerForm">
                            <button className="btn btn-primary" onClick={handleAddBtnCatSend}>Add</button>
                            <button className="btn btn-primary" onClick={toggleModeAdd}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default CreateNewCategory
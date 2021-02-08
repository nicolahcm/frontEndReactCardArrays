import React, { useState } from 'react';


const FormUpdateCategory = ({ categoryTitle, toggleMode, updateCategory, categoryId }) => {

    const [titleCategoryState, setTitleCategoryState] = useState(categoryTitle)

    const handleChangeTitleCategoryState = (e) => {
        setTitleCategoryState(e.target.value)
    }

    const handleClickFormUpdateBtn = (e) => {
        e.preventDefault()
        updateCategory(titleCategoryState, categoryId)
            .then(() => toggleMode(e))
    }

    return (
        <div className="categoryAddBtnContainer mb-5">
            <div className="formWrapper mt-5">
                <form >
                    <div className="mb-3">
                        <label className="form-label">Category Title</label>
                        <input type="text"
                            className="form-control input-sm"
                            placeholder="Insert the title of the Category"
                            value={titleCategoryState}
                            onChange={handleChangeTitleCategoryState} />
                    </div>
                    <div className="buttonsContainerForm">
                        <button className="btn btn-primary" onClick={handleClickFormUpdateBtn}>Update</button>
                        <button className="btn btn-primary" onClick={toggleMode}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default FormUpdateCategory
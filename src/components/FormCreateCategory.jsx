import React, { useState } from 'react';


const FormCreateCategory = ({ addCat, toggleMode }) => {

    const [titleCategory, setTitleCategory] = useState("")

    const handleChangeInputCat = (e) => {
        setTitleCategory(e.target.value)
    }

    // Do not need to name it handleClickBtnAddCategory, because we already are in "CreateNewCategory" component.
    const handleClickBtnAdd = (e) => {
        e.preventDefault()

        console.log(titleCategory.match(/\S/g))
        //REGEX: returns an array with all characters different from space.
        // If there are only spaces (no other different characters), is NULL

        let token = localStorage.getItem('token')

        console.log("token in form createCat is", token)

        if (titleCategory.match(/\S/g)) {
            addCat(titleCategory, token)
        } else {
            alert('Insert a valid title!')
        }

        // clean field:
        setTitleCategory("")
        // return to button mode
        toggleMode(e)
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
                            value={titleCategory}
                            onChange={handleChangeInputCat} />
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

export default FormCreateCategory
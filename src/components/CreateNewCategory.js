import React, { useState } from 'react';



const CreateNewCategory = ({ addCat }) => {

    const [mode, setMode] = useState("buttonMode")
    const [titleCategory, setTitleCategory] = useState("")

    const toggleMode = (e) => {
        e.preventDefault()
        setMode(mode === "buttonMode" ? "formMode" : "buttonMode")
    }

    const handleChangeInputCat = (e) => {
        setTitleCategory(e.target.value)
    }


    // Do not need to name it handleClickBtnAddCategory, because we already are in "CreateNewCategory" component.
    const handleClickBtnAdd = (e) => {
        e.preventDefault()

        console.log(titleCategory.match(/\S/g))
        //REGEX: returns an array with all characters different from space.
        // If there are only spaces (no other different characters), is NULL

        if (titleCategory.match(/\S/g)) {
            addCat(titleCategory)
        } else {
            alert('Insert a valid title!')
        }

        // clean field:
        setTitleCategory("")
    }



    if (mode === "buttonMode") {
        return (
            <div className="createNewCategoryContainer mt-5 mb-5" >
                <i className="fas fa-plus-circle addBtnCategory" title="create new category" onClick={toggleMode}></i>
            </div>
        )
    } else if (mode === "formMode") {
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
                            <button className="btn btn-primary" onClick={handleClickBtnAdd}>Add</button>
                            <button className="btn btn-primary" onClick={toggleMode}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default CreateNewCategory
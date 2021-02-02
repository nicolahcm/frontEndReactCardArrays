import React, { useState } from 'react';
import Cards from './Cards';


const Category = ({ categoryTitle, categoryId, categoryCards, addCard, deleteCard, deleteCategory, updateCard, updateCategory }) => {

    const [showEditBtn, setShowEditBtn] = useState(false)
    const [mode, setMode] = useState('title')  // or formToUpdate
    const [titleCategoryState, setTitleCategoryState] = useState(categoryTitle)

    const handleChangeTitleCategoryState = (e) => {
        setTitleCategoryState(e.target.value)
    }

    const handleClickFormBackBtn = (e) => {
        e.preventDefault()
        setMode('title')
    }

    const handleClickFormUpdateBtn = (e) => {
        e.preventDefault()
        updateCategory(titleCategoryState, categoryId).then(() => setMode('title'))
    }

    const handleEditModeAndDelete = (e) => {

        // Edit mode: when clicking the title of category
        if (e.target.classList.contains('enableEditMode')) {
            setShowEditBtn(showEditBtn === true ? false : true)
        }

        // delete: if pressing the trash button
        else if (e.target.classList.contains('trashingTheCategory')) {
            let sureWantDelete = window.confirm('Are you sure you want to delete this category?')
            if (sureWantDelete) {
                deleteCategory(categoryId)
            } else {
                setShowEditBtn(false)
            }
        }

        // update
        else if (e.target.classList.contains('editCategoryBtn')) {
            setMode('formToUpdate')
        }


    }


    if (mode === 'formToUpdate') {
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
                            <button className="btn btn-primary" onClick={handleClickFormBackBtn}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        )


    } else if (mode === 'title') {
        return (
            <div className="category" data-id={categoryId}>
                <div className="mt-5 mb-2 categoryTitleFont" onClick={handleEditModeAndDelete}>

                    <b className="categoryTitleFont enableEditMode">
                        <i className={`fas fa-edit editCategoryBtn ${showEditBtn === true ? "editCatVisible" : "editCatInvisible"}`} ></i>
                        <i className={`fas fa-trash-alt trashingTheCategory ${showEditBtn === true ? "trashingCatVisible" : "trashingCatInvisible"}`}></i>

                        {categoryTitle}

                    </b>
                </div>



                <Cards
                    categoryCards={categoryCards}
                    addCard={addCard}
                    deleteCard={deleteCard}
                    categoryId={categoryId}
                    updateCard={updateCard}
                />


            </div>
        )
    }


}


export default Category
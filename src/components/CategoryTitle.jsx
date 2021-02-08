import React, { useState } from 'react';



const CategoryTitle = ({ categoryTitle, toggleMode, deleteCategory, categoryId }) => {

    const [showEditBtn, setShowEditBtn] = useState(false)

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

        // update form
        else if (e.target.classList.contains('editCategoryBtn')) {
            toggleMode(e)
        }
    }



    return (
        <div className="category" data-id={categoryId}>
            <div className="mt-5 mb-2 categoryTitleFont" onClick={handleEditModeAndDelete}>

                <b className="categoryTitleFont enableEditMode">
                    <i className={`fas fa-edit editCategoryBtn ${showEditBtn === true ? "editCatVisible" : "editCatInvisible"}`} ></i>
                    <i className={`fas fa-trash-alt trashingTheCategory ${showEditBtn === true ? "trashingCatVisible" : "trashingCatInvisible"}`}></i>

                    {categoryTitle}

                </b>
            </div>
        </div>
    )
}

export default CategoryTitle
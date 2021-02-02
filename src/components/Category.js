import React, { useState } from 'react';
import Cards from './Cards';


const Category = ({ categoryTitle, categoryId, categoryCards, addCard, deleteCard, deleteCategory }) => {

    const [editMode, setEditMode] = useState(false)

    const handleEditModeAndDelete = (e) => {

        // Edit mode: when clicking the title of category
        if (e.target.classList.contains('enableEditMode')) {
            setEditMode(editMode === true ? false : true)
        }

        // delete: if pressing the trash button
        else if (e.target.classList.contains('trashingTheCategory')) {
            let sureWantDelete = window.confirm('Are you sure you want to delete this category?')
            if (sureWantDelete) {
                deleteCategory(categoryId)
            } else {
                setEditMode(false)
            }
        }

        // left the update.

    }

    return (
        <div className="category" data-id={categoryId}>
            <div className="mt-5 mb-2 categoryTitleFont" onClick={handleEditModeAndDelete}>
                <b className="categoryTitleFont enableEditMode">
                    <i className={`fas fa-trash-alt trashingTheCategory ${editMode === true ? "trashingCatVisible" : "trashingCatInvisible"}`}></i>

                    {categoryTitle}

                </b>
            </div>



            <Cards
                categoryCards={categoryCards}
                addCard={addCard}
                deleteCard={deleteCard}
                categoryId={categoryId}
            />


        </div>
    )


}


export default Category
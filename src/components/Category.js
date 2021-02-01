import React, { useState } from 'react';
import Card from './Card';
import CreateNewCard from './CreateNewCard';


const Category = ({ categoryTitle, categoryId, categoryCards, addCard, deleteCard, deleteCategory }) => {

    const [editMode, setEditMode] = useState(false)

    const handleEditModeAndDelete = (e) => {
        // Edit mode: when clicking the title of category
        if (e.target.classList.contains('categoryTitleFont')) {
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
            <div className="mt-5 mb-2 categoryTitleFont">

                <b className="categoryTitleFont" onClick={handleEditModeAndDelete}>
                    <i className={`fas fa-trash-alt trashingTheCategory ${editMode === true ? "trashingCatVisible" : "trashingCatInvisible"}`}></i>

                    {categoryTitle}
                </b>
            </div>

            <div className="cardsContainerWhole">

                <div className="cardsContainer">
                    {categoryCards.map(card =>
                        <Card
                            key={card._id}
                            id={card._id}
                            title={card.title}
                            body={card.body}
                            belongingCategoryId={categoryId}
                            deleteCard={deleteCard}
                        />)}
                </div>

                <div className="containerOfNewCardBtn">
                    <CreateNewCard
                        addCard={addCard}
                        categoryId={categoryId} />
                </div>

            </div>
        </div>
    )


}


export default Category
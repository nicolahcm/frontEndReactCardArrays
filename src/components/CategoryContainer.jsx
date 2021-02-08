import React, { useState } from 'react';
import Cards from './Cards';
import CategoryOrForm from './CategoryOrForm';

const CategoryContainer = ({ categoryTitle, categoryId, categoryCards, addCard, deleteCard, deleteCategory, updateCard, updateCategory }) => {

    return (
        <div>
            <CategoryOrForm                      // title or form to update category
                categoryTitle={categoryTitle}
                categoryId={categoryId}
                categoryCards={categoryCards}
                deleteCategory={deleteCategory}
                updateCategory={updateCategory}
            />

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

export default CategoryContainer


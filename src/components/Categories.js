import React from 'react';
import Category from './Category';




const Categories = ({ categories, addCard, deleteCard, deleteCategory }) => {


    return (
        <>
            {categories.map(category =>
                <Category
                    key={category._id}

                    categoryTitle={category.title}
                    categoryId={category._id}
                    categoryCards={category.cards}

                    addCard={addCard}
                    deleteCard={deleteCard}
                    deleteCategory={deleteCategory}
                />)}
        </>
    )

}



export default Categories
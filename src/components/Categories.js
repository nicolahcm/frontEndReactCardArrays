import React from 'react';
import Category from './Category';




const Categories = ({ categories, addCard, deleteCard, deleteCategory, updateCard, updateCategory }) => {


    return (
        <div>
            {
                categories.map(category =>
                    <Category
                        key={category._id}

                        categoryTitle={category.title}
                        categoryId={category._id}
                        categoryCards={category.cards}

                        addCard={addCard}
                        deleteCard={deleteCard}
                        deleteCategory={deleteCategory}
                        updateCard={updateCard}
                        updateCategory={updateCategory}
                    />)
            }
        </div>
    )

}



export default Categories
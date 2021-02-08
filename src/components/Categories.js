import React from 'react';
import CategoryContainer from './CategoryContainer'




const Categories = ({ categories, addCard, deleteCard, deleteCategory, updateCard, updateCategory }) => {


    return (
        <div>
            {
                categories.map(category =>
                    <CategoryContainer
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
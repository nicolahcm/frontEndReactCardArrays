import React from 'react';
import CategoryContainer from './CategoryContainer'




const Categories = ({ categories, addCard, deleteCard, deleteCategory, updateCard, updateCategory }) => {

    const style = {
        position: "relative",
        marginLeft: "290px",
        height: "100%",
        overflowY: "visible"
    }


    return (
        <div id="rightColumnWrapper" style={style} data-bs-spy="scroll" data-bs-target="#menuContainerLeft" data-bs-offset="0"
            tabindex="0">
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
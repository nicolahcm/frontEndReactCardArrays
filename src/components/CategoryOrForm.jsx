import React, { useState } from 'react';
import CategoryTitle from './CategoryTitle';
import FormUpdateCategory from './FormUpdateCategory'

const CategoryOrForm = ({ categoryTitle, categoryId, deleteCategory, updateCategory }) => {

    const [mode, setMode] = useState('title')  // or formToUpdate

    // should change all the toggleModes // A function that just changes it. The event should be handled later in the child.
    const toggleMode = (e) => {
        e.preventDefault()
        setMode(mode === 'title' ? 'formToUpdate' : 'title')
    }


    return (
        <div>

            { mode === "title" ?
                <CategoryTitle
                    categoryTitle={categoryTitle}
                    toggleMode={toggleMode}
                    deleteCategory={deleteCategory}
                    categoryId={categoryId}
                />
                :
                <FormUpdateCategory
                    toggleMode={toggleMode}
                    categoryId={categoryId}
                    categoryTitle={categoryTitle}
                    updateCategory={updateCategory}
                />}
        </div>
    )

}

export default CategoryOrForm
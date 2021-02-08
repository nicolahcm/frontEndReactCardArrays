import React, { useState } from 'react';
import FormCreateCard from './FormCreateCard';
import ButtonCreateNewCard from './ButtonCreateNewCard';


const CreateNewCard = ({ addCard, categoryId }) => {

    // This is either the button or the form for creating a new card.

    const [mode, setMode] = useState("button")  // or form

    const toggleMode = (e) => {
        e.preventDefault()
        setMode(mode === "button" ? "form" : "button")
    }

    return (
        <>
            {mode === "button" ?
                <ButtonCreateNewCard
                    toggleMode={toggleMode}
                />
                :
                <FormCreateCard
                    toggleMode={toggleMode}
                    addCard={addCard}
                    categoryId={categoryId}
                />}
        </>
    )


}

export default CreateNewCard
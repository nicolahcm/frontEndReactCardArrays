import React, { useState } from 'react';
import ButtonCreateNewCategory from './ButtonCreateNewCategory';
import FormCreateCategory from './FormCreateCategory';



const CreateNewCategory = ({ addCat }) => {

    const [mode, setMode] = useState("buttonMode") // or formMode

    const toggleMode = (e) => {
        e.preventDefault()
        setMode(mode === "buttonMode" ? "formMode" : "buttonMode")
    }

    const conditionalRendering = () => {
        if (mode === "buttonMode") {
            return <ButtonCreateNewCategory toggleMode={toggleMode} />
        } else if (mode === "formMode") {
            return <FormCreateCategory toggleMode={toggleMode} addCat={addCat} />
        }
    }

    return (
        <>
            { conditionalRendering()}
        </>
    )

}


export default CreateNewCategory
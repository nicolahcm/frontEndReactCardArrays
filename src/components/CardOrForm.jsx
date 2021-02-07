import React, { useState } from 'react';
import Card from './Card';
import FormUpdateCard from './FormUpdateCard';


const CardOrForm = ({ id, title, body, categoryId, deleteCard, updateCard }) => {

    const [mode, setMode] = useState('card')  // or "form"

    const toggleMode = () => {
        setMode(mode === "card" ? "form" : "card")
    }

    const conditionalRendering = () => {
        if (mode === 'card') {
            return <Card
                id={id}
                title={title}
                body={body}
                categoryId={categoryId}
                deleteCard={deleteCard}
                toggleMode={toggleMode}
            />
        } else if (mode === "form") {
            return <FormUpdateCard
                id={id}
                title={title}
                body={body}
                categoryId={categoryId}
                updateCard={updateCard}
                toggleMode={toggleMode}
            />
        }
    }

    return (
        <div>
            {conditionalRendering()}
        </div>
    )
}


export default CardOrForm
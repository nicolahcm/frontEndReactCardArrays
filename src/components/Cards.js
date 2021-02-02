import Card from './Card';
import CreateNewCard from './CreateNewCard';




const Cards = ({ categoryCards, categoryId, deleteCard, addCard }) => {
    return (
        <div className="cardsContainerWhole">
            <div className="cardsContainer">
                {categoryCards.map(card =>
                    <Card
                        key={card._id}
                        id={card._id}
                        title={card.title}
                        body={card.body}
                        categoryId={categoryId}
                        deleteCard={deleteCard}
                    />)}
            </div>



            <CreateNewCard
                addCard={addCard}
                categoryId={categoryId}
            />
        </div>
    )
}

export default Cards
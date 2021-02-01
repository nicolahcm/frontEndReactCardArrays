import React, { useState, useEffect } from 'react';
import CardServices from '../services/cards';
import CategoryServices from '../services/categories';
import Category from './Category';
import CreateNewCategory from './CreateNewCategory';




const App = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    CategoryServices.getAllCategories().then(categoriesResult => {
      console.log(categoriesResult)
      setCategories(categoriesResult)
    })
  }, [])


  const addCard = (cardTitle, cardBody, categoryIdToUpdate) => {
    // 1) add card http request.
    // 2) update categories.

    fetch('http://localhost:5000/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ belongingCategoryId: categoryIdToUpdate, cardTitle: cardTitle, cardBody: cardBody })
    })
      .then(res => res.json())
      .then(categoryUpdated => {
        setCategories(categories.map(category => category._id === categoryIdToUpdate ? categoryUpdated : category))
      })
  }


  const addCat = (newCategoryTitle) => {
    // 1) add category http request.
    // 2) updates categories.

    fetch("http://localhost:5000/categories", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categoryTitle: newCategoryTitle })
    })
      .then(res => res.json())
      .then(idCategory => {  //the response from backend is the id of the new category created. Should change the backend.
        console.log(`new category! with id ${idCategory}`)
        setCategories(categories.concat({ _id: idCategory, title: newCategoryTitle, cards: [] }))
      })
  }


  const deleteCard = (idCard, belongingCategoryId) => {
    // 1) delete request.
    // 2) updates categories (and internal cards)

    fetch(`http://localhost:5000/cards/${idCard}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(deletedCard => {
        console.log("deletedCard is", deletedCard)

        const categoryToUpdate = categories.find(category => category._id === belongingCategoryId)
        const categoryUpdated = { ...categoryToUpdate, cards: categoryToUpdate.cards.filter(card => card._id !== deletedCard._id) }

        // updates category with the eliminated card.
        setCategories(categories.map(category => category._id === belongingCategoryId ? categoryUpdated : category))
      })
  }


  const deleteCategory = (idCategory) => {
    // 1) delete request.
    // 2) updates categories (with the internal cards)

    fetch(`http://localhost:5000/categories/${idCategory}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(deletedCategory => {
        console.log("deleted category is", deletedCategory)
        setCategories(categories.filter(category => category._id !== idCategory))
      })
  }


  return (
    <div className="App">

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


      <CreateNewCategory addCat={addCat} />

    </div>
  );
}




export default App;

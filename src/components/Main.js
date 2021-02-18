import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import CardServices from '../services/cardServices';
import CategoryServices from '../services/categoryServices';

import CreateNewCategory from './CreateNewCategory';
import Categories from './Categories';
import Logout from './Logout';
import LateralBar from './LateralBar';

// should I initialize it inside Main? Even if it rerenders it, nothing changes, but might be slower.
// Alternative: I instantiate in the initial file and export the instance!
const categoryServices = new CategoryServices()
const cardServices = new CardServices()

const Main = ({ setToken }) => {

  const [categories, setCategories] = useState([])
  const [userName, setUserName] = useState(localStorage.getItem("user"))

  useEffect(() => {
    categoryServices.getAllCategories().then(categories => {
      console.log("all the data is", categories)
      setCategories(categories)
    })
  }, [])

  const location = useLocation()

  console.log("location in main is", location)

  console.log("component Main mounted or updated.")


  const addCard = (cardTitle, cardBody, categoryIdToUpdate) => {
    cardServices.addCardToCategory(cardTitle, cardBody, categoryIdToUpdate)
      .then(categoryUpdated => {
        setCategories(categories.map(category => category._id === categoryIdToUpdate ? categoryUpdated : category))
      })
  }


  const addCat = (newCategoryTitle) => {
    categoryServices.createCategory(newCategoryTitle)
      .then(idCategory => {  //the response from backend is the id of the new category created. Should change the backend.
        console.log(`new category! with id ${idCategory}`)
        setCategories(categories.concat({ _id: idCategory, title: newCategoryTitle, cards: [] }))
      })
  }


  const deleteCard = (idCard, belongingCategoryId) => {
    cardServices.deleteCard(idCard)
      .then(deletedCard => {
        console.log("deletedCard is", deletedCard)

        const categoryToUpdate = categories.find(category => category._id === belongingCategoryId)
        const categoryUpdated = { ...categoryToUpdate, cards: categoryToUpdate.cards.filter(card => card._id !== deletedCard._id) }

        // updates category with the eliminated card.
        setCategories(categories.map(category => category._id === belongingCategoryId ? categoryUpdated : category))
      })
  }


  const deleteCategory = (idCategory) => {
    categoryServices.deleteCategory(idCategory)
      .then(deletedCategory => {
        console.log("deleted category is", deletedCategory)
        setCategories(categories.filter(category => category._id !== idCategory))
      })
  }


  const updateCard = (cardBody, cardTitle, cardId, belongingCategoryId) => {
    cardServices.updateCard(cardBody, cardTitle, cardId)
      .then(updatedCard => {

        const categoryToUpdate = categories.find(category => category._id === belongingCategoryId)
        const categoryUpdated = {
          ...categoryToUpdate,
          cards: categoryToUpdate.cards.map(card => card._id === cardId ? updatedCard : card)
        }

        setCategories(categories.map(category => category._id === belongingCategoryId ? categoryUpdated : category))

      })
  }

  const updateCategory = (newCategoryTitle, categoryId) => {
    return categoryServices.updateCategory(categoryId, newCategoryTitle)
      .then(updatedCategory => {
        setCategories(categories.map(category => category._id === categoryId ? updatedCategory : category))
      })
  }


  return (
    <div className="App"  >
      <LateralBar>
        <h2>Welcome {userName}!</h2>

        <Logout setToken={setToken} />



      </LateralBar>

      <div style={{
        position: "relative",
        left: "290px",
        width: "calc(100vw - 302px)"
      }}>
        <Categories
          categories={categories}


          addCard={addCard}
          deleteCard={deleteCard}
          deleteCategory={deleteCategory}
          updateCard={updateCard}
          updateCategory={updateCategory}
        />

        <CreateNewCategory addCat={addCat} />
      </div>

    </div>
  );
}

export default Main;

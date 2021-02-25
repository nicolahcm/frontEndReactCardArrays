export default class CardServices {
    constructor() {
        this.baseUrl = "http://localhost:5000/cards"
    }

    async getAllCards() {

        let firstReq = await fetch(this.baseUrl)
        let dataJson = await firstReq.json()

        return dataJson
    }




    async deleteCard(idCard) {
        let token = localStorage.getItem('token')
        let finalToken = `bearer ${token}`
        let firstReq = await fetch(`${this.baseUrl}/${idCard}`, {
            method: 'DELETE',
            headers: { 'Authorization': finalToken }
        })
        let deletedCard = await firstReq.json()

        return deletedCard
    }




    async addCardToCategory(cardTitle, cardBody, categoryIdToUpdate, token) {

        let finalToken = `bearer ${token}`

        let firstReq = await fetch(this.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': finalToken },
            body: JSON.stringify({ belongingCategoryId: categoryIdToUpdate, cardTitle: cardTitle, cardBody: cardBody })
        })
        let categoryUpdated = await firstReq.json()

        return categoryUpdated
    }


    async updateCard(cardBody, cardTitle, cardId) {

        let token = localStorage.getItem('token')
        let finalToken = `bearer ${token}`

        let firstReq = await fetch(`${this.baseUrl}/${cardId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': finalToken },
            body: JSON.stringify({ cardBody: cardBody, cardTitle: cardTitle })
        })
        let updatedCard = await firstReq.json()

        return updatedCard
    }


}
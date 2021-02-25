export default class CategoryServices {
    constructor() {
        this.baseUrl = "http://localhost:5000/categories"
    }



    async getAllCategories() {
        let token = localStorage.getItem('token')
        let finalToken = `bearer ${token}`


        let firstReq = await fetch(this.baseUrl, {
            method: "GET",
            headers: { 'Authorization': finalToken }
        })
        let categories = await firstReq.json()

        return categories
    }

    async createCategory(categoryTitle, token) {

        let finalToken = `bearer ${token}`

        console.log("finalToken is", finalToken)

        let firstReq = await fetch(this.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': finalToken },
            body: JSON.stringify({ categoryTitle: categoryTitle })
        })
        let idCategory = await firstReq.json()

        return idCategory
    }

    async deleteCategory(categoryId) {

        let token = localStorage.getItem('token')
        let finalToken = `bearer ${token}`

        let firstReq = await fetch(`${this.baseUrl}/${categoryId}`, {
            method: 'DELETE',
            headers: { 'Authorization': finalToken }
        })
        let deletedCategory = await firstReq.json()

        return deletedCategory
    }


    async updateCategory(categoryId, titleNewCategory) {

        let token = localStorage.getItem('token')
        let finalToken = `bearer ${token}`


        let firstReq = await fetch(`${this.baseUrl}/${categoryId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': finalToken },
            body: JSON.stringify({ categoryTitle: titleNewCategory })
        })
        let updatedCategory = await firstReq.json()

        return updatedCategory
    }





}
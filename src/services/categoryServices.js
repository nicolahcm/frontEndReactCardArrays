export default class CategoryServices {
    constructor() {
        this.baseUrl = "http://localhost:5000/categories"
    }



    async getAllCategories() {

        let firstReq = await fetch(this.baseUrl)
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

        let firstReq = await fetch(`${this.baseUrl}/${categoryId}`, {
            method: 'DELETE'
        })
        let deletedCategory = await firstReq.json()

        return deletedCategory
    }


    async updateCategory(categoryId, titleNewCategory) {
        let firstReq = await fetch(`${this.baseUrl}/${categoryId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ categoryTitle: titleNewCategory })
        })
        let updatedCategory = await firstReq.json()

        return updatedCategory
    }





}
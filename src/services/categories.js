export default class CategoryServices {
    constructor() {
        this.baseUrl = "http://localhost:5000/categories"
    }



    static async getAllCategories() {


        let firstReq = await fetch("http://localhost:5000/categories")
        let dataJson = await firstReq.json()

        return dataJson
    }






}
export default class CardServices {
    constructor() {
        this.baseUrl = "http://localhost:5000/cards"
    }



    static async getAllCards() {


        let firstReq = await fetch("http://localhost:5000/cards")
        let dataJson = await firstReq.json()

        return dataJson
    }






}
export default class UserServices {
    constructor() {
        this.baseUrl = "/api/users"
    }

    async login(password, username) {

        let res = await fetch(`${this.baseUrl}/login`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: password, username: username })
        })

        return res

    }

    async authenticate(token) {

        let firstRes = await fetch(`${this.baseUrl}/validate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: token })
        })

        return firstRes
    }

}
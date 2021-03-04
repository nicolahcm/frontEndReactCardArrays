import UserServices from './services/userServices'


let userServices = new UserServices()

// Verify token!
const verifyToken = async () => {

    let token = localStorage.getItem('token') // if exists is a string.
    console.log("verify token initialized... token is", token)

    if (token) {

        console.log("token in local storage is", token)

        let firstRes = await userServices.authenticate(token)

        let user = await firstRes.json()

        console.log("user is ", user)

        if (user) {
            return true
        }
        return false
    }
}

export default verifyToken
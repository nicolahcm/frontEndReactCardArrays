// Verify token!




const verifyToken = async () => {

    let token = localStorage.getItem('token') // if exists is a string.
    console.log("verify token initialized... token is", token)

    if (token) {

        console.log("token in local storage is", token)

        let firstRes = await fetch("http://localhost:5000/api/users/validate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: token })
        })

        let user = await firstRes.json()

        console.log("user is ", user)

        if (user) {
            return true
        }
        return false
    }
}

export default verifyToken
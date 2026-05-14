function verifyLogin(user, pass){
    console.log(user, pass)
    return user === process.env.USER && pass === process.env.PASS
}

export {verifyLogin}
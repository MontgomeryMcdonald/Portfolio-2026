import jwt from 'jsonwebtoken'

function verifyToken(req){
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY
    let jwtSecretKey = process.env.JWT_SECRET
    try {
        const token = req.header(tokenHeaderKey)
        const verified = jwt.verify(token, jwtSecretKey)
        if (verified){
            return true
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}


function genToken(){
    let jwtSecretKey = process.env.JWT_SECRET
    let data = {
        time: Date(),
    }
    return jwt.sign(data, jwtSecretKey)
}


export {verifyToken, genToken}
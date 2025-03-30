const jwt=require("jsonwebtoken")

let secret="fdghjgfrghryjgdfrte"

const userDetails={
    username:"sudhanshu",
    password:"123456"
}
// this token has been generated by this secret therefore can be verified by this secret only

const token=jwt.sign({username:userDetails.username},secret)

console.log(token)

const decode=jwt.decode(token)
/// anyone can decode it but only if we have secret key thenn we can verify it
console.log(decode)
console.log(decode.username)

const verifytoken=jwt.verify(token,secret)
console.log(verifytoken)
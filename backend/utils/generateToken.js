import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000, //millisecond
        httpOnly: true,  //to prevent the xss attacks cross-site scripting attacks(makes the cookie not accessible using javascript)
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.Node_ENV !== "development"
    })
}

export default generateTokenAndSetCookie
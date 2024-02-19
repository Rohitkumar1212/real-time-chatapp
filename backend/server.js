// packages imports
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

// files imports
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import connectToMongoDB from "./db/connectToMongoDB.js"

//variables 
const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

// middlewares
app.use(express.json()) //tp parse incoming requests with JSON payloads(or from req.body)
app.use(cookieParser())



//auth route
app.use("/api/auth", authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/user",userRoutes)

// app.get("/", (req, res)=>{
//     //root route http://localhost:5000
//     res.send(`Server is running!!`)
// })

app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Server is running on Port ${PORT}`)
})
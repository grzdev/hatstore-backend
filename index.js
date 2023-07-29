const express = require('express')
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const app = express()
const productRouter = require("./routes/products")
// const PORT = process.env.PORT || 3000
const port = 3000

dotenv.config()
// mongoose.set("strictQuery", false)
// const connectDB = async () => {
//     try {
//         const connect = mongoose.connect(process.env.MONGO_URL);
//         console.log(`MONGO connected: ${connect.connection.host}`)
//     } catch (error) {
//         console.log(error)
//         process.exit(1)
//     }   
// }
// connectDB().then(()=>{
//     app.listen(PORT, ()=>{
//         console.log(`Listening on port ${PORT}`)
//     })
// })

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("db connected")).catch((err)=> console.log(err))
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}))

app.use("/api/products", productRouter)

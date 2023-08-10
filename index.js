const express = require('express')
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const app = express()
const productRouter = require("./routes/products")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")
const ordersRouter = require("./routes/order")
const articlesRouter = require("./routes/articles")
const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("db connected")).catch((err)=> console.log(err))

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}))

app.use("/api/products", productRouter)
app.use("/api/", authRouter)
app.use("/api/users", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/orders", ordersRouter)
app.use("/api/articles", articlesRouter)

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))
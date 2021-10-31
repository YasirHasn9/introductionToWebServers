require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const uri = process.env.URI || undefined


const productRouter = require("./routers/index")
mongoose.connect(uri)
app.use("/products" , productRouter)
app.use("/" , (req, res) => {
    res.send({
        msg: "Hello world"
    })
})

module.exports = app
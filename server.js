require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 3000
const uri = process.env.URI || undefined
//routers 
const productRouter = require("./routers/index")

mongoose.connect(uri)
app.use("/products" , productRouter)
app.use("/" , (req, res) => {
    res.send({
        msg: "Hello world"
    })
})

app.listen(port , () => console.log(`http://localhost:${port}`))
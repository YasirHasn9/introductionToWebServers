const { Router } = require("express")
const express = require("express")
const router = express.Router()
const db = require("../database/index")

router.get("/" , async (req,res) => {
    try{
        const products = await db.find()
        res.send(products)
    } catch(err){
        console.log(err)
    }
})
module.exports = router
const express = require("express")
const router = express.Router()
const db = require("../database/index")

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
router.get("/" , async (req,res) => {
    try{
        const products = await db.find()
        res.send(products)
    } catch(err){
        console.log(err)
    }
})
module.exports = router
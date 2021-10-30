const express = require("express")
const router = express.Router()
const db = require("../database/index")


router.get("/" , (req, res) => {
    res.send({
        msg: "Hello users again",
    })
})
module.exports = router
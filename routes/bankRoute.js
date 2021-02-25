const router = require('express').Router()
const { allBank, createBank, updateBank, deleteBank } = require('../controllers/bankController')


router.get("/all", allBank)

router.post("/create", createBank)

router.put("/update", updateBank)

router.delete("/delete", deleteBank)




module.exports = router;
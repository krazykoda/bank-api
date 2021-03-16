const router = require('express').Router()
const { allBank, createBank, updateBank, deleteBank } = require('../controllers/bankController')
const { createBankValidation, results } = require('../utils/validator')


router.get("/all", allBank)

router.post("/create", createBankValidation(), results, createBank)

router.put("/update", updateBank)

router.delete("/delete", deleteBank)




module.exports = router;
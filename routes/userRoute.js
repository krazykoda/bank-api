const router = require('express').Router()
const { createUser } = require('../controllers/userController')
const { createUserValidation, results } = require('../utils/validator')



router.post("/signup", createUserValidation(), results, createUser)


module.exports = router;

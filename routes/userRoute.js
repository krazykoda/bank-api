const router = require('express').Router()
const { createUser, login } = require('../controllers/userController')
const { createUserValidation, results, loginUserValidation } = require('../utils/validator')



router.post("/signup", createUserValidation(), results, createUser)
router.post('/login', loginUserValidation(), results, login)


module.exports = router;

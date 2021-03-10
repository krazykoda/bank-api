const { allAccount, createAccount, updateAccount, deleteAccount } = require('../controllers/accountController');
const router = require('express').Router();
const {results, createAccountValidation} = require("../utils/validator")

router.get("/all", allAccount)
router.post('/create',createAccountValidation(), results, createAccount)
router.post('/update', updateAccount)
router.delete('/delete', deleteAccount)


module.exports = router;
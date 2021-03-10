const { allAccount, createAccount, updateAccount, deleteAccount } = require('../controllers/accountController');
const router = require('express').Router();

router.get("/all", allAccount)
router.post('/create', createAccount)
router.post('/update', updateAccount)
router.delete('/delete', deleteAccount)


module.exports = router;
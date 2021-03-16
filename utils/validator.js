const {body, validationResult} = require("express-validator")

exports.createAccountValidation = () => {
    return [
        body('accountName', 'Account Name is required ').not().isEmpty(),
        body('accountType', 'Account Type is required ').not().isEmpty(),
        body('accountNumber', 'Account Number is required ').not().isEmpty(),
    ]
}


exports.createBankValidation = () => {
    return [
        body('name').not().isEmpty().withMessage("Name is required"),
        body('branch', 'Branch is required').not().isEmpty(),
        body('location', 'Location is required ').not().isEmpty(),
        body('phone').not().isEmpty().withMessage('Phone number is required').bail()
        .isNumeric().withMessage("Only numbers are allowed"),
        body('account', 'Account is required ').not().isEmpty(),
    ]
}



//validation results
exports.results = (req, res, next) => {
    //check for errors
    const errors = validationResult(req);
    //no errors
    if(errors.isEmpty()) return next()
    //on errors
    res.status(400).json({ error: errors.array() })
}
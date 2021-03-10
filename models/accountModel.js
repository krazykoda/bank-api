const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    accountName: {
        type: String,
        required: true,
        trim: true
    },
    accountType: {
        type: String,
        required: true,
        trim: true
    },
    accountNumber: {
        type: String,
        required: true,
        trim: true
    },
    bank: {
        type: Schema.Types.ObjectId,
        ref: 'Bank'
    },  
})


module.exports = mongoose.model("Account", accountSchema)
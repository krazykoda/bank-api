const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }, 
    accounts: [{
        type: Schema.Types.ObjectId,
        ref: "Account"
    }] 
})


module.exports = mongoose.model("User", userSchema)
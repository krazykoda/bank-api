const mongoose = require('mongoose');
const { Schema } = mongoose;

const bankSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    branch: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    }, 
    account: [{
        type: String,
        ref: "Account"
    }] 
})


module.exports = mongoose.model("bank", bankSchema)


// //Bank Model
// class BankModel {
//     constructor({name, branch, location, phone}) {
//         this.name = name;
//         this.branch = branch;
//         this.location = location;
//         this.phone = phone;
//     }

//     save() {
//         bankData.push(this)
//         console.log("Debg -->", bankData)
//         return this
//     }

//     static getAll() {
//         return bankData
//     }

//     static update(name, obj) {
//         const index = bankData.findIndex(el => el.name === name)
//         if(index !== -1) {
//             bankData[index] = obj;
//             return obj;
//         }else throw Error("Can not update")
//     }

//     static delete(name) {
//         const index = bankData.findIndex(el => el.name === name)
//         if(index !== -1) {
//             return bankData.splice(index, 1);
//         }else throw Error("Cannot Delete");
//     }
// }
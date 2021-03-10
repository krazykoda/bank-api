const AccountModel = require('../models/accountModel');




exports.allAccount = async (req,res) => {
    const all = await AccountModel.find({})
    console.log(all)
    res.json({data: all})
}

exports.createAccount = async (req, res) => {
    const data = req.body;
    const newAccount = await new AccountModel(data).save()
    res.status(201).json({
        message: "Account created",
        data: newAccount
    })  
}

exports.updateAccount = async (req, res) => {
    const { id, data } = req.body;
    const updatedData = await AccountModel.updateOne({_id: id}, data)
    res.json({
        message: "Account Updated",
        data: updatedData
    })
}


exports.deleteAccount = async (req, res) => {
    const {id} = req.body
    await AccountModel.deleteOne({_id: id});
    res.json({
        message: "Account deleted"
    });
}



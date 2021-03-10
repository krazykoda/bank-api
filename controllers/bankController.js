const BankModel = require('../models/bankModel')



exports.allBank = async (req,res) => {
    const all = await BankModel.find({})
    console.log(all)
    res.json({data: all})
}

exports.createBank = async (req, res) => {
    const data = req.body;
    const newBank = await new BankModel(data).save()
    res.status(201).json({
        message: "bank created",
        data: newBank
    })   
}

exports.updateBank = async (req, res) => {
    const { id, data } = req.body;
    const updatedData = await BankModel.updateOne({_id: id}, data)
    res.json({
        message: "Data Updated",
        data: updatedData
    })
}


exports.deleteBank = async (req, res) => {
    const {id} = req.body
    await BankModel.deleteOne({_id: id});
    res.json({
        message: "bank deleted"
    });
}
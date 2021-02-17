const express = require('express');
const app = express();

const port = process.env.PORT || 5000

const bankData = [];

//general middlewares
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended:true}))

//Bank Model
class BankModel {
    constructor({name, branch, location, phone}) {
        this.name = name;
        this.branch = branch;
        this.location = location;
        this.phone = phone;
    }

    save() {
        bankData.push(this)
        console.log("Debg -->", bankData)
        return this
    }

    static getAll() {
        return bankData
    }

    static update(name, obj) {
        const index = bankData.findIndex(el => el.name === name)
        if(index !== -1) {
            bankData[index] = obj;
            return obj;
        }else throw Error("Can not update")
    }

    static delete(name) {
        const index = bankData.findIndex(el => el.name === name)
        if(index !== -1) {
            return bankData.splice(index, 1);
        }else throw Error("Cannot Delete");
    }
}

app.get("/all", (req,res) => {
    const all = BankModel.getAll()
    res.json({data: all})
})

app.post("/create", (req, res) => {
    const data = req.body;
    const newBank = new BankModel(data).save()
    res.status(201).json({
        message: "bank created",
        data: newBank
    })   
})

app.put("/update", (req, res) => {
    const { name, data } = req.body;
    const updatedData = BankModel.update(name, data)
    res.json({
        message: "Data Updated",
        data: updatedData
    })
})

app.delete("/delete", (req, res) => {
    const {name} = req.body
    BankModel.delete(name);
    res.json({
        message: "bank deleted"
    });
})



app.listen(port, () => console.log(`server running on ${port}`))
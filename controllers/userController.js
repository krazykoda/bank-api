const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const { generateToken } = require("../utils/authentication")
require("dotenv").config()


const saltRound = parseInt(process.env.SALT)

//signup
exports.createUser = async (req, res) => {
    const {username, password, email} = req.body

    try {
        const exist = await UserModel.find({$or: [{email}, {username}]})

        
        
        //if user exist
        if(exist.length > 1 ) {
            return res.status(400).json({ 
                error: {
                    meassge: "Username and Email already exist"
                }
             })
        } else if(exist.length > 0) {
            if(exist[0].email === email) {
                return res.status(400).json({
                    error: {
                        message: "Email already Exist"
                    }
                })
            }else {
                return res.status(400).json({
                    error: {
                        message: "Username already Exist"
                    }
                })
            }
        }

        
        //hash password
        const hashed = await bcrypt.hash(password, saltRound)

        //create user
        const newUser = UserModel({
            username,
            email,
            password: hashed,
        })

        //save to db
        const doc = await newUser.save()
        res.status(201).json({
            message: "User Created",
            data: sanitize(doc)
        })
        
    }catch(err) {
        res.status(500).json({error: err.message})
    }
}


//user login
exports.login = async (req, res, next) => {
    try {
        //get user from db
        let user = await UserModel.findOne({email: req.body.email})

        //if no user
        if(!user) {
            return res.status(400).json({
                error: {
                    message: "Wrong Email/Username or Password"
                }
            })
        }


        //check password for match
        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match) {
            return res.status(400).json({
                error: {
                    message: "Wrong Email/Username or Password"
                }
            })
        }

        
        //generate token
        const token = generateToken({id: user._id})
        res.status(200).json({
            message: "Login Success",
            token
        })

    }catch(err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}





//remove password
function sanitize(obj) {
    const newObj = Object.assign({}, obj._doc);
    delete newObj.password
    return newObj
}
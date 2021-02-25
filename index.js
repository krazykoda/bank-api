const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const bankRoute = require('./routes/bankRoute')

const port = process.env.PORT || 5000

//connect to mongoDB
mongoose.connect(process.env.MONGOURI, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("connected to db")
);


//general middlewares
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({extended:true}))

//routes
app.use("/", bankRoute)



app.listen(port, () => console.log(`server running on ${port}`))
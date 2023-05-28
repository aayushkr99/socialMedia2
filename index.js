const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require("./src/route/route")
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.URL_string,{
    useNewUrlParser: true
})
.then( () => console.log("Database connected successfully"))
.catch( err => console.log("Error while connecting with the database ", err))

app.use('/', route)

app.all('*', function (req, res) {
    return res
        .status(400)
        .send("Welcome to Social Media----");
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});
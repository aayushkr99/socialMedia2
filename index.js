const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require("./src/route/route")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://pika:pika@pika.fr6zl51.mongodb.net/wowtalent",{
    useNewUrlParser: true
})
.then( () => console.log("Database connected successfully"))
.catch( err => console.log("Error while connecting with the database ", err))

app.use('/', route)

app.all('*', function (req, res) {
    return res
        .status(400)
        .send("You Hit Wrong Api!!!, Plz Check !!!");
});

app.use(function (e, req, res, next) {
    if (e.message === "You Hit Wrong Api!!!, Plz Check !!!") {
       throw new Error(message);
    }
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});
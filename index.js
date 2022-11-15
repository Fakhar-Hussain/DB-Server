require("./DB");
require("./Schema/schema")
const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const mongoose = require('mongoose')
const User = mongoose.model("user")


let Port = 5002;

App.use(bodyParser.json());

App.get("/get", (req, res) => {
    res.send("Server Complete")
})

App.post("/post", (req, res) => {
    const user = new User({
        name: req.body.name
    })
    user.save()
    .then( (data) => {
        res.send(data)
    })
    .catch( (err) => {
        console.log(err.message)
    })
})



App.listen(Port, () => {
    console.log("Server Connected")
})

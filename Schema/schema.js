const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

mongoose.model("user", UserSchema)
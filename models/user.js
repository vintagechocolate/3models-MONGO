// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our routes {CRUD operations}
const mongoose = require("mongoose")
const noteSchema =  new mongoose.Schema({
    userName: String,
    email: String,
    dob: Date,
    phoneNumber: Number,
})

const User = mongoose.model("User", noteSchema)

module.exports = User
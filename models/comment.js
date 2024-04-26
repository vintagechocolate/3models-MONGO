// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our routes {CRUD operations}
const mongoose = require("mongoose")
const noteSchema =  new mongoose.Schema({
    body:  String,
})

const Comment = mongoose.model("Comment", noteSchema)

module.exports = Comment


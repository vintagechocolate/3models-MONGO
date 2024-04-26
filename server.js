require("dotenv").config();
// -----> allows .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
// This pulls our Mongoose connection into application

const Note = require("./models/note");
const notesController = require("./controllers/notesController.js");
const User = require("./models/user");
const usersController = require("./controllers/usersController.js");
const Comment = require("./models/comment");
const commentsController = require("./controllers/commentsController.js");


const cors = require("cors");
// ---> Recieving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json
app.use(cors());
connectToDb();
// This initializes our connectToDB() function
// -------------------------------------------------reQs


app.get("/", (req, res) => {
  res.send("This is a Landing Page");
});

// Obj: We want to establish CRUD routes for our Notes Model
app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/notes", notesController.createNote);
// -----------------> Create a Notes - [Create / POST]
app.put("/notes/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]


app.get("/users", usersController.fetchAllUsers);
// -----------------> GET all Notes - [Read]
app.get("/users/:id", usersController.fetchUser);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/users", usersController.createUser);
// -----------------> Create a Notes - [Create / POST]
app.put("/users/:id", usersController.updateUser);
// -----------------> Update a Specific Note - [Update]
app.delete("/users/:id", usersController.deleteUser);
// -----------------> Delete a Specific Note - [Delete]


app.get("/comments", commentsController.fetchAllComments);
// -----------------> GET all Notes - [Read]
app.get("/comments/:id", commentsController.fetchComment);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/comments", commentsController.createComment);
// -----------------> Create a Notes - [Create / POST]
app.put("/comments/:id", commentsController.updateComment);
// -----------------> Update a Specific Note - [Update]
app.delete("/comments/:id", commentsController.deleteComment);
// -----------------> Delete a Specific Note - [Delete]
// -------------------------------------------------Routing


app.listen(PORT, () => {
  console.log(`Express Server Listening on port num: ${PORT}`);
});
// -------------------------------------------------Server
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://denydeny1234:Aresucu2002@personalportfolio.nhf9nyl.mongodb.net/projectsdescription?retryWrites=true&w=majority"
);

//create a data schema
const notesSchema = {
  title: String,
  content: String
};
const Note = mongoose.model("Note", notesSchema);

app.use(express.static(__dirname + "/public")); //serve public folder as a static folder

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  newNote.save();
  res.redirect("/");
});

//app.post
app.listen(4000, function () {
  console.log("server is running");
});

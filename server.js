const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

mongoose.connect( 
  "mongodb://localhost/notes",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  } 
);

const Note = mongoose.model("notes",new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  title: String,
  color: String,
  time: String,
  full: String,
  bin: { type: Boolean, default: false },
}))

app.get("/api/notes", async(req,res) => {
  const notes = await Note.find({});
  res.send(notes);
});

app.post("/api/notes", async (req,res) =>{
  const newNote = new Note(req.body);
  const savedNote = await newNote.save();
  res.send(savedNote);
})

app.put("/api/notes/:id", async (req,res) =>{
  const putNote = await Note.findByIdAndUpdate(req.params.id,req.body);
  res.send(putNote);
})

app.delete("/api/notes/:id", async(req,res) => {
  const deletedNote = await Note.findByIdAndDelete(req.params.id);
  res.send(deletedNote);
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
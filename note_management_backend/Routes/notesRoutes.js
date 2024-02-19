const notesRouter = require("express").Router();
const NotesModel = require("../models/notes");

notesRouter.post("/Add", async (req, res) => {
  const data = new NotesModel({
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
    location: req.body.location,
    collaborator: req.body.collaborator,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    // console.log(req.body);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

notesRouter.get("/getAll/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const data = await NotesModel.find({ username: username });
    res.json(data);
    // console.log(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

notesRouter.patch("/modify/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await NotesModel.find({ _id: id });

    const updatedData = req.body;
    console.log(updatedData);
    // const { base64 } = req.body.image;
    // updatedData.image = base64;
    const options = { new: true };
    const result = await NotesModel.findByIdAndUpdate(
      data._id,
      updatedData,
      options
    );
    res.send(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

notesRouter.delete("/delete", async (req, res) => {
  try {
    const data = await NotesModel.findOneAndDelete({
      username: req.body.username,
    });
    res.send(`document with ${data.username} has been deleted`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = notesRouter;

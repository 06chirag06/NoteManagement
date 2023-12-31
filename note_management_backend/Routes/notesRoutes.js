const NotesModel = require('../models/notes');
const notesRouter = require('express').Router();

router.post('/Add', async (req, res) => {
    var data = new NotesModel({
        username: req.body.username,
        title: req.body.title,
        content: req.body.content
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log(req.body);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/getAll', async (req, res) => {
    try {
        const data = await NotesModel.find();
        res.json(data);
        console.log(data);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


// router.get('/get/:id', async (req, res) => {
//     try {
//         const data = await NotesModel.findById(req.params.id);
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

router.patch('/modify/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await NotesModel.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const data = await NotesModel.findOneAndDelete({
            username: req.body.username
        });
        res.send(`document with ${data.username} has been deleted`);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = notesRouter;

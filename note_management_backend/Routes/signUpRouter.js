const UserModel = require('../models/Users');
const signUpRouter=require('express').Router();

signUpRouter.post('/Add', async (req, res) => {
    var data = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log(req.body);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports=signUpRouter;
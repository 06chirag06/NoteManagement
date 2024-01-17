const crypto = require('crypto');
const loginRouter = require('express').Router();
const UserModel = require('../models/Users');

// router.post('/login',(req, res) => {
//     const data = req.body;
//     if (data.username === "admin" && data.password === "admin") {
//       res.json({ token: "thisismytoken" });
//     } else {
//       res.status(401).sent("Invalid Credintail");
//     }
//   });

// Try to use JWT

const login = (req, res) => {
  const data = req.body;
  if (data.username === 'admin' && data.password === 'admin') {
    const token = crypto.randomBytes(32).toString('hex'); // Generating a random token
    res.json({ token });
  } else {
    res.status(401).send('Invalid Credential');
  }
};

loginRouter.patch('/modify/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const options = { new: true };
    const result = await UserModel.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

loginRouter.delete('/delete', async (req, res) => {
  try {
    const data = await UserModel.findOneAndDelete({
      username: req.body.username,
    });
    res.send(`document with ${data.username} has been deleted`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

loginRouter.post('/', login);

module.exports = loginRouter;

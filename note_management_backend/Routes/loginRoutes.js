const crypto = require("crypto");
const loginRouter = require("express").Router(); //
const UserModel = require("../models/Users");
const bcrypt = require("bcryptjs");

// router.post('/login',(req, res) => {
//     const data = req.body;
//     if (data.username === "admin" && data.password === "admin") {
//       res.json({ token: "thisismytoken" });
//     } else {
//       res.status(401).sent("Invalid Credintail");
//     }
//   });

// Try to use JWT

const login = async (req, res) => {
  const data = req.body; //here in this data variable sinin lage ka login wale me username an dpassword ka data body me bhar ke ajatata hai data me
  const user = await UserModel.findOne({ username: data.username }); //here  then data.username se databse me username check kar rahe aur hamara username primary key hai sab alag hai and match hone par username usss username ka sara data emailid dob sab kuch store karlerahe hai const user me  atah hai databse hi return karta hai agar milta hai username toh
  // console.log(data.username);
  // console.log(user.username);
  // console.log(data.password);
  // console.log(user.password);
  if (!user) {
    return res.status(401).send("Invalid Credentials"); //this line is for if database doesnot return username jo data.username se match kara rahe the toh neeche ka line hoga print invalid crendentials
  }
  bcrypt.compare(data.password, user.password, (err, response) => {
    if (err) {
      console.log(err);
    }
    const isPasswordValid = response;
    // console.log(res); // return true
    if (!isPasswordValid) {
      return res.status(401).send("Invalid Credentials");
    }
    const token = crypto.randomBytes(64).toString("hex"); // Generating a random token //here token genrate kia hai
    res.json({ token }); //on okay we send token to login page
  });
  //here data.password ka password gets checked here but before to check password i need to encrypt it check kyuki alreday data me jo datahai usme password encrypted form me hai toh here encrypt karna hoga tab jake woh mila payega agar  match hoga toh next token wali me jayega
  // console.log(isPasswordValid)

  //Generating a JWT token
};

loginRouter.patch("/modify/:id", async (req, res) => {
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

loginRouter.delete("/delete", async (req, res) => {
  try {
    const data = await UserModel.findOneAndDelete({
      username: req.body.username,
    });
    res.send(`document with ${data.username} has been deleted`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

loginRouter.post("/", login);

module.exports = loginRouter;

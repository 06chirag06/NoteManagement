const crypto = require("crypto");
const loginRouter = require("express").Router(); //
const UserModel = require("../models/Users");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const config = require("../config/config");
// const { isJWT } = require("validator");
const jwt = require("jsonwebtoken");

const SendResetPasswordMail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLs: true,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword,
      },
    });

    const mailOptions = {
      from: config.emailUser,
      to: email,
      subject: "For Reset Password",
      html:
        "<p> Hii " +
        name +
        ', Please copy  the link and <a href ="http://127.0.0.1:3000/login/resetpassword?token=' +
        token +
        '"> reset your password.</a>',
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("mail has been sent:-", info.response);
      }
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const login = async (req, res) => {
  const data = req.body;
  const user = await UserModel.findOne({ username: data.username });
  if (!user) {
    return res.status(401).send("Invalid Username or Password");
  }
  bcrypt.compare(data.password, user.password, async (err, response) => {
    if (err) {
      console.log(err);
    }
    // const isPasswordValid = response;
    if (!response) {
      return res.status(401).send("Invalid Username or Password");
    }
    const accessToken = await generateAccessToken({ user: user });
    return res.status(200).json({
      success: true,
      msg: "Login Successfully!",
      user: user,
      accessToken: accessToken,
      tokenType: "Bearer",
    });
  });
};

loginRouter.patch("/modify/:id", async (req, res) => {
  try {
    const { id } = req.params.id;
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

const forgetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await UserModel.findOne({ email: email });

    if (userData) {
      const randomString = randomstring.generate();
      const data = await UserModel.updateOne(
        { email: email },
        { $set: { token: randomString } }
      );

      SendResetPasswordMail(userData.username, userData.email, randomString);
      res.status(200).send({
        success: true,
        msg: "please check your mail inbox and reset the password.",
      });
    } else {
      res
        .status(200)
        .send({ success: true, msg: "This email does not exists." });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

const resetpassword = async (req, res) => {
  try {
    const token = req.query.token;
    console.log(token);
    const tokenData = await UserModel.findOne({ token: token });
    console.log(tokenData);
    if (tokenData) {
      const password = req.body.password;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(.{8,20})$/;
      if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: "Invalid password format" });
      }
      const saltRounds = 10; // Adjust as needed

      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) {
            console.error("Error hashing password:", err);
            // Handle error gracefully (e.g., log, inform user)
            return;
          }

          const newpassword = hash;
          console.log("Hashed password:", hash);
          // Store the hash in your database securely
          try {
            // const dataToSave = await data.save();
            const data = await UserModel.findByIdAndUpdate(
              { _id: tokenData._id },
              { $set: { password: newpassword, token: "" } },
              { new: true }
            );
            console.log(data);
            return res.status(200).json("Password Updated");
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
        });
      });
    } else {
      return res
        .status(200)
        .send({ success: false, msg: "This Link has been expired" });
    }
  } catch (error) {
    return res.send(400).send({ success: false, msg: error.message });
  }
};

const generateAccessToken = async (user) => {
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  return token;
};

loginRouter.post("/", login);

loginRouter.post("/forgetpassword", forgetPassword);

loginRouter.get("/resetpassword", resetpassword);

module.exports = loginRouter;

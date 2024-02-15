const router = require("express").Router();
const loginRouter = require("./loginRoutes");
const notesRouter = require("./notesRoutes");
const signUpRouter = require("./signUpRouter");
// const authRouter = require("./authRouter");

router.use("/login", loginRouter);
router.use("/signUp", signUpRouter);
router.use("/notes", notesRouter);
//router.use("/auth", authRouter);

module.exports = router;

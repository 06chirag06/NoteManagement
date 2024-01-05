
const loginRouter = require('./loginRoutes.js')
const router = require('express').Router();
const notesRouter = require('./notesRoutes.js');
const signUpRouter = require('./signUpRouter.js');

router.use('/login', loginRouter)
router.use('/signUp', signUpRouter)
router.use('/notes', notesRouter)


// router.get('/getAll', async (req, res) => {
//     try {
//         const data = await UserModel.find();
//         res.json(data);
//         console.log(data);
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// });


// router.get('/get/:id', async (req, res) => {
//     try {
//         const data = await UserModel.findById(req.params.id);
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });


module.exports = router;
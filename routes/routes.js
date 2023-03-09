const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()


router.get("/", (req, res) => {
    res.render("index")
})

router.get('/users', UserController.FindAllUsers)
router.post('/create', UserController.Create)



module.exports = router
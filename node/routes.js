const express = require("express")
const router = express.Router()

const controller = require("./controller");
const userController = new controller();

console.log(controller)

router.post('', userController.addUser);
router.get('', userController.getUsers);
router.post('auth/', userController.authenticate);

module.exports = router;
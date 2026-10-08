const express = require("express");
const { signupController } = require("../../controllers/auth.controller");
const router = express.Router()

// localhost:3000/api/auth/signup
router.post("/signup",signupController)


module.exports = router;
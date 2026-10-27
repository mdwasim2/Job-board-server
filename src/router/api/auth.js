const express = require("express");
const { signupController, signinController, otpVerifyController } = require("../../controllers/auth.controller");
const router = express.Router()

// localhost:3000/api/auth/signup
router.post("/signup",signupController)
router.post("/signin",signinController)
router.post("/otp-verify",otpVerifyController)


module.exports = router;
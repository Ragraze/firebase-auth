const express = require("express");
const router = express.Router();
const {
	verifyTokenBeforeLogin,
	verifyTokenAfterLogin,
} = require("../middleware");

const firebaseAuthController = require("../controllers/firebase-auth-controller");
// register
router.get("/api/register", verifyTokenAfterLogin, (req, res) => {
	res.render("register");
});
router.post("/api/register", firebaseAuthController.registerUser);

//login
router.get("/api/login", verifyTokenAfterLogin, (req, res) => {
	res.render("login");
});
router.post("/api/login", firebaseAuthController.loginUser);

//dashboard and logout
router.get("/api/dashboard", verifyTokenBeforeLogin, (req, res) => {
	res.render("dashboard");
});
router.post("/api/logout", firebaseAuthController.logoutUser);

//reset password
router.post("/api/reset-password", firebaseAuthController.resetPassword);

module.exports = router;

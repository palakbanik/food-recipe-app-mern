/**
 * Title: User Route
 * Description: Create user route
 * Author: Palak Banik
 * Date 29/08/2026
 **/

const express = require("express");
const router = express.Router();
const {
    userSignUp,
    userLogin,
    getUser,
} = require("../controllers/userController");

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/user/:id", getUser);

module.exports = router;

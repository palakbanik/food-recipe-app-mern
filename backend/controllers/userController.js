/**
 * Title: User Route Controller
 * Description: All the user route controller define here.
 * Author: Palak Banik
 * Date 29/08/2026
 **/

const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// user sign up controller
const userSignUp = async (req, res) => {
    try {
        // check if email and password are provided
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password is required.",
            });
        }

        // check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists.",
            });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a new user
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const token = jwt.sign(
            { email, id: newUser._id },
            process.env.SECRET_KEY,
            { expiresIn: "7d" },
        );

        return res.status(201).json({
            token,
            newUser,
        });
    } catch (err) {
        console.error("Sign Up Error: ", err);
        return res.status(500).json({
            message: "Something went wrong, please try again later.",
        });
    }
};

// user login controller
const userLogin = async (req, res) => {
    try {
        // check if email and password are provided
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password is required.",
            });
        }

        // check if the user exists and password is correct
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { email, id: user._id },
                process.env.SECRET_KEY,
                { expiresIn: "7d" },
            );

            return res.status(200).json({
                token,
                user,
            });
        } else {
            return res.status(400).json({
                message: "Invalid credentials, please try again.",
            });
        }
    } catch (err) {
        console.error("Login Error: ", err);
        return res.status(500).json({
            message: "Something went wrong, please try again later.",
        });
    }
};

// get user information controller
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
            });
        }
        return res.status(200).json({
            email: user.email,
        });
    } catch (err) {
        console.error("Get User Error: ", err);
        return res.status(500).json({
            message: "Something went wrong, please try again later.",
        });
    }
};

module.exports = {
    userSignUp,
    userLogin,
    getUser,
};

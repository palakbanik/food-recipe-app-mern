/**
 * Title: User Schema
 * Description: Define user schema
 * Author: Palak Banik
 * Date 29/08/2026
 **/

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);

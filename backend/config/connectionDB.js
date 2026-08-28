const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose
        .connect(process.env.CONNECTION_STRING)
        .then(() => console.log("DB Connected...."))
        .catch((err) => console.error("DB Connection Error: ", err));
};

module.exports = connectDB;

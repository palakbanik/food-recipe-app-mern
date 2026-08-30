const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const recipeRouter = require("./routes/recipeRoute");
const connectDB = require("./config/connectionDB");
const userRouter = require("./routes/userRoute");

// application initialization
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
connectDB();

// routes
app.use("/", userRouter);
app.use("/recipe", recipeRouter);

// listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

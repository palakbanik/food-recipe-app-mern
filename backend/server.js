const dotenv = require("dotenv").config();
const express = require("express");
const recipeRoute = require("./routes/recipeRoute");
const connectDB = require("./config/connectionDB");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
connectDB();

app.use("/recipe", recipeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

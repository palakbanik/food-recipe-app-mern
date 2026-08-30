const express = require("express");
const recipeRouter = express.Router();

const {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
    upload,
} = require("../controllers/recipeController");

recipeRouter.get("/", getRecipes); // get all recipes
recipeRouter.get("/:id", getRecipe); // get single recipe by ID
recipeRouter.post("/", upload.single("file"), addRecipe); // add recipe
recipeRouter.put("/:id", editRecipe); // edit recipe
recipeRouter.delete("/:id", deleteRecipe); // delete recipe

module.exports = recipeRouter;

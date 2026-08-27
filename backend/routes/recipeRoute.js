const express = require("express");
const router = express.Router();

const {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
} = require("../controllers/recipeController");

router.get("/", getRecipes); // get all recipes
router.get("/:id", getRecipe); // get single recipe by ID
router.post("/", addRecipe); // add recipe
router.put("/:id", editRecipe); // edit recipe
router.delete("/:id", deleteRecipe); // delete recipe

module.exports = router;

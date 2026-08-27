const Recipes = require("../models/recipe");

// get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipes.find();

    return res.json(recipes);
};

// get single recipe
const getRecipe = (req, res) => {
    res.json({
        message: "Hello from RECIPE",
    });
};

// add recipe
const addRecipe = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body;

    if (!title || !ingredients || !instructions) {
        res.json({
            message: "Required filed can't be empty.",
        });
    }

    const newRecipe = await Recipes({
        title,
        ingredients,
        instructions,
        time,
    });

    return res.json(newRecipe);
};

// update/edit recipe
const editRecipe = (req, res) => {
    res.json({
        message: "Hello from RECIPE",
    });
};

// delete recipe
const deleteRecipe = (req, res) => {
    res.json({
        message: "Hello from RECIPE",
    });
};

module.exports = {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
};

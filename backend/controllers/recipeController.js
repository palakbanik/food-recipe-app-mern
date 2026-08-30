const RecipeSchema = require("../models/recipeSchema");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + "-" + file.fieldname;
        cb(null, filename);
    },
});

const upload = multer({ storage: storage });

// get all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await RecipeSchema.find();

        return res.status(200).json({
            message: "Fetched all recipes successfully.",
            recipes,
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            error: "There was an issue fetching recipes.",
        });
    }
};

// get single recipe
const getRecipe = async (req, res) => {
    try {
        const recipe = await RecipeSchema.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found.",
            });
        }

        return res.status(200).json({
            message: "Single recipe fetched successfully.",
            recipe,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "There was an issue fetching the recipe.",
        });
    }
};

// add recipe
const addRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time } = req.body;

        if (!title || !ingredients || !instructions) {
            return res.status(400).json({
                message: "Required field can't be empty.",
            });
        }

        const newRecipe = await RecipeSchema.create({
            title,
            ingredients,
            instructions,
            time,
            coverImage: req.file ? req.file.filename : null,
        });

        return res.status(201).json({
            message: "recipe added successfully.",
            newRecipe,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "There was a recipe add issue.",
        });
    }
};

// update/edit recipe
const editRecipe = async (req, res) => {
    try {
        const updatedRecipe = await RecipeSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true, returnDocument: "after" },
        );

        if (!updatedRecipe) {
            return res.status(404).json({
                message: "Recipe not found.",
            });
        }

        return res.status(200).json({
            message: "Recipe updated successfully.",
            recipe: updatedRecipe,
        });
    } catch (err) {
        console.error(err);
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid recipe ID." });
        }
        return res.status(500).json({
            error: "There was an issue updating the recipe.",
        });
    }
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
    upload,
};

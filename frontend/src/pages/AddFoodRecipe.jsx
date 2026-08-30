import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({});
    const navigate = useNavigate();

    // handle form changes
    const onHandleChange = (e) => {
        const value =
            e.target.name === "ingredients"
                ? e.target.value.split(",")
                : e.target.name === "file"
                  ? e.target.files[0]
                  : e.target.value;
        const name = e.target.name;

        setRecipeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // handle form submission
    const onHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/recipe", recipeData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/");
        } catch (err) {
            console.error("Error adding recipe:", err);
        }
    };
    return (
        <section>
            <form className="form" onSubmit={onHandleSubmit}>
                <div className="form-control">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="input"
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Time</label>
                    <input
                        type="text"
                        name="time"
                        id="time"
                        className="input"
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Ingredients</label>
                    <textarea
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        className="input-textarea"
                        rows={5}
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Instructions</label>
                    <textarea
                        type="text"
                        name="instructions"
                        id="instructions"
                        className="input-textarea"
                        rows={5}
                        onChange={onHandleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Recipe Image</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        className="input"
                        onChange={onHandleChange}
                    />
                </div>

                <button type="submit">Add Recipe</button>
            </form>
        </section>
    );
}

import "./App.css";
import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
import AddFoodRecipe from "./pages/AddFoodRecipe";

const getAllRecipes = async () => {
    try {
        const res = await axios.get("http://localhost:5000/recipe");
        return res.data.recipes;
    } catch (err) {
        console.error(err);
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainNavigation />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: getAllRecipes,
            },
            {
                path: "/my-recipe",
                element: <Home />,
            },
            {
                path: "/favorites",
                element: <Home />,
            },
            {
                path: "/add-recipe",
                element: <AddFoodRecipe />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

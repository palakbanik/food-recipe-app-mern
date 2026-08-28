import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
import axios from "axios";

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
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

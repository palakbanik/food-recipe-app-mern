import { useLoaderData } from "react-router-dom";
import { BsStopwatchFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import tomatoMozzarella from "../assets/tomato_mozzarella.jpg";
import { useState } from "react";

export default function RecipeItems() {
    // const allRecipes = useLoaderData();

    const [allRecipes] = useState(useLoaderData());
    console.log(allRecipes);
    return (
        <div className="card-container">
            {allRecipes?.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <img
                            src={tomatoMozzarella}
                            width="120px"
                            height="100px"
                        ></img>
                        <div className="card-body">
                            <div className="title">{item.title}</div>
                            <div className="icons">
                                <div className="timer">
                                    <BsStopwatchFill />
                                    30 mins
                                </div>

                                <IoMdHeart />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

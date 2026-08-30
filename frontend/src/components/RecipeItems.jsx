import { useLoaderData } from "react-router-dom";
import { BsStopwatchFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
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
                            src={`http://localhost:5000/images/${item.coverImage}`}
                            width="120px"
                            height="100px"
                        ></img>
                        <div className="card-body">
                            <div className="title">{item.title}</div>
                            <div className="icons">
                                <div className="timer">
                                    <BsStopwatchFill />
                                    {item.time ? item.time : "N/A"}
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

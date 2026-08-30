import { useEffect, useState } from "react";
import Modal from "./Modal";
import InputForm from "./InputForm";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");
    const [isLoggedIn, setIsLoggedIn] = useState(token ? false : true);

    useEffect(() => {
        setIsLoggedIn(token ? false : true);
    }, [token]);

    const checkedLogin = () => {
        if (token) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsLoggedIn(true);
        } else {
            setIsOpen(true);
        }
        setIsOpen(true);
    };

    return (
        <header>
            <h2>Food Blog</h2>

            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li onClick={() => isLoggedIn && setIsOpen(true)}>
                    <NavLink to={!isLoggedIn ? "/my-recipe" : "/"}>
                        My Recipe
                    </NavLink>
                </li>
                <li onClick={() => isLoggedIn && setIsOpen(true)}>
                    <NavLink to={!isLoggedIn ? "/favorites" : "/"}>
                        Favorites
                    </NavLink>
                </li>
                <li onClick={checkedLogin}>
                    <p className="login">{isLoggedIn ? "Login" : "Logout"}</p>
                </li>

                {/* modal */}
                {isOpen && (
                    <Modal onClose={() => setIsOpen(false)}>
                        <InputForm setIsOpen={() => setIsOpen(false)} />
                    </Modal>
                )}
            </ul>
        </header>
    );
}

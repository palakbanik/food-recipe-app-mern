import { useState } from "react";
import axios from "axios";

export default function InputForm({ setIsOpen }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    const handlerOnSubmit = async (e) => {
        e.preventDefault();

        // endpoint
        const endpoint = isSignUp ? "/signup" : "/login";

        // send request to backend
        await axios
            .post(`http://localhost:5000${endpoint}`, {
                email,
                password,
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                setIsOpen();
            })
            .catch((err) => {
                setError(err.response?.data?.error);
            });
    };
    return (
        <>
            <form className="form" onSubmit={handlerOnSubmit}>
                {/* for email */}
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        className="input"
                        required
                    />
                </div>
                {/* for password */}
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="password"
                        className="input"
                        required
                    />
                </div>
                <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
                <br />
                <br />

                {error !== "" && <h6 className="error">{error}</h6>}

                <p onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp
                        ? "Already have an account?"
                        : "Create new account"}
                </p>
            </form>
        </>
    );
}

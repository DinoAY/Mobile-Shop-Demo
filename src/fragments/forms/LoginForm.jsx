import React, { useState } from "react";

const LoginForm = ({ handleLogin, isLoaded }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLogin(username, password);
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    required
                    onChange={handleUsername}
                    value={username}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    onChange={handlePassword}
                    value={password}
                />
            </div>
            <button
                type="submit"
                className="btn btn-warning"
                disabled={!isLoaded ? "disabled" : ""}>
                {!isLoaded && (
                    <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"></span>
                )}
                Submit
            </button>
        </form>
    );
};

export default LoginForm;

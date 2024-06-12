import React, { useState } from "react";
import LoginForm from "../fragments/forms/LoginForm";
import { authenticate } from "../services/AuthService";
import { API_TOKEN_KEY } from "../utils/helpers";
import Layout from "../components/Layout";

const Login = ({ router }) => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState("");

    const handleLogin = (username, password) => {
        setError("");
        setIsLoaded(false);

        const response = authenticate(username, password);

        response
            .then((result) => {
                sessionStorage.setItem(API_TOKEN_KEY, result.token);
                router.navigate("/cart");
                router.location.reload();
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoaded(true));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Login page</h1>
                    <LoginForm handleLogin={handleLogin} isLoaded={isLoaded} />
                    {error !== "" && <p className="text-danger">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Layout(Login);

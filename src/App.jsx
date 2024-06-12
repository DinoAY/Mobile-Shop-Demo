import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import Cart from "./pages/User/Cart";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { getToken } from "./services/AuthService";

const isUserAuthenticated = () => {
    return Boolean(getToken());
};

const App = () => {
    const isAuth = isUserAuthenticated();

    return (
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/product/:productId" element={<Product />} />
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoutes isAuth={isAuth} />}>
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;

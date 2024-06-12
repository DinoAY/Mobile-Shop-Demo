import React, { useEffect } from "react";
import { getCartById } from "../../services/CartService";

const Cart = () => {
    useEffect(() => {
        const result = getCartById(1);

        result
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Cart Page</h1>
        </div>
    );
};

export default Cart;

import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductsService";
import Products from "../components/Products";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAllProducts()
            .then((result) => setProducts(result))
            .catch((error) => console.error("Error"))
            .finally(() => setIsLoaded(true));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <Products isLoaded={isLoaded} products={products} />
            </div>
        </div>
    );
};

export default Shop;

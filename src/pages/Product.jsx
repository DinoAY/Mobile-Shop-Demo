import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getProductById } from "../services/ProductsService";

const Product = ({ router }) => {
    const [product, setProduct] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const { params } = router;

    useEffect(() => {
        getProductById(params.productId)
            .then((result) => setProduct(result))
            .catch((error) => console.error("Error"))
            .finally(() => setIsLoaded(true));
    }, [params]);

    return <div>sdgshd</div>;
};

export default Layout(Product);

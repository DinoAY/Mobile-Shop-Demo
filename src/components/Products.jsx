import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = ({ products, router }) => {
    return (
        <>
            {products.map((product) => (
                <div className="col-lg-4" key={product.id}>
                    <Link to={"/shop/product/" + product.id}>
                        <ProductCard product={product} />
                    </Link>
                </div>
            ))}
        </>
    );
};

export default Layout(Products);

import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
            />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.brand}</p>
                <p className="text-danger">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;

import React from "react";
import "./styles/ProductCard.css";

const ProductCard = (props) => {
    const {product} = props;
    // const {title, text} = product;

    return (
        <div className="product-detail--card">
            <img className="clock" src={product.image}/>
            <div className="product--card-title">{product.title}</div>
            <div className="product--card-text">{product.text}</div>
        </div>
    )
}

export default ProductCard;
import React from "react";
import products from "./shared/products";
import ProductCard from "./ProductCard";
import "./styles/MainProductDetail.css";

const MainProductDetail = () => {
    return (
        <div className="main-product-detail">
            <div className="main--img" alt="" />
            <div className="product-detail--title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <div className="product-cards--container">            
                {products.map((product) =>              
                    <ProductCard key={product.id} product={product}/>)}
            </div>        
        </div>
    )
}

export default MainProductDetail;
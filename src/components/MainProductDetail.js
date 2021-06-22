import React from "react";
import products from "./shared/products";
import ProductCard from "./ProductCard";
import "./styles/MainProductDetail.css";
import styled from "styled-components";

const StyledProduct = styled.section`
        @media (min-width: 930px) {
        display: flex;
        flex-wrap: wrap;
        width: 930px;
        margin: 0 auto;
    }
`;

const MainProductDetail = () => {
    return (
        <div className="main-product-detail">
            <div className="main--img" alt="" />
            <div className="product-detail--title">
                <h2>My projects</h2>
                <p>Some of my babys.</p>
            </div>
            <StyledProduct>            
                {products.map((product) =>              
                    <ProductCard key={product.id} product={product}/>)}
            </StyledProduct>        
        </div>
    )
}

export default MainProductDetail;
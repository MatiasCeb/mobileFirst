import React from "react";
import products from "./shared/products";
import ProductCard from "./ProductCard";
import "./styles/MainProductDetail.css";
import "./styles/NavBar.css"
import styled from "styled-components";
import logo from "../components/assets/icons/devicon.png";

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
            <img className="main--img" src={logo} alt="Logo" />
            <div className="product-detail--title">
                <h2>Skills and experience.</h2>
                <p>What can I offer?</p>
            </div>
            <StyledProduct>            
                {products.map((product) =>              
                    <ProductCard key={product.id} product={product}/>)}
            </StyledProduct>        
        </div>
    )
}

export default MainProductDetail;
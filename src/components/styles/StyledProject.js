import styled from "styled-components";

const StyledProject = styled.section`
.card-item {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 200px;
    height: 250px;
    font-size: 20px;
    cursor: pointer;
    transition: 450ms all;
    -webkit-transform-origin: center left;
            transform-origin: center left;
}

.card-item:hover ~ .card-item {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
    /* -webkit-transform: translate3d(0px, 0, 0);
            transform: translate3d(100px, 0, 0); */
}

.card-item__img {
    width: 200px;
    height: 250px;
    -o-object-fit: cover;
    object-fit: cover;
}

.card-item__details {
    align-items: flex-start;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    bottom: 0;
    display: flex;
    font-size: 10px;
    flex-direction: column;
    justify-content: flex-end;
    left: 0;
    opacity: 0;
    transition: 450ms opacity;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 0;
}

.card-item__details--img {
    width: 20px;
}

.card-item:hover .card-item__details {
    opacity: 1;
}

.card-item__details--title {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 5px 0px 0px 0px;
}

.card-item__details--subtitle {
    color: white;
    font-size: 1.3rem;
    margin: 3px 0px;
}
.card-link {
    width: 100%;
    justify-content: space-between;
}
.linkbutton {
    display: inline-flex;
    margin: 5px 5px;
    padding: 5px;
    width: 40%;
    height: 40px;
    /* margin-top: 20px; */
    border: 2px solid var(--bitcoin-orange);
    border-radius: 4px;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.8rem;
    color: var(--just-white);
    text-decoration: none;
    align-items: center;
    /* justify-content: center;
    align-items: center; */
    /* text-align: -webkit-match-parent; */
    /* justify-content: center; */
}
        @media (min-width: 930px) {
        justify-content: center;
        }
`;



export default StyledProject;
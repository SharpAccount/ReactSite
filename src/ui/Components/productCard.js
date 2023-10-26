import axios from "axios";
import {useEffect, useState} from "react";
import BuyButton from '../kits/buyButton.js';

export default function ProductCards() {
    const [productCards, addProd] = useState([]);

    useEffect(() => {
        const getAndAddProduct = async () => {
            const prodsResponses =  await axios.get("https://fakestoreapi.com/products");
            return addProd(prodsResponses.data);
        }
        getAndAddProduct();
    });

    const prodCards = ( productCards.map((product) => (
        <div className="prodCard" key = {`element${product.id}`}>
            <div className="prodImgFrame"><img className="prodImg" src = {product.image} alt = ""></img></div>
            <div className = "prodTextBlock">
                <div className = "descr">
                    <h2 className = "prodTitle" key = {product.title}>{product.title}</h2>
                    <p className = "prodDescription" key = {product.description}>{product.description}</p>
                </div>
                <div className="stats" key={`infoBlock${product.id}`}>
                    <div className="rateAndCat">
                        <div className = "prodInfoElement" key = {`rating${product.id}`}>
                            <p>rating:</p>
                            <p>{product.rating.rate}</p>
                        </div>
                        <div className = "prodInfoElement" key = {`category${product.category}`}>
                            <p>{product.category}</p>
                        </div>
                    </div>
                    <div className = "priceAndButton">
                        <div className = "prodInfoElement" key = {`price${product.price}`}>
                            <p>$</p>
                            <p>{product.price}</p>
                        </div>
                        <div className = "prodInfoElement" key = {`buyButtton${product.id}`}>
                            <BuyButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)));

    return (<div id = "elements">
                <div id = "prodCards">{prodCards}</div>
            </div>);
}
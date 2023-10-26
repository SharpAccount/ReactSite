import axios from "axios";
import {useEffect, useState} from "react";

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
                <h2 className = "prodTextInfo" key = {product.title}>{product.title}</h2>
                <p className = "prodTextInfo" key = {product.description}>{product.description}</p>
                <hr></hr>
                <div key={`infoBlock${product.id}`}>
                    <div className="rateAndCat">
                        <div className = "prodInfoBlock" key = {`rating${product.id}`}>
                            <p>rating:</p>
                            <p>{product.rating.rate}</p>
                        </div>
                        <div className = "prodInfoBlock" key = {`category${product.category}`}>
                            <p>{product.category}</p>
                        </div>
                    </div>
                    <div className = "prodInfoBlock" key = {`price${product.price}`}>
                        <p>$</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        </div>)));

    return <div id = "prodCards">{prodCards}</div>;
}
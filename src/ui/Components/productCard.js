import '../App/App.js';
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
    }, []);

    const prodCards = ( productCards.map((product) => (
        <div key = {`element${product.id}`}>
            <div><img src = {product.image} alt = ""></img></div>
            <div>
                <h2 key = {product.title}>{product.title}</h2>
                <p key = {product.description}>{product.description}</p>
                <hr></hr>
                <div key={`infoBlock${product.id}`}>
                    <div key = {`rating${product.id}`}>
                        <p>rating</p>
                        <p>{product.rating.rate}</p>
                        <p>of</p>
                        <p>{product.rating.count}</p>
                    </div>
                    <div key = {`category${product.category}`}>
                        <p>category</p>
                        <p>{product.category}</p>
                    </div>
                    <div key = {`price${product.price}`}>
                        <p>$</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        </div>)));
    console.log(prodCards);

    return <div>{prodCards}</div>;
}

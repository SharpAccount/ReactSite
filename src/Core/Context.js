import {createContext, useContext, useState} from "react";
import axios from "axios";
import BuyButton from "../ui/kits/buyButton";
import {Card, Container} from "react-bootstrap";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
    const [productCards, setProductCards] = useState([]);

    const getProd = async () => {
        const prodsResponses =  await axios.get("https://fakestoreapi.com/products");
        setProductCards(prodsResponses.data);
    }

    const cart = {
        totalPrice: 0,
        products: []
    };

    function AddedToCart(id) {
        console.log(productCards[id]);
        if (cart[id]) {
            {/*place to add to increase count component method*/}
        }
        cart[id] = productCards[id];
        {/*place to add to adding to sidebar method*/}
    }

    const AddToCartButton = ({ id }) => {
        return (
                <BuyButton onClick={() => AddedToCart(id)}/>
        )
    }


    const values = {
        getProd,
        productCards,
        AddToCartButton,
        AddedToCart
    }

    return (
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
    )
}

import {createContext, useContext, useState} from "react";
import axios from "axios";
import BuyButton from "../ui/kits/buyButton";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
    const [productCards, setProductCards] = useState([]);

    const getProd = async () => {
        const prodsResponses =  await axios.get("https://fakestoreapi.com/products");
        setProductCards(prodsResponses.data);
    }

    const addToCart = (id) => {
        console.log("You`ve just clicked " + id);
    }

    const AddToCartButton = ({ id }) => {
        return (
                <BuyButton onClick={() => addToCart(id)}/>
        )
    }


    const values = {
        getProd,
        productCards,
        AddToCartButton,
        addToCart
    }

    return (
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
    )
}

import {createContext, useState} from "react";
import axios from "axios";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
    const [productCards, setProductCards] = useState([]);

    const getProd = async () => {
        const prodsResponses =  await axios.get("https://fakestoreapi.com/products");
        setProductCards(prodsResponses.data);
    }

    const values = {
        getProd,
        productCards
    }

    return (
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
    )
}
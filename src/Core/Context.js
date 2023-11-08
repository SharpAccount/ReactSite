import {createContext, useState} from "react";
import axios from "axios";
import {Container} from "react-bootstrap";
import BuyButton from "../ui/kits/buyButton";
import {AddProduct} from "../ui/addProduct";

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

export const button  = createContext(<></>);

export const AddToCartButton = (prodId) => {//оформить здесь класс, с полем buybutton
    return (
        <button.Provider value = "">
            <BuyButton />
        </button.Provider>
    )
}
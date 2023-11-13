import {createContext, useState} from "react";
import axios from "axios";
import BuyButton from "../ui/kits/buyButton";
import {Button} from "react-bootstrap";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
    const [productCards, setProductCards] = useState([]);

    const {card, setCartPosition} = useState([]);

    const cart = {
        totalPrice: 0,
        products: []
    };

    const getProd = async () => {
        const prodsResponses =  await axios.get("https://fakestoreapi.com/products");
        setProductCards(prodsResponses.data);
    }

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

    //
    console.log(card);
    console.log(setCartPosition);
    console.log(cart);
    //

    function CartButton(){
        return (
            <Button size="lg">Cart</Button>
        )
    }

    const values = {
        getProd,
        productCards,
        AddToCartButton,
        AddedToCart,
        CartButton
    }

    return (
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
    )
}

import {createContext, useState} from "react";
import axios from "axios";
import BuyButton from "../ui/kits/buyButton";
import {NavbarBrand} from "react-bootstrap";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
    const [productCards, setProductCards] = useState([]);

    const {card, setCartPosition} = useState([]);

    const renderCart = [];

    const getProd = async () => {
        const prodsResponses =  await axios.get("https://fakestoreapi.com/products");
        setProductCards(prodsResponses.data);
    }

    const cart = {
        totalPrice: 0,
        products: []
    };

    function addProduct(id) {
        if (cart.products[id]) {
            cart.products[id].amount += 1;
        } else {
            const product = {
                id: id,
                price: productCards[id].price,
                amount: 1,
            }
            cart.products[id] = product;
        }
        cart.totalPrice = Math.round((cart.totalPrice + cart.products[id].price) * 100) / 100;
        return cart.products
    }

    const AddToCartButton = ({ id }) => {
        return (
                <BuyButton onClick={() => addProduct(id)}/>
        )
    }


    function CartButton(){
        return (
            <NavbarBrand className="fs-2" size="lg">Cart</NavbarBrand>
        )
    }

    const values = {
        getProd,
        productCards,
        AddToCartButton,
        renderCart,
        CartButton
    }

    return (
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
    )
}

import {createContext, useState} from "react";
import axios from "axios";
import BuyButton from "../ui/kits/buyButton";
import {NavbarBrand} from "react-bootstrap";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {

    const [productCards, setProductCards] = useState([]);

    const [cart, setCart] = useState({
        totalPrice: 0,
        products: []
    });

    const getProd = async () => {
        const prodsResponses =  await axios.get("https://fakestoreapi.com/products");
        setProductCards(prodsResponses.data);
    }

    function addProduct(id) {
        const renderCart = {...cart};

        if (renderCart.products[id]) {
            renderCart.products[id].amount += 1;
        } else {
            const product = {
                id: id,
                title: productCards[id].title,
                description: productCards[id].description,
                img: productCards[id].image,
                price: productCards[id].price,
                amount: 1,
            }
            renderCart.products[id] = product;
        }
        renderCart.totalPrice = Math.round((renderCart.totalPrice + renderCart.products[id].price) * 100) / 100;
        setCart(renderCart);
        return renderCart.products
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
        cart,
        setCart,
        CartButton
    }

    return (
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
    )
}

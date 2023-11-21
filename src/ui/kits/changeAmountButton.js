import {useContext, useState} from "react";
import IconMinusCircle from "../../images/minusSign";
import {Container} from "react-bootstrap";
import IconPlusCircle from "../../images/plusSign";
import {Context} from "../../Core/Context";

export default function SetAmountButtons({ children }) {

    const {cart, setCart} = useContext(Context)

    console.log(children)

    const product = cart.products.find((prod) => ( (prod) && (prod.id === children)));

    function addProd() {
        cart.totalPrice = Math.round((cart.totalPrice + product.price) * 100) / 100;
        product.amount += 1;
        setCart({...cart});
    }

    function removeProd() {
        cart.totalPrice = Math.round((cart.totalPrice - product.price) * 100) / 100;
        if ((product.amount - 1) === 0) {
            cart.products = cart.products.filter((product) => product.id !== children)
        } else {
            product.amount -= 1;
        }
        setCart({...cart});
    }

    return (
        <Container className = "align-items-center">
            <Container className = "d-flex gap-2 align-items-center">
                <IconMinusCircle onClick = {() => removeProd()} />
                {product && <p className= "fs-3 my-auto">{product.amount}</p>}
                <IconPlusCircle onClick = {() => addProd()}/>
            </Container>
        </Container>
    )
}
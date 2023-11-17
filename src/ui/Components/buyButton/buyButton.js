import {Button, Container} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../../Core/Context";
import "./buyButton.css";

export default function BuyButton() {
    const {cart, setCart} =  useContext(Context);

    function buyAllProds() {
        if (cart.products.length > 0) {
            cart.products = [];
            cart.totalPrice = 0;
            alert("Thank you for purchase!");
            setCart({...cart});
        }
    }

    return (
        <Container className= "buyButton position-fixed d-flex flex-column border p-0 gap-4 bg-light">
            <Container>Total price: $ {cart.totalPrice}</Container>
            <Button onClick={() => buyAllProds()}>Buy</Button>
        </Container>
    )
}
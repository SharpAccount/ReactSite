import {Button, Container} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../Core/Context";

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
        <Container className= "d-flex">
            <Button className= "my-auto fs-4"  variant= "success" onClick={() => buyAllProds()}>Buy</Button>
            <Container className = "fs-4">
                <Container>Total price:</Container>
                <Container className= "my-auto">$ {cart.totalPrice}</Container>
            </Container>
        </Container>
    )
}
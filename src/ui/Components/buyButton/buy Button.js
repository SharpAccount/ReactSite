import {Button, Container} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../../Core/Context";

export default function BuyButton() {
    const {cart} =  useContext(Context)

    return (
        <Container className= "d-flex flex-column border rounded-1 p-0 gap-4">
            <Container>Total price: $ {cart.totalPrice}</Container>
            <Button>Buy</Button>
        </Container>
    )
}
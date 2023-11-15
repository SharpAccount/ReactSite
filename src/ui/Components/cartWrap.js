import {Container} from "react-bootstrap";
import Cart from "../cart/cart";
import "../cart/cart.css"

export default function CartWrap() {
    return (
        <Container className= "bg-light mt-5 rounded-1 overflow-y-auto h-85">
            <Container className = "fs-3">Your products:</Container>
            <Cart />
        </Container>
    )
}
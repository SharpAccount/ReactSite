import {Container} from "react-bootstrap";
import Cart from "../cart/cart";
import "../cart/cart.css"
import BuyButton from "./buyButton/buy Button";

export default function CartWrap() {
    return (
        <Container className= "bg-light mt-5 rounded-1 overflow-y-auto h-85">
            <Cart />
            <BuyButton className = "position-sticky" />
        </Container>
    )
}
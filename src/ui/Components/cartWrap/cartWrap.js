import {Container} from "react-bootstrap";
import Cart from "../cart/cart";
import "./cartWrap.css"
import BuyButton from "../buyButton/buyButton";

export default function CartWrap() {
    return (
        <>
        <Container className= "boughtProds p-0 bg-light mt-5 overflow-y-auto rounded-top h-76">
            <Cart />
        </Container>
        <BuyButton />
    </>
    )
}
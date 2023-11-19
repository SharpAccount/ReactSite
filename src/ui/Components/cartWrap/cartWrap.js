import {Container} from "react-bootstrap";
import "./cartWrap.css"
import Cart from "../cart/cart";
import BuyButton from "../buyButton";

export default function CartWrap() {
    return (
        <Container className= "w-100 h-100 p-0">
                <Container className= "boughtProds p-0 bg-light mt-5 overflow-y-auto rounded-top h-76">
                    <Cart />
                </Container>
                <BuyButton />
        </Container>
    )
}
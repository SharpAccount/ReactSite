import {Container, Navbar} from "react-bootstrap";
import CartButton from "../cartButton/cartButton";
import "./header.css";
import HOCHeader from "../HOCs/HOCHeader";

export function Header() {
    return (
        <>
            <Navbar className="w-100" bg="light">
                <Container>
                    <Navbar.Brand>PRODUCTS</Navbar.Brand>
                    <CartButton/>
                </Container>
            </Navbar>
        </>
    );
}


export default HOCHeader(Header);

import {Container, Navbar} from "react-bootstrap";
import "./header.css";
import HOCHeader from "../HOCHeader";
import {useContext} from "react";
import {Context} from "../../../Core/Context";
import {Link} from "react-router-dom";

export function Header() {
    const {CartButton} = useContext(Context);

    return (
        <>
            <Navbar className="w-100" bg="light">
                <Container>
                    <Link to = "/" className = "text-decoration-none">
                        <Navbar.Brand className="fs-2">Fake Store</Navbar.Brand>
                    </Link>
                    <Link to ="/Products" className = "text-decoration-none">
                        <CartButton />
                    </Link>
                </Container>
            </Navbar>
        </>
    );
}


export default HOCHeader(Header);
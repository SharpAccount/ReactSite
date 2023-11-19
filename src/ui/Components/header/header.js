import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import "./header.css";
import HOCHeader from "../HOCHeader";
import {Link} from "react-router-dom";

export function Header() {

    return (
        <>
            <Navbar className="w-100" bg="light">
                <Container>
                    <Link to = "/" className = "text-decoration-none">
                        <Navbar.Brand className="fs-2">Fake Store</Navbar.Brand>
                    </Link>
                    <Link to ="/Products" className = "text-decoration-none">
                        <NavbarBrand className="fs-2" size="lg">Cart</NavbarBrand>
                    </Link>
                </Container>
            </Navbar>
        </>
    );
}


export default HOCHeader(Header);
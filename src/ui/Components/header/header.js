import {Button, Container, Navbar, Offcanvas} from "react-bootstrap";
import HOCHeader from "../HOCs/HOCHeader";
import ProdsInCart from "../prdosinCart/prodsinCart"
import {useState} from "react";
import "./header.css";
import BuyButton from "../../buyButton";


export function Header() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () =>  setShow(false);

    return (
        <>
            <Navbar className="w-100" bg="light">
                <Container>
                    <Navbar.Brand className="fs-2">Fake shop</Navbar.Brand>
                    <Button size="lg" onClick={handleShow}>Cart</Button>
                </Container>
            </Navbar>

            <Offcanvas show = {show} onHide={handleClose} backdrop='true'>
                <Offcanvas.Header closeButton>
                    <BuyButton />
                </Offcanvas.Header>
                <Offcanvas.Body className = "overflow-y-auto gap-2">
                    <ProdsInCart />
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}


export default HOCHeader(Header);
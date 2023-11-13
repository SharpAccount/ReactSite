import {Button, Container, Navbar, Offcanvas} from "react-bootstrap";
import "./header.css";
import HOCHeader from "../HOCs/HOCHeader";
import {useContext, useState} from "react";
import {Context} from "../../../Core/Context";

export function Header() {
    const {AddedToCart, CartButton} = useContext(Context);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () =>  setShow(false);
    return (
        <>
            <Navbar className="w-100" bg="light">
                <Container>
                    <Navbar.Brand className="fs-2">PRODUCTS</Navbar.Brand>
                    <CartButton />
                </Container>
            </Navbar>

            <Offcanvas show = {show} onHide={handleClose} backdrop='true'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className = "overflow-y-auto gap-2">
                    {/*<AddedToCart/>*/}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


export default HOCHeader(Header);
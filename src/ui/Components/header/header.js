import {Button, Container, Navbar, Offcanvas} from "react-bootstrap";
import "./header.css";
import HOCHeader from "../HOCs/HOCHeader";
import {useState} from "react";

export function Header() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () =>  setShow(false);
    return (
        <>
            <Navbar className="w-100" bg="light">
                <Container>
                    <Navbar.Brand>PRODUCTS</Navbar.Brand>
                    <Button onClick={handleShow}>Cart</Button>
                </Container>
            </Navbar>

            <Offcanvas show = {show} onHide={handleClose} backdrop='true'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/*place for products*/}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


export default HOCHeader(Header);
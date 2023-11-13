import {Container, Navbar} from "react-bootstrap";
import "./header.css";
import HOCHeader from "../HOCs/HOCHeader";
import {useContext, useState} from "react";
import {Context} from "../../../Core/Context";
import {Link} from "react-router-dom";

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
                    <Link to ="/"><CartButton /></Link>
                </Container>
            </Navbar>
        </>
    );
}


export default HOCHeader(Header);
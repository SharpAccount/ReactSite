import {Container, Navbar} from "react-bootstrap";
import "./header.css";
import HOCHeader from "../HOCs/HOCHeader";
import {useContext, useState} from "react";
import {Context} from "../../../Core/Context";
import {Link} from "react-router-dom";

export function Header() {
    const {CartButton} = useContext(Context);

    return (
        <>
            <Navbar className="w-100" bg="light">
                <Container>
                    <Navbar.Brand className="fs-2">PRODUCTS</Navbar.Brand>
                    <Link to ="/Products"><CartButton /></Link>
                </Container>
            </Navbar>
        </>
    );
}


export default HOCHeader(Header);
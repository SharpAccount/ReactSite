import {Offcanvas} from "react-bootstrap";
import {useState} from "react";

export function OffCanvas() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () =>  setShow(false);

    return (
        <>
            <Offcanvas show = {show} onHide={handleClose} backdrop='true'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    some products
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default function SideBar() {
    return (
        <>
            <OffCanvas/>
        </>
    )
}
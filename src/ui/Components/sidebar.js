import {Offcanvas} from "bootstrap/js/src/offcanvas";
import {Button} from "react-bootstrap";
import {useState} from "react";
export default function SideBar() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () =>  setShow(false);

    return (
        <>
            <Offcanvas>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                </Offcanvas.Body>
            </Offcanvas>
            <Button onClick={handleShow}></Button>
        </>
    )
}
import {useContext} from "react";
import {Context} from "../../Core/Context";
import {Container} from "react-bootstrap";

export default function Cart() {
    const {renderCart} = useContext(Context)

    if (renderCart.length === 0) {
        return (
            <Container className = "d-flex justify-content-center align-items-center h-100">
                <p className = "fs-4 form-text h-50">
                    There aren`t any products yet...
                </p>
            </Container>
        )
    } else {
        return (
            <>
                {renderCart}
            </>
        )
    }
}
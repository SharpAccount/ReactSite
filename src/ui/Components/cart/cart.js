import {useContext} from "react";
import "./cart.css";
import {Context} from "../../../Core/Context";
import {Card, Container} from "react-bootstrap";
import SetAmountButtons from "../../kits/changeAmountButton";

const Cart = () => {
    const {cart} = useContext(Context);

    if (cart.products.length === 0) {
        return (
            <Container className = "d-grid justify-content-center align-items-center h-85">
                <p className = "fs-4 form-text h-50 text-center">
                    There aren`t any products yet...
                </p>
            </Container>
        )
    } else {
        return (
            <Container className = "boughtProds gap-3 d-grid my-3">
                {cart.products.map((prod) => (
                    <Card>
                        <Card.Header className = "prodHeader d-flex">
                            <Container className = "prodImgFrame">
                                <Card.Img className = "prodImg h-100 w-100" src = {prod.img} alt = ""/>
                            </Container>
                            <Container>
                                <Card.Title className = "prodTitle">{prod.title}</Card.Title>
                                <Card.Text className = "prodDescr">{prod.description}</Card.Text>
                                <Card.Text>$ {prod.price}</Card.Text>
                            </Container>
                        </Card.Header>
                        <Card.Body>
                            <SetAmountButtons>{prod.id}</SetAmountButtons>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        )
    }
}

export default Cart
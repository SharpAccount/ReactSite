import {useContext} from "react";
import {Context} from "../../Core/Context";
import {Card, Container} from "react-bootstrap";
import SetAmountButtons from "../kits/changeAmountButton";

export default function Cart() {
    const {cart} = useContext(Context)

    if (cart.products.length === 0) {
        return (
            <Container className = "d-flex justify-content-center align-items-center h-100">
                <p className = "fs-4 form-text h-50">
                    There aren`t any products yet...
                </p>
            </Container>
        )
    } else {
        return (
            <Container className = "gap-2">
                {cart.products.map((prod) => (
                    <Card>
                        <Card.Header className = "d-flex">
                            <Card.Img className = "prodImg" src = {prod.img} alt = ""/>
                            <Container>
                                <Card.Title className = "">{prod.title}</Card.Title>
                                <Card.Text>{prod.description}</Card.Text>
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
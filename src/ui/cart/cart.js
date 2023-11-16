import {useContext} from "react";
import {Context} from "../../Core/Context";
import {Card, Container} from "react-bootstrap";
import SetAmountButtons from "../kits/changeAmountButton";
import "./cart.css";

const Cart = () => {
    const {cart} = useContext(Context)

    //const [list, setList] = React.useState(initialList);

    if (cart.products.length === 0) {
        return (
            <Container className = "d-grid justify-content-center align-items-center h-85">
                <p className = "fs-4 form-text h-50">
                    There aren`t any products yet...
                </p>
            </Container>
        )
    } else {
        return (
            <Container className = "boughtProds gap-3 d-grid mt-3">
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

//update usestate func

export default Cart
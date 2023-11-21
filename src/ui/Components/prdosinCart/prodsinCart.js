import {useContext} from "react";
import {Context} from "../../../Core/Context";
import {Card, Container} from "react-bootstrap";
import SetAmountButtons from "../../kits/changeAmountButton";
import "./prodsinCart.css";

const ProdsInCart = () => {
    const {cart} = useContext(Context);

    if (cart.products.length === 0) {
        return (
            <Container className="fs-4 text-center">There aren`t any products  yet...</Container>
        )
    } else {
        return (
            <>
                {cart.products.map((prod, idx) => (
                    <Card key={idx}>
                        <Card.Header>
                            <Card.Img variant = "top" src = {prod.img} alt = ""></Card.Img>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className = "abbreviated">{prod.title}</Card.Title>
                            <Card.Text className = "abbreviated">{prod.description}</Card.Text>
                            <Card.Text>price: ${prod.price}</Card.Text>
                            <SetAmountButtons>{prod.id}</SetAmountButtons>
                        </Card.Body>
                    </Card>
                ) )}
            </>
        )
    }
}

export default ProdsInCart
import {useContext, useEffect} from "react";
import "./productCard.css";
import {Context} from "../../../Core/Context";
import {Card, Container} from "react-bootstrap";
import AddToCartButton from "../../kits/addToCartButton";

export default function ProductCards() {
    const {productCards, getProd} = useContext(Context);

    useEffect( () => {
        getProd();
    }, [])

    return (
        <Container className="prodCards d-grid rounded-1 overflow-y-auto pt-2 pb-5 my-5 gap-2 flex-grow-1">
            {productCards.map((prod, idx) => (
                <Card className="card" key = {idx}>
                    <Card.Header>
                        <Card.Img variant="top" className = "" src={prod.image}  alt =""/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="abbreviated overflow-hidden">
                            {prod.title}
                        </Card.Title>
                        <Card.Text className="abbreviated overflow-hidden">
                            {prod.description}
                        </Card.Text>
                        <Container className="rateAndPrice d-flex flex-row justify-content-between  p-0">
                            <Card.Text>rating: {prod.rating.rate}/5</Card.Text>
                            <Card.Text>price: ${prod.price}</Card.Text>
                        </Container>
                        <AddToCartButton id = {prod.id-1}/>
                    </Card.Body>
                </Card>
            ))
            }
        </Container>
    );
}
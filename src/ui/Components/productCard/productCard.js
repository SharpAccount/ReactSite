import {useContext, useEffect} from "react";
import {Context} from "../../../Core/Context";
import {Button, Card, Container} from "react-bootstrap";
import "./productCard.css";
export default function ProductCards() {
    const {productCards, getProd} = useContext(Context);

    useEffect( () => {
        getProd();
    }, [])

    const cardsContainer =
        <Container  className="prodCards">
                {productCards.map((prod) => (
                        <Card className="card">
                            <Card.Header>
                                <Card.Img variant="top" className = "" src={prod.image}/>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="abbreviated">
                                    {prod.title}
                                </Card.Title>
                                <Card.Text className="abbreviated">
                                    {prod.description}
                                </Card.Text>
                                <Container className="rateAndPrice">
                                    <Card.Text>rating: {prod.rating.rate}/5</Card.Text>
                                    <Card.Text>price: ${prod.price}</Card.Text>
                                </Container>
                                <Button className="buyButton">Add to card</Button>
                            </Card.Body>
                        </Card>
                ))}
        </Container>

    return (<>{cardsContainer}</>);
}
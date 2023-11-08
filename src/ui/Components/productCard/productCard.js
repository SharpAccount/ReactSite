import {useContext, useEffect} from "react";
import {Context} from "../../../Core/Context";
import {Button, Card, Container} from "react-bootstrap";
import "./productCard.css";
//mport BuyButton from "../../kits/buyButton";
export default function ProductCards() {
    const {productCards, getProd, AddToCartButton} = useContext(Context);

    useEffect( () => {
        getProd();
    }, [])

    return (
        <Container className="prodCards d-grid rounded-1 overflow-y-auto p-2 mt-5 gap-2 flex-grow-1">
            {productCards.map((prod) => (
                <Card className="card">
                    <Card.Header>
                        <Card.Img variant="top" className = "" src={prod.image}/>
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
                        {/*<BuyButton id = {prod.id} />*/}
                        {/*<Button className="w-100">Add to cart</Button>*/}
                        <AddToCartButton id = {prod.id}/>
                    </Card.Body>
                </Card>
                ))
            }
        </Container>
    );
}
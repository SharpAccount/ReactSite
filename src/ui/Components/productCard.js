import {useContext, useEffect} from "react";
import {Context} from "../../Core/Context";
import {Card, Col, Container, Row} from "react-bootstrap";
export default function ProductCards() {
    const {productCards, getProd} = useContext(Context);

    useEffect( () => {
        getProd();
    }, [])

    return (<Container style={{
        borderRadius: "0.25rem",
        backgroundColor: "lightgrey",
        width: "90%",
        padding: "10px"}}>
        <Row>
            { productCards.slice(0,3).map( (prod) => (
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Img variant = "top" src ={prod.image}/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className="abbreviated">
                                {prod.title}
                            </Card.Title>
                            <Card.Text className="abbreviated" style = {{height: "72px"}}>
                                {prod.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )) }
        </Row>
            </Container>);
}
import {useContext, useEffect} from "react";
import BuyButton from '../kits/buyButton.js';
import {Context} from "../../Core/Context";
import {Card, Col, Row} from "react-bootstrap";
export default function ProductCards() {
    const {productCards, getProd} = useContext(Context);

    useEffect( () => {
        getProd();
    }, [])

    const prodCards = ( productCards.map((product) => (
        <div className="prodCard" key = {`element${product.id}`}>
            <div className="prodImgFrame"><img className="prodImg" src = {product.image} alt = ""></img></div>
            <div className = "prodTextBlock">
                <div className = "descr">
                    <h2 className = "prodTitle" key = {product.title}>{product.title}</h2>
                    <p className = "prodDescription" key = {product.description}>{product.description}</p>
                </div>
                <div className="stats" key={`infoBlock${product.id}`}>
                    <div className="rateAndCat">
                        <div className = "prodInfoElement" key = {`rating${product.id}`}>
                            <p>rating:</p>
                            <p>{product.rating.rate}</p>
                        </div>
                        <div className = "prodInfoElement" key = {`category${product.category}`}>
                            <p>{product.category}</p>
                        </div>
                    </div>
                    <div className = "priceAndButton">
                        <div className = "prodInfoElement" key = {`price${product.price}`}>
                            <p>$</p>
                            <p>{product.price}</p>
                        </div>
                        <div className = "prodInfoElement" key = {`buyButtton${product.id}`}>
                            <BuyButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>)));




    return (<div id = "elements">
        <Row>
            { productCards.slice(0,3).map( (prod) => (
                <Col>
                    <Card>
                        <Card.Img variant = "top" src ={prod.image}/>
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>{prod.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )) }
        </Row>
            </div>);
}
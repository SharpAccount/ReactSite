import {Card, Container} from "react-bootstrap";

export const cart = {
    totalPrice: 0,
    products: []
};

export function AddToCart(id, price) {

    const product = {
        id: id,
        price: price,
        amount: 1
    }

    cart.products[id] = product;
    cart.totalPrice += Math.round(product.price * 100) / 100;

    return (
        <Card className="card">
            <Card.Header>
                <Card.Img variant="top" className = "" src={product.image}/>
            </Card.Header>
            <Card.Body>
                <Card.Title className="abbreviated overflow-hidden">
                    {product.title}
                </Card.Title>
                <Card.Text>price: ${product.price}</Card.Text>
                {/*place for increase/decrease amount*/}
            </Card.Body>
        </Card>
    )
}
function increaseTotalPrice(productPrice) {
    cart.totalPrice += Math.round(productPrice * 100) / 100;
}
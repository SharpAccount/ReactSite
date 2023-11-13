import {Card} from "react-bootstrap";
import {Context} from "./Core/Context";
import SetAmountButtons from "./ui/kits/changeAmountButton";
import {useContext} from "react";

const {card, addCard, cart} = useContext(Context);

export function AddProduct(id) {

    if (!(cart.products[id])) {
        addCard(addProduct(id));
    } else {
        cart.products[id].amount += 1;
    }

    cart.totalPrice += Math.round(cart.products[id].price * 100) / 100;

    return (
        <>{card}</>
    )
}

function addProduct(id) {
    const product = {
        id: id,
        price: cart.products[id].price,
        amount: 1
    }

    if (!(product[id])) {
        cart.products[id] = product;
    }
    return (
        <Card className="card">
            <Card.Header>
                <Card.Img variant="top" className = "" src={cart.products[id].image}/>
            </Card.Header>
            <Card.Body>
                <Card.Title className="abbreviated overflow-hidden">
                    {cart.products[id].title}
                </Card.Title>
                <Card.Text>price: ${cart.products[id].price}</Card.Text>
                <SetAmountButtons />
            </Card.Body>
        </Card>
    )
}
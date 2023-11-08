import {Button} from "react-bootstrap";

export default function BuyButton({ onClick }) {
    return (
        <Button className="w-100" onClick={onClick}>Add to cart</Button>
    )
}
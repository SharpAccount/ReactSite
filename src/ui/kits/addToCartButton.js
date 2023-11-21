import {Context} from "../../Core/Context";
import {useContext} from "react";
import {Button} from "react-bootstrap";

const AddToCartButton = ({ id }) => {
    const { addProduct } = useContext(Context);

    return (
        <Button className="w-100" onClick={() => addProduct(id)}>Add to cart</Button>
    )
}

export default AddToCartButton;
import ProductCards from "./productCard/productCard";
import {Container} from "react-bootstrap";

export default function Wrapper() {
    return (
        <Container className = "d-flex flex-column h-100 w-100 p-0" >
            <ProductCards/>
        </Container>
    )
}
import Header from "./header/header";
import ProductCards from "./productCard/productCard";

export default function Wrapper() {
    return (
        <div className = "d-sm-flex justify-content-sm-center flex-md-column align-items-center h-100 w-100 bg-" >
            <Header/>
            <ProductCards/>
        </div>
    )
}
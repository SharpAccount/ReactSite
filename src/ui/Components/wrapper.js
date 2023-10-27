import Header from "./header";
import ProductCards from "./productCard";

export default function Wrapper() {
    return (
        <div className = "wrapper">
            <Header/>
            <ProductCards/>
        </div>
    )
}
import Header from "./header";
import ProductCards from "./productCard";
import SideBar from "./sidebar";

export default function Wrapper() {
    return (
        <div className = "wrapper">
            <Header/>
            <SideBar/>
            <ProductCards/>
        </div>
    )
}
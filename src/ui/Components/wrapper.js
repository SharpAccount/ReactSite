import Header from "./header";
import ProductCards from "./productCard";
import SideBar from "./sidebar";

export default function Wrapper() {
    return (
        <div className = "d-sm-flex justify-content-sm-center flex-md-column align-items-center h-100 w-100 bg-" >
            <Header/>
            <SideBar/>
            <ProductCards/>
        </div>
    )
}
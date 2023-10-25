import productCards from '../Components/productCard.js';
import ProductCards from "../Components/productCard.js";
import {useEffect, useState} from "react";

export default function MainPage() {
    return (
    <div className = "wrapper">
        <div id = "elements">
            <div id = "prodCards">
                <ProductCards/>
            </div>
        </div>
    </div> )
}
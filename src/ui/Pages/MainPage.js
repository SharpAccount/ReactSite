import productCards from '../Components/productCard.js';

export default function MainPage() {
    return (
    <div className = "wrapper">
        <div id = "elements">
            <div id = "prodCards">
                {productCards}
            </div>
        </div>
    </div> )
}
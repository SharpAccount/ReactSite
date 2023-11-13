import {card, deleteCard, cart} from "./Core/Context";

export function RemoveProduct(id) {

    if (cart.products[id].amount === 1) {
        console.log('safd');
        deleteCard(delete card[id]);
    } else {
        cart.products[id].amount -= 1;
    }

    cart.totalPrice -= Math.round(cart.products[id].price * 100) / 100;
}
import {useContext, useState} from "react";
import IconMinusCircle from "../../images/minusSign";
import {Container} from "react-bootstrap";
import IconPlusCircle from "../../images/plusSign";
import {Context} from "../../Core/Context";

export default function SetAmountButtons({ children }) {

    const {cart} = useContext(Context)

    const {amount, setAmount} = useState(1)

    function addProd() {
        cart.products[children].amount += 1
        console.log("added")
    }

    function removeProd() {
        cart.products[children].amount -= 1
        setAmount(amount - 1)
        console.log("removed")
    }

    return (
        <Container className = "align-items-center">
            <Container className = "d-flex gap-2 align-items-center">
                <IconMinusCircle onClick = {() => (
                    removeProd()
                )} />
                <p className= "fs-4">{amount}</p>
                <IconPlusCircle onCLick = {() => (addProd)}/>
            </Container>
        </Container>
    )
}
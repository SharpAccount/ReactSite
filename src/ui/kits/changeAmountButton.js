import {useState} from "react";
import {cart} from "../../Core/Context";
import IconMinusCircle from "../../images/minusSign";
import {Container} from "react-bootstrap";
import IconPlusCircle from "../../images/plusSign";

const [amount, setAmount] = useState(1);

export default function SetAmountButtons(id) {
    return (
        <Container>
            <IconMinusCircle onClick = {setAmount(amount + 1)} />
            {amount}
            <IconPlusCircle onCLick = {setAmount(amount - 1)}/>
        </Container>
    )
}
import {useState} from "react";
import IconMinusCircle from "../../images/minusSign";
import {Container} from "react-bootstrap";
import IconPlusCircle from "../../images/plusSign";

export default function SetAmountButtons(id) {
    const [amount, setAmount] = useState(1);

    return (
        <Container>
            <IconMinusCircle onClick = {setAmount(amount + 1)} />
            {amount}
            <IconPlusCircle onCLick = {setAmount(amount - 1)}/>
        </Container>
    )
}
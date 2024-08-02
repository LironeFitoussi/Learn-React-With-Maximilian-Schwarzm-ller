// React and Context
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
// Components
import Modal from "./UI/modal";
import Input from "./UI/Input";
import Button from "./UI/Button";

// Util
import { currencyFormatter } from "../util/formatting";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    return <Modal className="checkout" open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
        <form action="">
            <h2>Checkout:</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>  
            <Input label="Full Name" id="full-name" type="text" required />  
            <Input lable="E-Mail Address" id="email" type="email" required />
            <Input label="Street" id="street" type="text" required />
            <div className="control-row">
                <Input label="Postal Code" id="postal-code" type="text" required />
                <Input label="City" id="city" type="text" required />
            </div>

            <p className="modal-actions">
                <Button type="button" onClick={handleClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>    
    </Modal>
}
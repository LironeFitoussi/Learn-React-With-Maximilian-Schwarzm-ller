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
import axios from "axios";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    };

    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());
        axios.post("http://localhost:3000/orders", {
            order: {
                items: cartCtx.items,
                customer: customerData
            },
        });
        // console.log({
        //     order: {
        //         items: cartCtx.items,
        //         customer: customerData
        //     },
        // });
    };

    return <Modal className="checkout" open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout:</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>  
            <Input label="Full Name" id="name" type="text" required />  
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
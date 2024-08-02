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
import useHttp from "../hooks/useHttp";

const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const {
        data, 
        isLoading: isSending, 
        error, 
        sendRequest,
        clearData
    } = useHttp("http://localhost:3000/orders", requestConfig);

    const cartTotal = cartCtx.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    };

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());
        
        sendRequest(JSON.stringify({ 
            order: { 
                items: cartCtx.items,
                customer: customerData,
            }
        })); 
    };

    let actions = (<>
            <Button type="button" onClick={handleClose}>Close</Button>
            <Button>Submit Order</Button>
        </>);

    if (isSending) {
        actions = <p>Sending order data...</p>;
    }

    if (data) {
        return <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully!</p>
            <p>
                We will get back to you as soon as possible with the order confirmation.
            </p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>
        </Modal>
    }

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

            {error && <Error title="Failed to submit order" message={error} />}

            <p className="modal-actions">
                {actions}
            </p>
        </form>    
    </Modal>
}
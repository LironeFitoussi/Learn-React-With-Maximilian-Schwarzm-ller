import Modal from "./UI/modal";
import { useContext } from "react";
import Button from "./UI/Button";
import CartContex from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import { currencyFormatter } from '../util/formatting.js'
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContex);
    const userProgressCtx = useContext(UserProgressContext);

    console.log(userProgressCtx);
    const cartTotal = cartCtx.items.reduce((acc, item) => { 
        return acc + item.price * item.quantity
    }, 0)

    function handleCloseCart () {
        userProgressCtx.hideCart();
    }

    function handleCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
    <Modal 
        className="cart" 
        open={userProgressCtx.progress === 'cart'} 
        onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onIncrease={() => cartCtx.addItem(item)}
                    onDecrease={() => cartCtx.removeItem(item.id)}
                />
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button onClick={handleCloseCart} textOnly>Close</Button>
            {cartCtx.items.length > 0 && <Button onClick={handleCheckout}>Go to Checkout</Button>}
        </p>
    </Modal>
    )
};
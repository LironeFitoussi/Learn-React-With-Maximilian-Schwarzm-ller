import { useContext } from 'react';
import CartContext from '../store/CartContext';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';


export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.reduce((acc, item) => acc + item.quantity, 0);
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant logo" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly >Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
}
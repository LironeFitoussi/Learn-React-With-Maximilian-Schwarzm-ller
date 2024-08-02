import { useContext } from "react";

import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

import Button from "./UI/Button";
export default function MealItem({ meal }) {
    // console.log(meal);
    const cartCtx = useContext(CartContext);
    function handleAddMealToCart() {
        console.log("Add meal to cart");
        cartCtx.addItem(meal);
    }

  return (
    <li className="meal-item" key={meal.id}>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>Add to Cart</Button>
            </p>
        </article>
    </li>
  );
}
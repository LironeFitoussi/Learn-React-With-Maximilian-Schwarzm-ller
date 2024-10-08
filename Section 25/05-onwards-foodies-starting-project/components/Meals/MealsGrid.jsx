// Styles 
import classes from './MealsGrid.module.css';

// Custom Component
import MealItem from './MealItem';

export default function MealsGrid({ meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem
                        {...meal}
                    />
                </li>
            ))}
        </ul>
    )
}
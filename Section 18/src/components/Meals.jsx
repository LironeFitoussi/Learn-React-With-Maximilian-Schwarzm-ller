import useHttp from "../hooks/useHttp"
import MealItem from "./MealItem.jsx"
import Error from "./Error.jsx"

const requestConfig = {};

export default function Meals() {
    const {
        isLoading, 
        error, 
        data: fetchedMeals
    } = useHttp("http://localhost:3000/meals", requestConfig, []);
    
    if (isLoading) {
        return <p className="center">Fetching meals...</p>
    }

    if (error) {
        console.log(error);
        return <Error title="Failed to fetch meals" message={error} />
    }

    return (
        <ul id="meals">
            {fetchedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
        </ul>
    )
};        
        
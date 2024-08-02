import axios from "axios"
import { useEffect, useState } from "react"
import useHttp from "../hooks/useHttp"
import  MealItem from "./MealItem.jsx"

const requestConfig = {};

export default function Meals() {
    // GET request using axios inside useEffect React hook
    const {
        isLoading, 
        error, 
        data: fetchedMeals
    } = useHttp("http://localhost:3000/meals", requestConfig, []);
    
    if (isLoading) {
        return <p >Fetching meals...</p>
    }

    // if (error) {
    //     return <section className="error">{error}</section>
    // }

    // if (!data) {
    //     return <section className="error">No data found</section>
    // }
    
    // console.log(fetchedMeals);
    return (
        <ul id="meals">
            {fetchedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
        </ul>
    )
};        
        
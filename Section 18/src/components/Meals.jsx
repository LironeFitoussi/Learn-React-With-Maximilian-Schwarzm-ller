import axios from "axios"
import { useEffect, useState } from "react"

export default function Meals() {
    // GET request using axios inside useEffect React hook
    const [fetchedMeals, setFetchedMeals] = useState([])

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await axios.get("http://localhost:3000/meals")
                if (response.status !== 200) {
                    throw new Error("An error occurred while fetching data")
                }
                setFetchedMeals(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchMeals()
    }, [])

    return (
        <ul id="meals">
            {
                fetchedMeals.map((meals) => {
                    return (
                        <li
                            key={meals.id}
                        >
                            <h1>{meals.name}</h1>
                        </li>
                    ) 
                })
            }
        </ul>
    )
};        
        
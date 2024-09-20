import React from 'react';

const MealPage = ({ params: { mealSlug }}) => {
    return (
        <div>
            <h1>Meal: {mealSlug}</h1>
            <p>Details about the meal will go here.</p>
        </div>
    );
};

export default MealPage;
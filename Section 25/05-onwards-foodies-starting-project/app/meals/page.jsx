// Styles
import Link from 'next/link';
import classes from './page.module.css';

// Custom Components
import MealsGrid from '@/components/Meals/MealsGrid';

// DB Functions
import { getMeals } from '@/lib/meals.js';

const MealsPage = async () => {
    const meals = await getMeals();     
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                  Choose your favorite recipe and cook it yourself, It is easy and fun!  
                </p>
                <p className={classes.cta}>
                    <Link href='/meals/new'>
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
};

export default MealsPage;
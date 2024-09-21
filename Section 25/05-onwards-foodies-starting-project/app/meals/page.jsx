// Styles
import Link from 'next/link';
import classes from './page.module.css';

// React Components
import { Suspense } from 'react';

// Custom Components
import MealsGrid from '@/components/Meals/MealsGrid';

// DB Functions
import { getMeals } from '@/lib/meals.js';

async function Meals() {
    return <MealsGrid meals={await getMeals()} />
}

const MealsPage = async () => {
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
                <Suspense fallback={
                    <p className={classes.loading}>
                        Fetching meals...
                    </p>
                }>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};

export default MealsPage;
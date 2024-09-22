import classes from './page.module.css';

// DB Functions
import { getMeal } from '@/lib/meals';

// Next.js Components
import Image from 'next/image';

// Next.js Functions
import { notFound } from 'next/navigation';
const MealPage = async ({ params: { mealSlug }}) => {
    const meal = await getMeal(mealSlug);

    if (!meal) {
        return notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br>');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                <Image
  src={`https://bucket-lf-nextjs-demo.s3.eu-north-1.amazonaws.com/${meal.image}`}
  alt={title}
  fill
/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a herf={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
            </main>
        </>
    );
};

export default MealPage;
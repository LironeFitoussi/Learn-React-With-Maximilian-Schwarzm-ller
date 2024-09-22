import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async  function getMeals() {
    // emulate a slow network request
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Emulate an error
    // throw new Error('Failed to fetch meals');
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(formData) {
    meal.slug = slugify(formData.get('title'), { lower: true });
    meal.instructions = xss(formData.get('instructions'));

}
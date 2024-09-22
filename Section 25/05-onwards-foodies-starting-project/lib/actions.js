'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const mealSchema = z.object({
  title: z.string().min(1, "Title is required"),
  summary: z.string().min(1, "Summary is required"),
  instructions: z.string().min(1, "Instructions are required"),
  image: z.instanceof(File, "Image is required").refine(file => file.size > 0, "Image must not be empty"),
  creator: z.string().min(1, "Creator name is required"),
  creator_email: z.string().email("Invalid email address"),
});

export async function shareMeal(_ , formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  try {
    mealSchema.parse(meal);  // This will throw an error if validation fails
  } catch (err) {
    return { message: err.errors[0].message };
  }

  await saveMeal(meal);

  revalidatePath('/meals');
  redirect('/meals');
}
import Database from "better-sqlite3";

const db = new Database("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('failed to load');
  return db.prepare("SELECT * FROM meals").all();
}


export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
import Database from "better-sqlite3";

const db = new Database("meals.db");


export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

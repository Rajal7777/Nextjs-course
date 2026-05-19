import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = new sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('failed to load');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

//save to db
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); //adds a slug property { title: 'zunk food', slug: 'burger'}

  //we get the instructions from input field{user} to clean the dangerous cross site script{HTML}->removes the dangerous part(code)
  meal.instructions = xss(meal.instructions);


  //meal.image.name ->"burger.png" // .split('.') => "burger.png".split(".") ->["burger", "png"] -> .pop() gets the png
  const extension = meal.image.name.split(".").pop();  //get extension png/jpeg
  const fileName = `${meal.slug}.${extension}`;   //meal.slug = "zunk-food" extension = "png" ->fileName = "zunk-food.png"


  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();  //converting img into binary data

  //Node.js uses Buffer for binary data.
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });
  
  //save the image path name in db
  meal.image = `/images/${fileName}`

  db.prepare(`
    INSERT INTO meals 
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
    )
    `).run(meal)
}

const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "..", "meals.db");
const db = new Database(dbPath);

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`,
).run();

console.log("Initialized DB at", dbPath);

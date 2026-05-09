const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3");

const dbPath = path.join(__dirname, "..", "meals.db");
console.log("DB path:", dbPath);
try {
  const db = new Database(dbPath);
  const tables = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table'")
    .all();
  console.log("Tables:", tables);
  const stats = fs.statSync(dbPath);
  console.log("File size:", stats.size);
} catch (err) {
  console.error("Error opening DB:", err.message);
}

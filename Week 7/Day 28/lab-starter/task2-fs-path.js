/**
 * Task 2 — path & fs (async file I/O)
 *
 * Complete the TODOs. Run: node task2-fs-path.js
 */

const path = require("path");
const fs = require("fs/promises");

const users = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Sara", role: "user" },
  { id: 3, name: "Omar", role: "user" },
];

async function main() {
  try {
    // TODO 1: Build path to data/users.json using path.join(__dirname, ...)
    const filePath = null; // replace null

    // TODO 2: Ensure data/ directory exists (fs.mkdir with { recursive: true })
    // hint: path.dirname(filePath)

    // TODO 3: Write users array as pretty JSON (JSON.stringify(users, null, 2))

    // TODO 4: Read file back with fs.readFile(filePath, 'utf8')

    // TODO 5: Parse JSON and print: "Saved N users to <filePath>"
    const parsed = null; // replace null after reading
    console.log(`Saved ${parsed.length} users to ${filePath}`);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();

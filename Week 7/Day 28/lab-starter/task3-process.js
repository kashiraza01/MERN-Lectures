/**
 * Task 3 — process & environment variables
 *
 * Complete the TODOs, then run:
 *   node task3-process.js
 *   set LAB_NAME=NodeLab && node task3-process.js   (Windows CMD)
 *   $env:LAB_NAME="NodeLab"; node task3-process.js  (Windows PowerShell)
 */

// TODO: Print Node version (process.version)
console.log("Node version:");

// TODO: Print platform (process.platform)
console.log("Platform:");

// TODO: Print current working directory (process.cwd())
console.log("CWD:");

// TODO: Print LAB_NAME from process.env, or "not set" if missing
console.log("LAB_NAME:", process.env.LAB_NAME || "not set");

// TODO: Print CLI args (process.argv) — skip first two entries (node + script path)
console.log("Custom args:", process.argv.slice(2));

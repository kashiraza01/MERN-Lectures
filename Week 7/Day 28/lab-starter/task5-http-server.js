/**
 * Task 5 — Raw HTTP server (no Express)
 *
 * Complete the server. Run: node task5-http-server.js
 * Test: http://localhost:4000/  and  http://localhost:4000/time
 */

const http = require("http");

// TODO: Read port from process.env.PORT with fallback 4000
const PORT = 4000;

// TODO: Create http.createServer handler
//   GET /      → { ok: true, message: "Node HTTP lab" }
//   GET /time  → { time: "<ISO string>" }
//   else       → 404 { error: "Not found" }
// Always set Content-Type: application/json

const server = http.createServer((req, res) => {
  // your routing logic here
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not implemented yet" }));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

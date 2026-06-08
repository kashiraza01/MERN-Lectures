# Lab Day 26 — Instructor Answer Key

> Do not distribute to students before lab completion.

## Task 1 — Event loop order

```
1: sync
5: sync end
2: promise
3: chained promise
4: timeout
```

**Why:** Synchronous `console.log` runs first (1, 5). Promise `.then` callbacks are microtasks (2, 3). `setTimeout` is a macrotask (4).

---

## Task 2 — fs/path (sample solution)

```javascript
const filePath = path.join(__dirname, "data", "users.json");
await fs.mkdir(path.dirname(filePath), { recursive: true });
await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf8");
const raw = await fs.readFile(filePath, "utf8");
const parsed = JSON.parse(raw);
```

---

## Task 3 — process

```javascript
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("CWD:", process.cwd());
console.log("LAB_NAME:", process.env.LAB_NAME || "not set");
console.log("Custom args:", process.argv.slice(2));
```

---

## Task 4 — EventEmitter

```javascript
class Logger extends EventEmitter {
  log(level, message) {
    this.emit("log", { level, message, timestamp: new Date().toISOString() });
  }
}

logger.on("log", (entry) => {
  console.log(`[${entry.level}] ${entry.timestamp} ${entry.message}`);
});
```

---

## Task 5 — HTTP server

```javascript
const PORT = Number(process.env.PORT) || 4000;

const server = http.createServer((req, res) => {
  const send = (status, body) => {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body));
  };

  if (req.method === "GET" && req.url === "/") {
    return send(200, { ok: true, message: "Node HTTP lab" });
  }
  if (req.method === "GET" && req.url === "/time") {
    return send(200, { time: new Date().toISOString() });
  }
  send(404, { error: "Not found" });
});
```

---

## Task 6 — utils/format.js

```javascript
function formatLogEntry({ level, message, timestamp }) {
  return `[${level}] ${timestamp} ${message}`;
}

module.exports = formatLogEntry;
```

```javascript
// task4-events.js (listener)
const formatLogEntry = require("./utils/format");
logger.on("log", (entry) => console.log(formatLogEntry(entry)));
```

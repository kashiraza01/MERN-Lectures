/**
 * Task 4 — EventEmitter logger
 *
 * Complete the Logger class and listener. Run: node task4-events.js
 */

const { EventEmitter } = require("events");

class Logger extends EventEmitter {
  log(level, message) {
    // TODO: emit 'log' event with { level, message, timestamp: new Date().toISOString() }
  }
}

const logger = new Logger();

logger.on("log", (entry) => {
  // TODO: print "[LEVEL] timestamp message"
  // Example: [INFO] 2026-06-08T10:00:00.000Z Server started
});

logger.log("INFO", "Server started");
logger.log("WARN", "Low disk space");

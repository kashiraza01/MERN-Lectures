/**
 * Task 1 — Event Loop Prediction
 *
 * BEFORE running: write the expected output order on paper.
 * AFTER running: add a comment below explaining sync vs microtask vs macrotask.
 */

console.log("1: sync");

setTimeout(() => console.log("4: timeout"), 0);

Promise.resolve()
  .then(() => console.log("2: promise"))
  .then(() => console.log("3: chained promise"));

console.log("5: sync end");

// Your explanation (why this order?):
//

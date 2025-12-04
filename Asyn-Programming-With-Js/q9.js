// Q9 – Event Loop Debugger

/* Predicted order:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- Microtasks (Promises) always run before macrotasks (setTimeout)
*/

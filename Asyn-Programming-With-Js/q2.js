// Q2 – Micro vs Macro Task Execution Order

console.log("Start");

setTimeout(() => console.log("Timeout callback (Macrotask)"), 0);

Promise.resolve().then(() => console.log("Promise callback (Microtask)"));

console.log("Script mid");

console.log("End");

/*
Execution order:
1. Start
2. Script mid
3. End
4. Promise callback (microtasks before macrotasks)
5. Timeout callback
*/

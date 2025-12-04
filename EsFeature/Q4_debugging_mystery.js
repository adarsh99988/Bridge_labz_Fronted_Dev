'use strict';
// Q4 – Debugging Mystery
function showMessage() {
    // Under strict mode, assigning to an undeclared variable throws a ReferenceError.
    // greeting = "Welcome"; // <-- this would throw
    const greeting = "Welcome"; // Fixed by declaring with const
    console.log(greeting);
}
showMessage();

// Explanation:
// In non-strict mode, assignment to an undeclared identifier creates a global variable.
// In strict mode ('use strict'), that is forbidden and throws a ReferenceError.
// Watch variable: set a breakpoint on console.log and add 'greeting' to the watch panel in VS Code to observe its value.
// Call stack: showMessage -> (global)

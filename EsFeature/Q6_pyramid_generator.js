'use strict';
// Q6 – Pyramid Pattern Generator
// Default lines = 5; demonstrate var vs let differences when requested.

function generatePyramid(lines = 5) {
    for (let i = 1; i <= lines; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}

console.log('\nPyramid with default 5 lines:');
generatePyramid(5);

// Replace let with var example (in a function scope) - be careful with var's function scope
(function generateWithVar(lines = 5) {
    for (var i = 1; i <= lines; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
})();

// Outer loop limit controlled by user input (fallback to 5). In node you might read from process.argv,
// but to keep code environment-agnostic, we accept a value from environment variable or default.
const userLimit = Number(process && process.env && process.env.PYRAMID_LIMIT) || 5;
console.log(`\nPyramid using user-controlled limit (${userLimit}):`);
generatePyramid(userLimit);

// 'use strict' will catch if we accidentally omit declaration (e.g., writing i = 0).

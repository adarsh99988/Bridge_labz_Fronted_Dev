// Q8 – Strict Mode Showdown
// Show behavior with and without 'use strict' in the same file by using IIFEs.

(function nonStrictVersion() {
    // Non-strict (no 'use strict' here)
    function demo(a, a_duplicate) {
        // duplicate parameter names are allowed in non-strict mode
        total = 10; // creates global 'total' in non-strict mode
        // delete total; // delete of a non-configurable property will fail silently in non-strict mode (or return false)
        console.log('Non-strict demo:', a_duplicate, typeof total !== 'undefined' ? total : 'total undefined');
    }
    demo(5, 10);
})();

(function strictVersion() {
    'use strict';
    try {
        function demoStrict(a, a) {
            // duplicate params not allowed in strict mode — this will cause a SyntaxError if parsed in strict mode.
        }
    } catch (e) {
        console.log('Strict-mode function with duplicate params error:', e.message);
    }

    try {
        // Also strict forbids creating globals by assignment
        // totalStrict = 20; // would throw ReferenceError
    } catch (e) {
        console.log('Strict-mode global creation error:', e.message);
    }

    // Correct ES6-style version:
    const demoCorrect = (a, b) => {
        const total = 10;
        // delete total; // SyntaxError: delete of an unqualified identifier is not allowed in strict mode
        console.log('Strict-mode correct demo:', a, b, total);
    };
    demoCorrect(5, 10);
})();

// Explanation notes are in comments: strict mode disallows duplicate params, implicit globals, and makes some deletes illegal.

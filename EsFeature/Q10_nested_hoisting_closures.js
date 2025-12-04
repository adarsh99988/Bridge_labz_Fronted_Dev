'use strict';
// Q10 – Nested Hoisting and Closures
// Original snippet:
// function outer() {
//   console.log(count);
//   var count = 5;
//   function inner() {
//     console.log(count);
//     var count = 10;
//   }
//   inner();
// }
// outer();

// Prediction & explanation:
// outer's var count is hoisted (declared) and initialized to undefined at entry -> first console.log prints undefined.
// inner's var count is hoisted inside inner (shadowing outer's count) -> inner console.log prints undefined as well.
// After assignments, counts get values but logs already happened.

(function runOriginal() {
    function outer() {
        console.log('outer first log (expected undefined):', count);
        var count = 5;
        function inner() {
            console.log('inner first log (expected undefined due to hoisted inner count):', count);
            var count = 10;
            console.log('inner after assignment (should be 10):', count);
        }
        inner();
        console.log('outer after assignment (should be 5):', count);
    }
    outer();
})();

// Convert inner to arrow and observe behaviour
(function runArrowInner() {
    function outer() {
        console.log('\nArrow inner - outer first log (expected undefined):', count);
        var count = 5;
        // Arrow function as inner; arrow functions do not create their own 'this' or arguments, but var hoisting behavior still applies for var inside arrow if declared.
        const inner = () => {
            console.log('arrow inner first read (outer count visible because no inner var):', count);
            // var count = 10; // if we add a var count here, it would be hoisted within this function expression's scope.
        };
        inner();
        console.log('outer after arrow inner (should be 5):', count);
    }
    outer();
})();

// Debug session tips:
// - Set breakpoints at each console.log to inspect local scope objects for both outer and inner.
// - Observe hoisted variable declarations appear in the scope before assignment (undefined).

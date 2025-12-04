'use strict';
// Q5 – Hoisting Lab: The Sequence Trap
// Predict hoisting states, then provide fixed code and arrow-function variant.

// Original (problematic) snippet - explained:
// console.log(score);      // score is hoisted but undefined (due to var), so prints undefined
// announce();              // function declaration is hoisted -> works
// var score = 50;          // assignment happens here
// function announce() { console.log("Game started"); }
// let status = "ready";    // temporal dead zone for 'status' before this line
// startGame();             // startGame is hoisted (function decl), but it references 'status' declared with let
// function startGame() { console.log(status); }

// Fixed version:
(function fixed() {
    var score = 50;
    function announce() { console.log("Game started"); }
    console.log(score);    // 50
    announce();            // "Game started"

    let status = "ready";
    function startGame() { console.log(status); }
    startGame();           // "ready"
})();

// Arrow function rewrite to compare hoisting differences:
(function arrows() {
    // Function expressions (including arrow functions) are NOT hoisted in the same way as function declarations.
    const announce = () => console.log("Game started (arrow)");
    const startGame = () => {
        const status = "ready-arrow";
        console.log(status);
    };

    // Using them after definition
    announce();
    startGame();
})();

// Hoisting notes:
// - Function declarations are hoisted (entire function), var declarations are hoisted (undefined init).
// - let/const are hoisted but in TDZ (cannot access before declaration).
// - Arrow function expressions assigned to const/let are not hoisted as callable functions before their line.

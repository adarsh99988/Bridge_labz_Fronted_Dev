// Q4 Array Performance Analyzer
let scores = [];
for (let i = 0; i < 8; i++) {
  scores.push(Math.floor(Math.random() * 71) + 30);
}

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let avg = scores.reduce(function(a, b){ return a + b; }, 0) / scores.length;

let passed = scores.filter(function(s){ return s >= 50; }).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", avg);
console.log("Passed:", passed);

// Q3 Monthly Expense Tracker
let expenses = [2000, 500, 8000, 1500, 1000];

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = (total + tax).toFixed(2);

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount (after tax):", finalAmount);

// Q8 Employee Salary Projection
let currentSalary = 30000;
let incrementRate = 10;

let yearlyData = [];

for (let year = 1; year <= 5; year++) {
  currentSalary = currentSalary + (currentSalary * incrementRate / 100);
  yearlyData.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(yearlyData);

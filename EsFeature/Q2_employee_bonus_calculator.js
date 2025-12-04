'use strict';
// Q2 – Employee Bonus Calculator
// Convert salary and years to numbers, compute bonus, strict validation, template strings, try..catch.

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

(function calculateBonuses(list) {
    for (let i = 0; i < list.length; i++) {
        try {
            const emp = list[i];
            if (!emp) throw new Error('Missing employee object');

            if (!('name' in emp) || !('salary' in emp) || !('years' in emp)) {
                throw new Error(`Missing property in employee at index ${i}`);
            }

            const name = emp.name;
            const salary = Number(emp.salary);
            const years = Number(emp.years);

            if (Number.isNaN(salary) || Number.isNaN(years)) {
                throw new TypeError(`Invalid numeric conversion for ${name}`);
            }

            const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
            console.log(`Employee: ${name} | Salary: ${salary.toFixed(2)} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
        } catch (err) {
            console.log(`Error processing employee at index ${i}:`, err.message);
        }
    }
})(employees);

// Hoisting & debug observations:
// - 'use strict' prevents implicit global creation like accidentally assigning to "empSalary = 5".
// - try..catch isolates conversion errors per employee.

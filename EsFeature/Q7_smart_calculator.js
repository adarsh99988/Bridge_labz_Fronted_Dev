'use strict';
// Q7 – Smart Calculator
// Handles add, divide, power, root, subtract with custom error handling.

class InvalidOperationError extends Error {
    constructor(op) {
        super(`Invalid operation: ${op}`);
        this.name = 'InvalidOperationError';
    }
}

function smartCalc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            if (b === 0) throw new Error('DivisionByZero');
            return a / b;
        case 'power':
            return Math.pow(a, b);
        case 'root':
            if (a < 0 && Math.abs(b) % 2 === 0) throw new Error('EvenRootOfNegative');
            return Math.pow(a, 1 / b);
        default:
            throw new InvalidOperationError(operation);
    }
}

(function run() {
    const operations = ['add', 'divide', 'power', 'root', 'subtract', 'unknown'];
    const num1 = 25, num2 = 0;
    for (const op of operations) {
        try {
            const result = smartCalc(op, num1, num2);
            console.log(`Operation: ${op} | Result: ${result}`);
        } catch (err) {
            console.log(`Operation: ${op} | Error: ${err.name || err.message} - ${err.message}`);
        }
    }
})();

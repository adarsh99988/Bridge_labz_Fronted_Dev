'use strict';
// Q9 – JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

(function audit(data) {
    const clean = [];
    const errors = [];
    for (let i = 0; i < data.length; i++) {
        const line = data[i];
        try {
            const parsed = JSON.parse(line);
            if (!('user' in parsed) || !('age' in parsed)) {
                throw new Error('MissingKey');
            }
            // convert age to Number
            parsed.age = Number(parsed.age);
            if (Number.isNaN(parsed.age)) throw new Error('InvalidAgeConversion');
            clean.push(parsed);
            console.log(`Line ${i}: Parsed user=${parsed.user}, age=${parsed.age}`);
        } catch (err) {
            errors.push({ line: i, raw: line, message: err.message });
            console.log(`Line ${i} parse error: ${err.message}`);
        }
    }

    // Filter under-18
    const adults = clean.filter(u => u.age >= 18);

    console.log('\nClean entries:', clean);
    console.log('Adults (18+):', adults);
    console.log('Errors with line numbers:', errors);
})(rawData);

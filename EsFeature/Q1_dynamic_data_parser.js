'use strict';
// Q1 – Dynamic Data Parser
// Converts mixed API data into Number, Boolean, and String forms,
// separates valid numeric values from invalid ones and prints a detailed report.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function isValidNumberString(s) {
    // Trim and check that full string is a valid number representation.
    if (typeof s !== 'string') return false;
    const trimmed = s.trim();
    if (trimmed.length === 0) return false;
    // Reject strings with non-numeric characters except leading +/-, decimal point, exponent
    return !Number.isNaN(Number(trimmed));
}

(function parseData(data) {
    const validNumbers = [];
    const invalidEntries = [];
    const report = [];

    for (let i = 0; i < data.length; i++) {
        const original = data[i];
        const asString = String(original);
        let asNumber = Number(original);
        let asBoolean = Boolean(original);

        if (original === null || typeof original === 'undefined') {
            // explicitly treat null/undefined as invalid numbers for this task
            invalidEntries.push({ index: i, reason: 'null or undefined', value: original });
            report.push({ index: i, original, asString, asNumber: 'Invalid', asBoolean });
            continue;
        }

        if (isValidNumberString(original)) {
            // store as actual number
            validNumbers.push({ index: i, original, number: asNumber, boolean: asBoolean, string: asString });
            report.push({ index: i, original, asString, asNumber, asBoolean });
        } else {
            // invalid numeric forms like "NaN", " ", "100px" or anything not parseable
            invalidEntries.push({ index: i, reason: 'invalid number format', value: original });
            // keep conversions but mark number as invalid
            report.push({ index: i, original, asString, asNumber: 'Invalid', asBoolean });
        }
    }

    // Print detailed report with conditional formatting
    console.log('\n=== Dynamic Data Parser Report ===');
    for (const row of report) {
        if (row.asNumber === 'Invalid') {
            console.log(`Index ${row.index}: ORIGINAL=${JSON.stringify(row.original)} | STRING=${row.asString} | NUMBER=Invalid | BOOLEAN=${row.asBoolean}`);
        } else {
            console.log(`Index ${row.index}: ORIGINAL=${JSON.stringify(row.original)} | STRING=${row.asString} | NUMBER=${row.asNumber} | BOOLEAN=${row.asBoolean}`);
        }
    }

    console.log('\nValid numeric data array:');
    console.log(validNumbers);

    console.log('\nInvalid entries:');
    console.log(invalidEntries);
})(apiData);

// Hoisting & debug notes:
// - No hoisting-specific traps here because we use let/const and functions scoped properly.
// - Use 'use strict' to catch accidental globals.

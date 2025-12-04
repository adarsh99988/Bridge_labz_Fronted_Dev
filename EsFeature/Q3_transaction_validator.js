'use strict';
// Q3 – Transaction Validator
// Validate transactions with custom errors, categorize valid and invalid entries.

class TransactionError extends Error {
    constructor(message, type) {
        super(message);
        this.name = 'TransactionError';
        this.type = type;
    }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

(function validate(transList) {
    const valid = [];
    const invalid = [];
    for (let i = 0; i < transList.length; i++) {
        try {
            const tx = transList[i];
            if (tx === null) throw new TransactionError('Null transaction entry', 'NullEntry');
            if (typeof tx !== 'object') throw new TransactionError('Invalid transaction type', 'InvalidType');
            if (!('id' in tx) || !('amount' in tx)) throw new TransactionError('Missing id or amount', 'MissingField');
            if (typeof tx.amount !== 'number') throw new TransactionError('Amount not a number', 'InvalidAmount');
            if (tx.amount < 0) throw new TransactionError('Negative amount not allowed', 'NegativeAmount');

            // If we reach here it's valid
            valid.push(tx);
            console.log(`Transaction ${tx.id} processed: amount=${tx.amount}`);
        } catch (err) {
            if (err instanceof TransactionError) {
                invalid.push({ index: i, type: err.type, message: err.message });
                console.log(`Transaction at index ${i} failed: [${err.type}] ${err.message}`);
            } else {
                invalid.push({ index: i, type: 'Unknown', message: err.message });
                console.log(`Transaction at index ${i} failed with unknown error: ${err.message}`);
            }
        }
    }

    console.log('\n=== Transaction Summary ===');
    console.log(`Successful: ${valid.length}, Failed: ${invalid.length}`);
    console.log('Valid transactions:', valid);
    console.log('Invalid transactions:', invalid);

    // Note about breakpoints:
    // Place a breakpoint inside the try block to watch 'tx', 'i', and 'valid' arrays during debugging.
})(transactions);

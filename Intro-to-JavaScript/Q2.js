// Q2 Multi-Type Data Summary
let str = "Hello";
let num = 10;
let bool = true;
let arr = [1, 2, 3];
let obj = { id: 1 };
let emptyValue = null;
let undef;

console.table({
  string: { value: str, type: typeof str },
  number: { value: num, type: typeof num },
  boolean: { value: bool, type: typeof bool },
  array: { value: arr, type: Array.isArray(arr) },
  object: { value: obj, type: typeof obj },
  nullValue: { value: emptyValue, type: typeof emptyValue },
  undefinedValue: { value: undef, type: typeof undef }
});

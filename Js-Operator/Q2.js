// Q2 String Manipulation Report
let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase();
let words = cleaned.split(" ");
let formatted = words.map(function(w){
  return w.charAt(0).toUpperCase() + w.slice(1);
}).join(" ");

formatted = formatted.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", formatted);
console.log("Length:", formatted.length);

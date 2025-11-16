// Q8 Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
  let p = cart[i].price;

  if (cart[i].category === "electronics") {
    p = p - p * 0.10;
  } else if (cart[i].category === "fashion") {
    p = p - p * 0.05;
  }

  total += p;
}

if (total > 50000) {
  total = total - total * 0.05;
}

console.log("Final Total:", total);

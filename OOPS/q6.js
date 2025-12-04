// Q6 – E-Commerce Inventory System

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
  { id: 2, name: "Shoes", category: "Fashion", price: 2000, stock: 2 },
  { id: 3, name: "Mouse", category: "Electronics", price: 500, stock: 20 },
  { id: 4, name: "Shirt", category: "Fashion", price: 800, stock: 1 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 3);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((acc, p) => acc + (p.price * p.stock), 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    if (!group[p.category]) group[p.category] = [];
    group[p.category].push(p);
    return group;
  }, {});
}

console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Grouped by Category:", groupByCategory());

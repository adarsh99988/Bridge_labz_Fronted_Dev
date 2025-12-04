// Q6 – Fetch product data from Fake Store API

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Network error");

    const data = await res.json();

    data.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("------------------------");
    });
  } catch (err) {
    console.error("Failed to load products. Please try again.");
  }
}

fetchProducts();

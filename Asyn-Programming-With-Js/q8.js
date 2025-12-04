// Q8 – Retry mechanism for order submission

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve("Order submitted") : reject("Order failed");
    }, 500);
  });
}

async function processOrder() {
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await submitOrder();
      console.log(`Attempt ${i}: Success`);
      return res;
    } catch {
      console.log(`Attempt ${i}: Failed`);
    }
  }
  throw new Error("Order could not be processed");
}

processOrder()
  .then(msg => console.log(msg))
  .catch(err => console.error("FINAL ERROR:", err.message));

// Q2 – Online Food Ordering (map + reduce + Error Handling)

const menu = {
  burger: 100,
  pizza: 250,
  momo: 80,
  fries: 60
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error(`Invalid item ordered: ${item}`);
      return menu[item];
    });

    const total = prices.reduce((a, b) => a + b, 0);
    console.log("Total Bill:", total);
  } catch (err) {
    console.error("Order Error:", err.message);
  }
}

calculateBill(["burger", "pizza"]);
calculateBill(["momo", "invalidItem"]);

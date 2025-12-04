// Q1 – Async Coffee Maker using Promises + random failure

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Water boiled") : reject("Failed to boil water");
    }, 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Coffee brewed") : reject("Failed to brew coffee");
    }, 1500);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Coffee poured") : reject("Failed to pour coffee");
    }, 1200);
  });
}

boilWater()
  .then(msg => {
    console.log(msg);
    return brewCoffee();
  })
  .then(msg => {
    console.log(msg);
    return pourCoffee();
  })
  .then(msg => {
    console.log(msg);
    console.log("Coffee ready for the team!");
  })
  .catch(err => console.error("ERROR:", err));

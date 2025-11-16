// Q6 Event-Based Counter Simulation
let count = 0;

function increment() {
  count++;
  console.log("Count:", count);

  function inner() {
    console.log("Inner Count:", count);
  }
  inner();
}

function decrement() {
  count--;
  console.log("Count:", count);
}

increment();
increment();
decrement();

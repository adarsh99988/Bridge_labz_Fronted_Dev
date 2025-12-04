// Q10 – Async Delivery Pipeline

function asyncStep(msg) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      Math.random() < 0.8 ? resolve(msg) : reject(msg + " FAILED");
    }, delay);
  });
}

async function runPipeline() {
  try {
    console.log("Start Pipeline");

    console.log(await asyncStep("Step 1: Order taken"));
    console.log(await asyncStep("Step 2: Food prepared"));
    console.log(await asyncStep("Step 3: Package ready"));
    console.log(await asyncStep("Step 4: Out for delivery"));

    console.log("Delivery completed!");
  } catch (err) {
    console.log("Pipeline failed!", err);
  }
}

runPipeline();

/*
Async/await enhances readability:
- Steps look like synchronous code
- No callback nesting
- Easy debugging with try/catch
*/

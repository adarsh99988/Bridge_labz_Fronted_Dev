// Q4 – DevOps Delay: Promise.all + Promise.race

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Server A completed") : reject("Server A failed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Server B completed") : reject("Server B failed");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.error("ERROR:", err));

Promise.race([serverA(), serverB()])
  .then(result => console.log("Fastest response:", result))
  .catch(err => console.error("Race ERROR:", err));

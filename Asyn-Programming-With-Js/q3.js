// Q3 – Bug Tracker: Callback → Promise Migration

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) resolve(["UI glitch", "API timeout", "Login failure"]);
      else reject("API error: Could not fetch bugs");
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.error("ERROR:", err));

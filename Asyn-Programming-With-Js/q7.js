// Q7 – Promise.allSettled dashboard loaders

function loadProfile(){ 
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.7 ? resolve("Profile Loaded") : reject("Profile FAILED"), 2000);
  });
}
function loadPosts(){ 
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.7 ? resolve("Posts Loaded") : reject("Posts FAILED"), 1500);
  });
}
function loadMessages(){ 
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.7 ? resolve("Messages Loaded") : reject("Messages FAILED"), 1000);
  });
}

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then(results => {
    console.log(results);

    results.forEach((r, i) => {
      console.log(`Module ${i + 1}:`, r.status, "-", r.value || r.reason);
    });

    console.log("Total time:", (Date.now() - start) + "ms");
  });

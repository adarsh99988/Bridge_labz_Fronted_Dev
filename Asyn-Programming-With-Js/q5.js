// Q5 – Callback Hell → async/await

// Callback hell version
function design(cb){ setTimeout(() => { console.log("Design complete"); cb(); }, 1000); }
function build(cb){ setTimeout(() => { console.log("Build complete"); cb(); }, 1000); }
function test(cb){ setTimeout(() => { console.log("Test complete"); cb(); }, 1000); }
function deploy(cb){ setTimeout(() => { console.log("Deploy complete"); cb(); }, 1000); }
function celebrate(cb){ setTimeout(() => { console.log("Celebrate!"); cb(); }, 1000); }

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => console.log("Pipeline done (Callback hell)!"));
      });
    });
  });
});

// -------------------------------
// async/await CLEAN VERSION
function stage(msg) {
  return new Promise(resolve => {
    setTimeout(() => { console.log(msg); resolve(); }, 1000);
  });
}

async function pipeline() {
  await stage("Design complete");
  await stage("Build complete");
  await stage("Test complete");
  await stage("Deploy complete");
  await stage("Celebrate!");
  console.log("Pipeline done (Async/Await).");
}

pipeline();

/*
Async/await improves readability because:
- No nested structure
- Sequential flow looks like synchronous code
- Error handling is easier with try/catch
*/

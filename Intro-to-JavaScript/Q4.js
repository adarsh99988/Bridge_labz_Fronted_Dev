// Q4 Academic Performance Evaluator
let marks = [80, 70, 90, 85, 75];

let anyFail = false;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 35) {
    anyFail = true;
  }
}

if (anyFail) {
  console.log("Detained");
} else {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }

  let percentage = total / marks.length;

  if (percentage >= 85) {
    console.log("Promoted with Distinction");
  } else if (percentage >= 50) {
    console.log("Promoted");
  } else {
    console.log("Detained");
  }
}

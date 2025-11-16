// Q7 Customer Feedback Processor
let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ");
let hasBad = feedback.includes("bad") || feedback.includes("poor");

if (hasBad) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}

console.log("Word Count:", words.length);

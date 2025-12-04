// Q9 – Fitness App Analytics

class FitnessAnalytics {
  constructor(data) {
    if (!data.length) throw new Error("Dataset cannot be empty");
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(u => u.steps > 7000);
  }

  getAverageCalories() {
    return this.data.reduce((sum, u) => sum + u.calories, 0) / this.data.length;
  }

  getUserSummary() {
    return this.data.map(u => `${u.user} burned ${u.calories} calories`);
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

try {
  const analytics = new FitnessAnalytics(workoutData);
  console.log("Active Users:", analytics.getActiveUsers());
  console.log("Average Calories:", analytics.getAverageCalories());
  console.log("User Summary:", analytics.getUserSummary());
} catch (err) {
  console.error("Error:", err.message);
}

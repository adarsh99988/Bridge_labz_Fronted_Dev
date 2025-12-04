// Q5 – Ride-Sharing Application

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance <= 0 || isNaN(this.distance)) {
      throw new Error("Invalid distance. Cannot calculate fare.");
    }
    return this.distance * 12;
  }
}

try {
  const t1 = new Trip("A", "B", 10);
  console.log("Fare:", t1.calculateFare());
} catch (err) {
  console.error("Trip Error:", err.message);
}

try {
  const t2 = new Trip("A", "B", -5);
  console.log("Fare:", t2.calculateFare());
} catch (err) {
  console.error("Trip Error:", err.message);
}

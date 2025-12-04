// Q1 – Student Result Processing (Classes + reduce)

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

const s1 = new Student("Aman", [90, 85, 92]);
const s2 = new Student("Bittu", [70, 65, 75]);
const s3 = new Student("Chetan", [40, 55, 45]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());

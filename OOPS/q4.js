// Q4 – Employee & Manager Inheritance (Polymorphism)

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} works in ${this.department}`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} manages the ${this.department} department.`);
  }
}

const e1 = new Employee("Amit", "HR");
const m1 = new Manager("Bittu", "Tech");

e1.work();
m1.work();

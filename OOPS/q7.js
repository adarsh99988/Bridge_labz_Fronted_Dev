// Q7 – Banking Application with Private Fields

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log("Deposited:", amount);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
    console.log("Withdrawn:", amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1500);

try {
  acc.withdraw(3000);
} catch (err) {
  console.error("Bank Error:", err.message);
}

console.log("Final Balance:", acc.getBalance());

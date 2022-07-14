// 1. Create an Author class and a Book class.

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this.email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  get gender() {
    return this._gender;
  }
  toString() {
    return `Name: ${this.name}, Email: ${this.email}, Gender: ${this.gender}.`;
  }
}

class Book {
  constructor(author, title, price, quantity) {
    this._author = author;
    this._title = title;
    this._price = price;
    this._quantity = quantity;
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
  get price() {
    return `${this._price}$`;
  }
  set price(value) {
    return `${(this._price = value)}$`;
  }
  get quantity() {
    return `${this._quantity} copies`;
  }
  set quantity(value) {
    return `${(this._quantity = quantity)} copies`;
  }
  getProfit() {
    return `${this._price * this._quantity}$`;
  }
  toString() {
    return `Author: ${this.author.name}, Title: ${this.title}, Price: ${this.price}, Quantity: ${this.quantity}.`;
  }
}

// 2. Create an Account class. Account should have: id, name, balance.

class Account {
  constructor(name, balance) {
    this._name = name;
    this._balance = balance;
  }
  _id = Math.random();
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get balance() {
    return `${this._balance}$`;
  }
  credit(amount) {
    return `${(this._balance += amount)}$`;
  }
  debit(amount) {
    if (amount > this._balance) {
      return 'Amount exceeded balance';
    }
    return `${(this._balance -= amount)}$`;
  }
  transferTo(account, amount) {
    if (account.id === this.id || amount > this._balance) {
      return 'Amount exceeded balance';
    }
    this._balance -= amount;
    return `${(account._balance += amount)}$`;
  }
}

// 3. Write classes: Person, Student, Staff.

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  get gender() {
    return this._age;
  }
  toString() {
    return `Name: ${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}`;
  }
}

class Student extends Person {
  _year = 1;
  constructor(firstName, lastName, gender, age, programs, fee) {
    super(firstName, lastName, gender, age);
    this._programs = programs;
    this._fee = fee;
  }
  get programs() {
    return this._programs;
  }
  get year() {
    return this._year;
  }
  get fee() {
    return `${this._fee}$`;
  }
  passExam(program, grade) {
    let indexOfProgram = this._programs.indexOf(program);
    if (indexOfProgram === -1) {
      return `${this.firstName} ${this.lastName} has no program like that.`;
    }
    if (grade >= 50) {
      this._programs.splice(indexOfProgram, 1);
      return this._year++;
    }
    return `${this.firstName} ${this.lastName} didn't pass the exam.`;
  }
}

class Teacher extends Person {
  _recievedMoney = 0;
  constructor(firstName, lastName, gender, age, program) {
    super(firstName, lastName, gender, age);
    this._program = program;
  }
  get program() {
    return this._program;
  }
  get recievedMoney() {
    return `${this._recievedMoney}$`;
  }
  pay(amount) {
    return `${(this._recievedMoney += amount)}$`;
  }
}

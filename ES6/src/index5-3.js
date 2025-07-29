// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.sayHello = function () {
//   console.log(`我是${this.name},今年${this.age}岁`);
// };

// const p = new Person('张三', 18);
// // p.sayHello();
// console.log(p);

// class Person1 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`我是${this.name},今年${this.age}岁`);
//   }
// }

// class Student extends Person1 {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
//   sayHello() {
//     console.log(`我是${this.name},今年${this.age}岁,现在是${this.grade}`);
//   }
// }

// const p2 = new Student('王五', 22, '六年级');
// console.log(p2);
// p2.sayHello();
// const p1 = new Person1('李四', 20);
// p1.sayHello();
// console.log(p1);

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static speak() {
    console.log(111);
  }
  static grade = '1';
}
Person1.speak();
console.log(Person1.grade);
const p = new Person1('张三', 18);
console.log(p.grade);

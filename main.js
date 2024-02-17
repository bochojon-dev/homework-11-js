// UYGA VAZIFA

// // String constructor1
// String.prototype.trm = function () {
//   let res = "";
//   let str = this.toString();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       res += str[i];
//     }
//   }
//   return res;
// };

// let str = "        hello    ";
// let result = str.trm();
// console.log(result);

// // String constructor2
// String.prototype.upperCase = function () {
//   let upper = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
//   let lower = "abcdefghijklmnopqrstuvwxyz";
//   let str = "";
//   for (i = 0; i < this.length; i++) {
//     el = this[i];
//     if (lower.includes(el)) {
//       el = upper[lower.indexOf(el)];
//     }
//     str += el;
//   }
//   return str;
// };
// let fullName = "John Doe";
// let result = fullName.upperCase();
// console.log(result);

// // String constructor3
// String.prototype.has = function (str) {
//   return this.indexOf(str) !== -1;
// };
// let string = "Maqsadjon zo'r web dasturchi";
// let search = "web";
// if (string.has(search)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // String constructor4
// String.prototype.cut = function (start, end) {
//   let str = "";
//   for (i = start - 1; i < end; i++) {
//     str += this[i];
//   }
//   return str;
// };
// let example = "Maqsadjon developer";
// let result = example.cut(1, 10);
// console.log(result);

// // String constructor5
// String.prototype.rpt = function (n) {
//   let str = "";
//   for (i = 1; i <= n; i++) {
//     str += this;
//   }
//   return str;
// };
// let example = "Maqsadjon ";
// let result = example.rpt(4);
// console.log(result);
/////////////// second another way /////////////
// String.prototype.rpt = function (n) {
//   return new Array(n + 1).join(this);
// };
// let example = "hello";
// let result = example.rpt(3);
// console.log(result);

// // Number constructor1
// Number.prototype.fixed = function (n) {
//   let str = this.toString();
//   let i = str.indexOf(".");
//   if (i !== -1) {
//     let a = str.slice(0, i);
//     let b = str.slice(i + 1, i + 1 + n);
//     return (res = `${a}.${b}`);
//   }
//   return res;
// };
// let number = 12.3456;
// let result = number.fixed(2);
// console.log(result);

// // Number constructor2
// Number.prototype.round = function (n) {
//   let str = this.toString();
//   let i = str.indexOf(".");
//   if (i !== -1) {
//     let a = str.slice(0, i);
//     let b = str.slice(i + 1, i + 2);
//     if (b >= 5) {
//       return +a + 1;
//     }
//     return +a;
//   }
// };
// let number = 4.467;
// let result = number.round();
// console.log(result);

// // Number constructor3
// Number.prototype.isSquare = function (n) {
//   let num = Math.sqrt(this);
//   if (Number.isInteger(num)) {
//     return true;
//   }
//   return false;
// };
// let number1 = 16;
// let number2 = 10;
// let result1 = number1.isSquare();
// let result2 = number2.isSquare();

// console.log(result1);
// console.log(result2);

// // Number constructor4
// Number.prototype.count = function () {
//   let num = parseInt(this.toString());
//   if (Number.isInteger(num)) {
//     return num.toString().length;
//   } else {
//     return `musbat butun son kiritnmadingiz, iltimos qaytadan urinib ko'ring`;
//   }
// };
// let number = 1234;
// let result = number.count();
// console.log(result);

// // Number constructor5
// Number.prototype.sum = function () {
//   let str = this.toString();
//   let num = str.split("").map(Number);
//   let summ = 0;
//   for (let i = 0; i < num.length; i++) {
//     summ += num[i];
//   }
//   return summ;
// };
// let number = 123;
// let result = number.sum();
// console.log(result);

// // Array constructor1
// Array.prototype.customMap = function (callback) {
//   let arr = [];
//   for (i = 0; i < this.length; i++) {
//     arr.push(callback(this[i]));
//   }
//   return arr;
// };
// let array = [1, 2, 3, 4];
// let result = array.customMap((el) => el * 2);
// console.log(result);

// // Array constructor2
// Array.prototype.customMap = function (callback) {
//   for (i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       return true;
//     }
//     return false;
//   }
// };
// let array = [1, 2, 3, 4];
// let result = array.customMap((el) => (el > 0));
// console.log(result);

// // Array constructor3
// Array.prototype.customReduce = function (callback, el) {
//   if (el !== undefined) {
//     acc = el;
//   } else {
//     acc = this[0];
//   }
//   for (let i = el; i < this.length; i++) {
//     acc = callback(acc, this[i], i, this);
//   }
//   return acc;
// };
// let array = [1, 2, 3, 4, 5];
// let result = array.customReduce((acc, el) => acc + el, 0);
// console.log(result);

// // Array constructor4
// Array.prototype.customFindIndex = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       return i;
//     }
//   }
//   return `arrayda mavjud bo'lmagan element kiritndingiz`;
// };
// let array = [12, 1, 18, 5];
// let result = array.customFindIndex((el) => el == 18);
// console.log(result);

// // Array constructor5
// Array.prototype.customSplice = function (start, deleteCount, ...rest) {
//   const el = this.slice(start, start + deleteCount);
//   const arr = this.slice(0, start).concat(rest,this.slice(start + deleteCount));
//   this.push(...arr);
//   return el;
// };
// let array = ["apple", "banana", "cherry", "date"];
// let result = array.customSplice(1, 2, "orange", "pear");
// console.log(result);

// Constructor1
// CLASS ///////////
// class Animal {
//   constructor(name, speed, limitAge) {
//     this.name = name;
//     this.speed = speed;
//     this.limitAge = limitAge;
//   }
//   info() {
//     return this.name + "'s speed is " + this.speed + ", max age is " + this.limitAge;
//   }
// }
// let john = new Animal("bobik", 10, 18);
// console.log(john);

// CONSTRUCTOR FUNCTION /////////////////
// function Person(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;
// }

// Person.prototype.info = function () {
//   return (
//     this.name + "'s speed is " + this.speed + ", max age is " + this.limitAge
//   );
// };

// let bobik = new Person("bobik", 10, 18);
// console.log(bobik.info());

// // Constructor2
// class Student {
//   constructor(name, course, years, university) {
//     this.name = name;
//     this.course = course;
//     this.years = years;
//     this.university = university;
//   }
//   leftYears() {
//     let reset = this.years - this.course;
//     return `universitet tugashiga ${reset} yil qoldi`;
//   }
// }
// let bochojon = new Student(`Maqsadjon`, 2, 4, `tuit`);
// console.log(bochojon.leftYears());

// // Constructor3
// class Person {
//   constructor(name, age, currentYear) {
//     this.name = name;
//     this.age = age;
//     this.currentYear = currentYear;
//   }
//   getBirtYear() {
//     return this.currentYear - this.age;
//   }
// }
// let bochojon = new Person(`Maqsadjon`, 19, 2024);
// console.log(bochojon.getBirtYear());

// // Constructor4
// class Epmloyee {
//   constructor(name, salary, workName) {
//     this.name = name;
//     this.salary = salary;
//     this.workName = workName;
//   }
//   increaseSalary(_protcent) {
//     return this.salary * ((100 + _protcent) / 100);
//   }
// }
// let sunnatjon = new Epmloyee("Sunnatjon", 1000000, `developer`);
// console.log(sunnatjon.increaseSalary(20));

// // Constructor5
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
//   getPerimetr() {
//     return 2 * (this.width + this.height);
//   }
// }
// let rectangle = new Rectangle(10, 20);
// console.log(`yuzasi: ` + rectangle.getArea());
// console.log(`perimetri: ` + rectangle.getPerimetr());

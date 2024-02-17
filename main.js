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

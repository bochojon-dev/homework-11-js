// UYGA VAZIFA

// // constructor1
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

// // constructor2
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

// // constructor3
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

// // constructor4
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

// constructor5
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

// constructor6

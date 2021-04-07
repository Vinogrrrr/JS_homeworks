// Задание 1
let a = 47;
let res = (a - a % 10) / 10 + a % 10;
console.log(res);

// Задание 2
a = 5;
let b = 7;
a += b;
b -= a;
a += b;
b *= -1;
console.log(a, b);

// Задание 3
a = 3;
b = 2;
let c = 5;
res = 2 * (a * b + b * c + a * c);
console.log(res);

// задание 4
let start = 10;
let end = 8;
let between = start < end ? end - start : -1;
console.log(between);
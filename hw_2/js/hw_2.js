'use strict'

// задача 1
let count = 96;

if (count <= 100 && count >= 90 && Number.isInteger(count)) {
    console.log("отлично");
} else if (count <= 89 && count >= 60 && Number.isInteger(count)) {
    console.log("хорошо");
} else if (count <= 59 && count >= 40 && Number.isInteger(count)) {
    console.log("удовлетворительно");
} else if (count <= 39 && count >= 0 && Number.isInteger(count)) {
    console.log("попробуй потом");
} else {
    console.log("неверное число");
}

// задача 2
let first = +prompt("Введите первое число");
let second = +prompt("Введите второе число");
let funct = +prompt("Введите номер операции (3-сумма; 5-разность; 7-умножение; 9-деление");
switch (funct) {
    case 3:
        console.log(first + second);
        break;
    case 5:
        console.log(first - second);
        break;
    case 7:
        console.log(first * second);
        break;
    case 3:
        console.log(first / second);
        break;
    default:
        console.log("Ошибка ввода")
        break;
}

// задача 3
let a = Math.floor(Math.random() * 501 + 10);
if (a > 25 && a < 200) {
    console.log("число " + a + " вошло в диапазон");
} else {
    console.log("число " + a + " не вошло в диапазон");
}

// задача 4
let b = 2;
let i = 1;
for (; i <= 20; i++) {
    console.log(b);
    b += 2;
}

// задача 5
let n = 5;
let i1 = 0;
let i2 = 1;
let sum = 0;

for (let k = 1; k <= n - 2; k++) {
    if (k === 1) {
        console.log(0);
        console.log(1);
    }
    sum = i1 + i2;
    i1 = i2
    i2 = sum;
    console.log(sum);
}

// задача 6
a = 3;
b = 2;

for (let y = 1; y <= b; y++) {
    for (let x = 1; x <= a; x++) {
        let xy = x * y;
        console.log(x + " * " + y + " =" + xy);
    }
}


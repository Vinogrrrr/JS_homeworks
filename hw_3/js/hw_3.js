'use strict';

//  задача 1
let a = [23, 56, 75, -90, 123];
let b = [17, 0, -6429, -122];
let c = [19, 86, 55, -3, 900, 0, 0];
let d = [4, 9, -2];
let mult = [a, b, c, d];
for (let i = 0; i < mult.length; i++) {
    for (let k = 0; k < mult[i].length; k++) {
        mult[i][k] += 10;
    }
}
console.log(mult);

// задача 2
let monetka = []
let random = [];
for (let i = 0; i < 7; i++) {
    monetka[i] = Math.floor(Math.random() * 2);
    if (monetka[i] === 0) {
        random[i] = Math.floor(Math.random() * 9999)
    } else {
        random[i] = Math.floor(Math.random() * -9999)
    }
}
console.log(random);
a = random[0];
b = random[0];
let l = 0;
let m = 0;
for (let i = 0; i < 7; i++) {
    if (random[i] > a) {
        a = random[i];
        m = i;
    }
    if (random[i] < b) {
        b = random[i];
        l = i;
    }
}
random[m] = b;
random[l] = a;
console.log(random);

// задача 3
monetka = [];
random = [];
let neg = []
for (let i = 0; i < 7; i++) {
    monetka[i] = Math.floor(Math.random() * 2);
    if (monetka[i] === 0) {
        random[i] = Math.floor(Math.random() * 9999)
    } else {
        random[i] = Math.floor(Math.random() * -9999)
    }
    if (random[i] < 0) {
        neg.push(random.slice(i, i + 1));
    }
}
console.log("исходный массив " + random);
console.log("новый массив " + neg);
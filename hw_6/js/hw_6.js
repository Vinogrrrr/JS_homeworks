'use strict'

// Задание 2

let text = "дом домик домой одомашненный";
let key = "дом";

let cc = text.slice(4, 4 + key.length);
console.log(cc);

let checkKey = (text, key) => {
    let numb = 0;
    let partOfText = 0;
    for (let i = 0; i < text.length - key.length; i++) {
        partOfText = text.slice(i, i + key.length)
        if (partOfText.includes(key)) {
            numb++;
        }
    }
    return numb;
}

console.log(checkKey(text, key));

// Задание 3

text = "а роза упала на лапу Азора";
let palindrome = function (text) {
    text = text.toLowerCase();
    text = text.split(" ");
    text = text.join("");
    text = text.split("");
    let textRev = [];
    for (let i = text.length - 1; i >= 0; i--) {
        textRev.unshift(text[i]);
    }
    text = text.join("");
    textRev = textRev.join("");
    console.log(text);
    console.log(textRev);
    return (text === textRev)
}

console.log(palindrome(text));
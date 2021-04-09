'use strict'

// зачача 7
let num = 100;
let half = 50;
let k = 0;
let n = 0;

while (num > 0) {
    if (half == 50) {
        let init = prompt("Ваше число меньше 50 ?");
        if (init == 1 || init == 'ДА') {
            k = 1;
        } else if (quest == 0 || quest == 'НЕТ') {
            k = 2;
        } else {
            console.log("Я простая машина. В следующий раз вводи нормальный ответ");
            console.log("Игра окончена!");
            break;
        }
    }
    num = Math.ceil(num / 2);
    if (half === 2) {
        let check = prompt("Вы загадали число 1 ?");
        if (check == 1 || check == 'ДА') {
            console.log("Как не оригинально!");
            console.log("Игра окончена!");
            break;
        } else if (check == 0 || check == 'НЕТ') {
            let final = prompt("Тогда Вы загадали число 2 ?");
            if (final == 1 || final == 'ДА') {
                console.log("Победа за мной!");
                console.log("Игра окончена!");
                break;
            } else console.log("Вы обманули меня! Т-800 выслан по Вашему адресу!");
            break;
        } else {
            console.log("Я простая машина. В следующий раз вводи нормальный ответ");
            console.log("Игра окончена!");
            break;
        }
    }
    if (k = 1) {
        num = Math.ceil(num / 2);
        let quest = prompt("Ваше число меньше " + half + " ?");
        if (quest == 1 || quest == 'ДА') {
            num = half;
            k = 1;
        } else if (quest == 0 || quest == 'НЕТ') {
            n = num - half / 2;
            k = 2;
        } else {
            console.log("Я простая машина. В следующий раз вводи нормальный ответ");
            console.log("Игра окончена!");
            break;
        }
    }

    if (k = 2) {
        let quest = prompt("Ваше число больше " + half + " ?");
        if (quest == 1 || quest == 'ДА') {
            num = half;
            k = 2;
        } else if (quest == 0 || quest == 'НЕТ') {
            n = num - half / 2;
            k = 1;
        } else {
            console.log("Я простая машина. В следующий раз вводи нормальный ответ");
            console.log("Игра окончена!");
            break;
        }


    }
    let ask = prompt("Ваше число " + Math.floor(Math.random() * (num + 1)) + " ?");
    if (ask == 1 || ask == 'ДА') {
        console.log("Сначала число в твоей голове, потом коды запуска ракет! Ухаха!");
        break;
    } else if (ask == 0 || ask == 'НЕТ') {
        console.log("Ничего, все ошибаются");
    } else {
        console.log("Я простая машина. В следующий раз вводи нормальный ответ");
        console.log("Игра окончена!");
        break;
    }
}

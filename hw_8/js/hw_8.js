'use strict';

function generateTable(data) {
    let propertyData = [];
    let infoData = [];
    let table = document.createElement("table");
    for (let obj = 0; obj < data.length; obj++) {
        propertyData = Object.keys(data[obj]);
        infoData = Object.values(data[obj]);
        if (obj === 0) {
            let rowHead = document.createElement("tr");
            for (let col of propertyData) {
                let column = document.createElement("th");
                column.innerText = `${col}`;
                rowHead.append(column);
            }
            table.append(rowHead);
            let rowInfo = document.createElement("tr");
            for (let col of infoData) {
                let column = document.createElement("th");
                // column.innerText = `${infoData[col]}`;
                column.innerText = `${col}`;
                rowInfo.append(column);
            }
            table.append(rowInfo);
        } else {
            let rowInfo = document.createElement("tr");
            for (let col of infoData) {
                let column = document.createElement("th");
                column.innerText = `${col}`;
                rowInfo.append(column);
            }
            table.append(rowInfo);
        }
        document.body.append(table)
    }
}


let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

generateTable(articles);
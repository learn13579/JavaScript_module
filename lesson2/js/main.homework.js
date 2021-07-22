// <!--створити масив з:-->
// <!-- - з 5 числових значень-->
// <!-- - з 5 стічкових значень-->
// <!-- - з 5 значень стрічкового, числового та булевого типу-->
// <!-- - та вивести його в консоль-->

let chi = [1, 2, 3, 4, 5];
console.log(chi);

let str = ['one', 'two', 'three', 'four', 'five'];
console.log(str);

let rel = ['1', 'two', true, 4, false];
console.log(rel);

// <!--&#45;&#45; Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль-->
let mas = ['hjk', 'ghf', 'asd', 'okten', 'cvb'];
console.log(mas[3]);

// <!-- - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині-->
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} :  Lorem Ipsum is simply dummy text </div>`)
}

// <!-- - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині-->
let i = ['Lorem', 'Ipsum']
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} What is Lorem Ipsum? </div>`)
}

// <!-- - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.-->
for (let i = 0; i < 20; i++) {
    document.write('<div>Some text</div>')
}

// <!-- - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.-->
for (let i = 0; i < 20; i++) {
    document.write(`<div>index= ${i} Some text</div>`)
}

// <!-- - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.-->
let asd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
console.log(asd);

// <!-- - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.-->
let st = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
console.log(st);

// <!-- - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.-->
let other = ['one', 2, true, 4, 'five', false, 'seven', 'eight', 9, 'ten'];
console.log(other);

// <!-- - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи-->
let bool = [1, '1', 'two', true, 4, false, 2, 'three', 'four', 'five'];
for (let i = 0; i < bool.length; i++) {
    if (typeof bool[i] === 'boolean')
        console.log(bool[i])
}

// <!-- - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи-->
let num = [1, '1', 'two', true, 4, false, 2, 'three', 'four', 'five'];
for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === 'number')
        console.log(num[i])
}

// <!-- - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи-->
let stri = [1, '1', 'two', true, 4, false, 2, 'three', 'four', 'five'];
for (let i = 0; i < stri.length; i++) {
    if (typeof stri[i] === 'string')
        console.log(stri[i])
}

// <!-- - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.-->
let ind = [1, '1', 'two', true, 4, false, 2, 'three', 'four', 'five'];
for (let i = 0; i < ind.length; i++) {
    console.log(ind[i])
}

// <!-- - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write-->
let number = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let j = 0; j < number.length; j++) {
    const numberElement = number[j];
    console.log(j);
    document.write(j)
}

// <!-- - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write-->
let new1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (let n = 0; n < 100; n++) {
    const numberElement = new1[n];
    console.log(n);
    document.write(n)
}

// <!-- - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write-->
let new2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (let v = 0; v < 100; v += 2) {
    const numberElement = new2[v];
    console.log(v);
    document.write(v)
}
// <!-- - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write-->
let new3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (let b = 2; b < 100; b += 2) {
    const numberElement = new3[b];
    console.log(b);
    document.write(b)
}

// <!-- - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write-->
let new4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (let s = 1; s < 100; s += 2) {
    const numberElement = new4[s];
    console.log(s);
    document.write(s);
}

// <!-- - Дано 2 масиви з рівною кількістю об'єктів.-->
// <!--Масиви:-->
// <!--З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .-->
// <!--Записати цей об'єкт в новий масив-->
// <!--Example:-->
// <!--let usersWithCities = [-->
// <!--{-->
// <!--id: 1, // <===-->
// <!--name: 'vasya',-->
// <!--age: 31,-->
// <!--status: false,-->
// <!--address: {-->
// <!--user_id: 1, // <===-->
// <!--country: 'Ukraine',-->
// <!--city: 'Ternopil'-->
// <!--}-->
// <!--// TO BE CONTINUED .....-->

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city
        }
    }
}
console.log(usersWithId);


// let obj ={
//     name:'max'
//  }
// obj.age =12
//
// console.log(obj);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function ran() {
    const res = [];
    for (let i = 0; i < 100; i++) {
        res.push(Math.round(Math.random() * 100))
    }
    return res;
}

// let ran = ran.map(function () {
//
// })

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// let random = (min, max) => {
//     return Math.floor(Math.random() * 100);
// }
// console.log(random(0, 100));
function ran2(min, max) {
    const res = [];
    for (let i = 0; i < 100; i++) {
        res.push(Math.round(Math.random() * (max - min) + min))
    }
    return res;
}

let arr = ran(-12, 100);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr2 = arr.sort(function (num1, num2) {
    return num1 - num2;
});

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let arr3 = arr2.filter(function (elem) {
    return elem % 2 === 0;
});
console.log(arr3);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let ran1 = ran();
let strings = ran1.map(function (item) {
    return `${item}`
});
console.log(strings);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, 'Olia', 'Fhvvvvcbj', 'vhfv@bjvcd', 534645),
    new User(2, 'Kolia', 'Bjkfdfsj', 'hjhfdg@fgg', 656459),
    new User(3, 'Max', 'Fjughfvcvg', 'vmhvjk@bjd', 543578),
    new User(4, 'Jenia', 'Bldfvj', 'hgfdjjg@fjk', 8923749),
    new User(5, 'Ivan', 'Fsdlkj', 'vhfv@bdfjd', 289489334),
    new User(6, 'Nazar', 'Bjkfsj', 'hdjhs@fgdfgg', 457625),
    new User(7, 'Katia', 'Fghfhh', 'vmhjk@bjgsgd', 543578),
    new User(8, 'Solia', 'Cbbnj', 'jsklag@fjssk', 9482937),
    new User(9, 'Oleg', 'Lmdfnff', 'vfmhjk@bjd', 89237489),
    new User(10, 'Nastia', 'Sfhgbg', 'hbkdsg@hdhk', 61897)
];

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
let users2 = users.filter(function (elem) {
    return elem.id % 2 === 0;
}).sort(function (a, b)
{
    return a.id - b.id;
})
console.log(users2);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientsArr = [
    new Client(1, 'Olia', 'Fhvvvvcbj', 'vhfv@bjvcd', 534645, ['bread', 'milk', 'porridge', 'cucumber', 'tomato']),
    new Client(2, 'Kolia', 'Bjkfdfsj', 'hjhfdg@fgg', 656459, ['bread', 'pasta', 'milk', 'potato', 'cucumber']),
    new Client(3, 'Max', 'Fjughfvcvg', 'vmhvjk@bjd', 543578, ['bread', 'pasta', 'porridge', 'potato', 'cucumber', 'tomato']),
    new Client(4, 'Jenia', 'Bldfvj', 'hgfdjjg@fjk', 8923749, ['pasta', 'milk']),
    new Client(5, 'Ivan', 'Fsdlkj', 'vhfv@bdfjd', 289489334, ['bread', 'pasta', 'porridge', 'potato', 'cucumber', 'tomato']),
    new Client(6, 'Nazar', 'Bjkfsj', 'hdjhs@fgdfgg', 457625, ['bread', 'pasta', 'porridge', 'potato', 'tomato']),
    new Client(7, 'Katia', 'Fghfhh', 'vmhjk@bjgsgd', 543578, ['bread']),
    new Client(8, 'Solia', 'Cbbnj', 'jsklag@fjssk', 9482937, ['bread', 'pasta', 'milk', 'porridge', 'potato', 'cucumber', 'tomato']),
    new Client(9, 'Oleg', 'Lmdfnff', 'vfmhjk@bjd', 89237489, ['bread', 'pasta', 'milk', 'cucumber', 'tomato']),
    new Client(10, 'Nastia', 'Sfhgbg', 'hbkdsg@hdhk', 61897, ['bread', 'pasta', 'milk', 'porridge', 'cucumber', 'tomato'])
]

console.log(clientsArr);

let clientsArr2 = clientsArr.sort(function (a, b) {
    return a.order.length - b.order.length;
})
console.log(clientsArr2);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, manufacturer, year, speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    this.drive = function () {
        console.log("їдемо зі швидкістю " + this.speed + " на годину");
    }
    this.info = function () {
        console.log(this.manufacturer + ' ' + this.year + ' ' + this.speed + ' ' + this.engine)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (newDriver) {
        this.driver = newDriver
    }
}


let car1 = new Car('bmv', 'lkj', 2015, 100, 4);
car1.drive();
car1.info('Almost on its own, Tesla has proven that electric vehicles can be desirable, combining outstanding performance and high-tech interiors with usable driving range.');
car1.increaseMaxSpeed(50);
car1.changeYear(2015);
car1.addDriver('Ivan');
console.log(car1);


// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

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

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Avtocar {
    constructor(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }
        drive() {
            console.log("їдемо зі швидкістю " + this.speed + " на годину");
        }
        info() {
            console.log(this.manufacturer + ' ' + this.year + ' ' + this.speed + ' ' + this.engine)
        }
        increaseMaxSpeed(newSpeed) {
            this.speed += newSpeed
        }
        changeYear(newValue) {
            this.year = newValue
        }
        addDriver(newDriver) {
            this.driver = newDriver
        }
}
let car2 = new Car('tesla', 'asdasd', 2021, 120, 5);
car2.drive();
car2.info('Almost on its own, Tesla has proven that electric vehicles can be desirable, combining outstanding performance and high-tech interiors with usable driving range.');
car2.increaseMaxSpeed(150);
car2.changeYear(2021);
car2.addDriver('Vlad');
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.

class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let cinderellas = [
    new Cinderella('Olia', 25, 38),
    new Cinderella('Olivia', 28, 39),
    new Cinderella('Anna', 32, 36),
    new Cinderella('Jenia', 29, 37),
    new Cinderella('Mia', 19, 35),
    new Cinderella('Natalie', 24, 37),
    new Cinderella('Katia', 27, 39),
    new Cinderella('Solia', 31, 38),
    new Cinderella('Sophia', 24, 40),
    new Cinderella('Nastia', 21, 37)
]

console.log(cinderellas);

let cinderellas2 = cinderellas.sort(function (a, b) {
    return a.footsize - b.footsize;
})
console.log(cinderellas2);


class Prince {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let prince = new Prince('Oleg', 32, 36);

for (const cinderella of cinderellas) {
    if (cinderella.footsize === prince.footsize) {
        console.log(cinderella.name + ' ' + prince.name)
    }
}


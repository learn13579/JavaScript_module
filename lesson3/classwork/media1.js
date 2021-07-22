// - створити функцію яка приймає масив та виводить його
function writer(a) {
    document.write(a)
}

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(num1, num2, num3) {
    let minNum = num1;
    if (minNum > num2) {
        minNum = num2;
    }
    if (minNum > num3) {
        minNum = num3;
    }
    console.log(min);
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(num1, num2, num3) {
    let maxNum = num1;
    if (maxNum < num2) {
        manNum = num2;
    }
    if (maxNum < num3) {
        maxNum = num3;
    }
    console.log(max);
}


// - створити функцію яка повертає найбільше число з масиву
function maxMax(array1) {
    let maxNum = array1[0];
    // for (let i = 0; i < array.length; i++) {
    //    if (maxNum <  array[i]) {
    //     maxNum = array[i];
    //    }
    // }
    for (let num of array1) {
        if (maxNum < num) {
            maxNum = num;
        }
    }
    return maxNum;
}

// - створити функцію яка повертає найменьше число з масиву
function minMin(array2) {
    let minNum = array2[0];
       for (let num of array2) {
           if (minNum > num) {
               minNum = num;
           }
       }
    return minNum;
}

let nummmm = [1, 2, 3, 4, 5];
console.log(maxMax(nummmm));
console.log(minMin(nummmm));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(array3) {
    let sum = 0;
    for (let num of array3) {
        sum = sum + num;
        }
    return sum;
}

console.log(sum(nummmm));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function dil(array4) {
    // let sum = 0;
    // for (let num of array) {
    //     sum = sum + num;
    // }
    // return sum/array.length;
    return  sum(array4)/array4.length;
}

console.log(dil(nummmm));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
function ran() {
    const res = [];
    for (let i = 0; i < 100; i++) {
        res.push(Math.round(Math.random() * 100))
    }
    return res;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let user = {name: "Dima", age: 13, model: 'Camry'};
let a = Object.keys(user);
console.log(a);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let user2 = {name: 'Alex', age: 33, model: 'continental'};
let m = Object.values(user2);
console.log(m);

//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
   let mass = ['a', 'b', 'c'];
       for (let i = 1; i < 4; i++) {
           mass.push(1, 2, 3)
       }
console.log(mass);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let mas = [1, 2, 3];
mas.reverse();
console.log(mas);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let mas1 = [1, 2, 3];
mas1.push(4, 5, 6);
console.log(mas1);

//  - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let mas2 = [1, 2, 3];
 mas2.unshift(4, 5, 6);
console.log(mas2);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let sdf = [1, 2, 3, 4, 5];
let sdf2=sdf.slice(3);
console.log(sdf2);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let xcv = [1, 2, 3, 4, 5];
let xcv2=xcv.splice(0, 2,3,4,5);
console.log(xcv2);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let arch = [1, 2, 3, 4, 5];
arch.push('a', 'b', 'c')
console.log(arch);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let masyv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let masyv2 = masyv.filter(function(elem) {
    if (elem % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(masyv2);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let lok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let lok2 = []
for (let i = 0; i < 10; i++) {
    lok2[i] = lok[i];
}
console.log(lok2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = [ 'a', 'b', 'c'];
let  abc1='';
for (let i = 0; i < abc.length; i++){
    abc1 = abc1 + abc[i];
}
console.log(abc1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let abc2 = [ 'a', 'b', 'c'];
let  abc3= '';
let i = 0
while (i < abc2.length){
    abc3 = abc3 + abc2[i];
    i++;
}
console.log(abc3);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc4 = [ 'a', 'b', 'c'];
let abc5 = ''
for (let abc of abc4){
    abc5 = abc5 +abc
}
console.log(abc5)

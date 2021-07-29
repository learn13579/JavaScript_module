const day0 = () => new Promise(resolve => setTimeout(() => {
    resolve('1.  Прокинутись')
    }, Math.random() * 2000))

const day1 = () => new Promise(resolve => setTimeout(() => {
    resolve('2.  Поснідати')
}, Math.random() * 2000))

const day2 = () => new Promise(resolve => setTimeout(() => {
    resolve('3.  Піти в душ')
}, Math.random() * 2000))

const day3 = () => new Promise(resolve => setTimeout(() => {
    resolve('4.  Дочекатись автобус')
}, Math.random() * 2000))

const day4 = () => new Promise(resolve => setTimeout(() => {
    resolve('5.  Навчання в  октені')
}, Math.random() * 2000))

const day5 = () => new Promise(resolve => setTimeout(() => {
    resolve('6.  Пообідати')
}, Math.random() * 2000))

const day6 = () => new Promise(resolve => setTimeout(() => {
    resolve('7.  Виконання практичних завдань')
}, Math.random() * 2000))

const day7 = () => new Promise(resolve => setTimeout(() => {
    resolve('8.  Повернення додому')
}, Math.random() * 2000))

const day8 = () => new Promise(resolve => setTimeout(() => {
    resolve('9.  Піти в душ')
}, Math.random() * 2000))

const day9 = () => new Promise(resolve => setTimeout(() => {
    resolve('10. Сон')
}, Math.random() * 2000))

const start = async () => {
    console.log(await day0());
    console.log(await day1());
    console.log(await day2());
    console.log(await day3());
    console.log(await day4());
    console.log(await day5());
    console.log(await day6());
    console.log(await day7());
    console.log(await day8());
    console.log(await day9());
}

start();
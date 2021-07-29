
function myDay0(cb) {
    setTimeout(() => {
        cb('1.  Прокинутись')
    }, Math.random() * 2000)
}

function myDay1(cb) {
    setTimeout(() => {
        cb('2.  Поснідати')
    }, Math.random() * 2000)
}

function myDay2(cb) {
    setTimeout(() => {
        cb('3.  Піти в душ')
    }, Math.random() * 2000)
}

function myDay3(cb) {
    setTimeout(() => {
        cb('4.  Дочекатись автобус')
    }, Math.random() * 2000)
}

function myDay4(cb) {
    setTimeout(() => {
        cb('5.  Навчання в  октені')
    }, Math.random() * 2000)
}

function myDay5(cb) {
    setTimeout(() => {
        cb('6.  Пообідати')
    }, Math.random() * 2000)
}

function myDay6(cb) {
    setTimeout(() => {
        cb('7.  Виконання практичних завдань')
    }, Math.random() * 2000)
}

function myDay7(cb) {
    setTimeout(() => {
        cb('8.  Повернення додому')
    }, Math.random() * 2000)
}

function myDay8(cb) {
    setTimeout(() => {
        cb('9.  Піти в душ')
    }, Math.random() * 2000)
}

function myDay9(cb) {
    setTimeout(() => {
        cb('10. Сон')
    }, Math.random() * 2000)
}

myDay0((data) => {
    console.log(data)
    myDay1((data) => {
        console.log(data)
        myDay2((data) => {
            console.log(data);
            myDay3((data) => {
                console.log(data);
                myDay4((data) => {
                    console.log(data);
                    myDay5((data) => {
                        console.log(data);
                        myDay6((data) => {
                            console.log(data);
                            myDay7((data) => {
                                console.log(data);
                                myDay8((data) => {
                                    console.log(data);
                                    myDay9((data) => {
                                        console.log(data);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

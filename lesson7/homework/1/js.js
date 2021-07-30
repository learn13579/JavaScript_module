const wakeUp = (en, cb) => {
    setTimeout(() => {
        en -= 300
        if (en <= 0) {
            cb('помер так і не проснувшись')
        } else {
            console.log('ура проснувся');
            cb(null, en)
        }
    }, Math.random() * 2000)
}

const eat = (en, cb) => {
    setTimeout(() => {
        en += 100
        console.log('наївся');
        cb(null, en)
    }, Math.random() * 2000)
}

const goToWork = (en, cb) => {
    setTimeout(() => {
        en -= 500
        if (en <= 0) {
            cb('помер так і не дійшовши до работі')
        } else {
            console.log('на роботі');
            cb(null, en)
        }
    }, Math.random() * 2000)
}

const dinner = (en, cb) => {
    setTimeout(() => {
        en += 500
        console.log('пообідав');
        cb(null, en)
    }, Math.random() * 2000)
}
const goToHome = (en, cb) => {
    setTimeout(() => {
        en -= 500
        if (en <= 0) {
            cb('помер так і не дійшовши до дому')
        } else {
            console.log('дома');
            cb(null, en)
        }
    }, Math.random() * 2000)
}
const sleep = (en, cb) => {
    setTimeout(() => {
        en = 10000
        console.log('заснув');
        cb(null, en)
    }, Math.random() * 2000)
}

wakeUp(1300, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`у меня залишилось  ${data} енергії`);
        eat(data, (err, data2) => {
            console.log(`у меня залишилось ${data2} енергії`);
            goToWork(data2, (err, data3) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(`у меня залишилось ${data3} енергії`);
                    dinner(data3, (err, data) => {
                        console.log(`у меня залишилось ${data} енергії`);
                        goToWork(data, (err, data) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`у меня залишилось ${data} енергії`);
                                goToHome(data, (err, data) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        console.log(`у меня залишилось ${data} енергії`);
                                        sleep(data, (err, data) => {
                                            console.log(`у меня залишилось ${data} енергії`);
                                        })
                                    }
                                })
                            }
                        })
                    })
                }
            })
        })
    }
})
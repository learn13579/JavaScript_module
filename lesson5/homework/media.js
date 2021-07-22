//  - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
    content.innerText = 'Сме́шанные боевы́е иску́сства (также MMA — от англ. Mixed martial arts)   — боевые искусства, представляющие собой сочетание множества техник, школ и направлений единоборств.'


// -- замініть текст параграфа з id 'rules' на будь-який інший
    rules.innerText = 'Современные смешанные боевые искусства имеют свои корни в двух событиях: соревнованиях по вале-тудо. Вале-тудо берёт своё начало в третьем десятилетии XX века, когда представители бразильского джиу-джитсу Карлос Грейси и Хелио Грейси пригласили любого соревноваться с ними в борьбе. Это было так называемым «Вызовом Грейси», который позже поддержали потомки Грейси.'

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let child = document.children;
console.log(child);
for (const childElement of child) {
    childElement.style.background = 'coral';
    childElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let fc_rules = document.getElementsByClassName('fc_rules');
console.log(fc_rules);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
// одна вивдоить текст елементу, інша довільний текст
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const fc_rulesElement of fc_rules) {
    fc_rulesElement.addEventListener('click', function (){
        fc_rulesElement.style.color = 'red';
        fc_rulesElement.innerText = 'Lorem Ipsum is simply dummy text'
        }
    )
    fc_rulesElement.innerText = 'Lorem'
}
const store = JSON.parse(localStorage.getItem('store')) || [];

const contentDiv = document.getElementById('content');

for (const item of store) {
    const itemDiv = document.createElement('div');
    for (let key in item) {
        if (key !== 'img') {
            const field = document.createElement('div');
            field.innerText = `${key}: ${item[key]}`
            itemDiv.appendChild(field)
        }else {
            const img = document.createElement('img');
            img.src = item[key]
            itemDiv.appendChild(img)
        }
    }
    contentDiv.appendChild(itemDiv)
}
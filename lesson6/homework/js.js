
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         let userWrap = document.getElementsByClassName('users-wrap')  [0];
//         for (const user of value) {
//             let div = document.createElement('div');
//
//             let btn = document.createElement('button');
//             btn.innerText = 'details';
//             btn.onclick = function () {
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                     .then(value => value.json())
//                     .then(postsOfUser) => {
//                     let postsBox = document.getElementsByClassName('posts')  [0];
//                     postsBox.innerText = 'https://jsonplaceholder.typicode.com/';
//                     for (const post of postsOfUser) {
//                         let postDiv = document.createElement('div');
//                         postDiv.innerText = post.title;
//                         postsBox.append(postDiv);
//                     };
//                 };
//             };
//         };
//     });
// div.appendChild(btn);


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(arr => {
//         const ul = document.createElement('ul');
//         document.body.appendChild(ul)
//         for (const arrItem of arr) {
//             const li = document.createElement('li');
//             li.innerText = arrItem.name;
//             const button = document.createElement('button');
//             button.innerText = 'Click me';
//             button.onclick = ()=> {
//                 console.log(arrItem.name)
//             }
//             li.appendChild(button)
//             ul.appendChild(li);
//         }
//     })



let userWrap = document.getElementsByClassName('user-wrap')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const valueElement of value) {
            let postCard = document.createElement('div');
            userWrap.appendChild(postCard);

            let postTitle = document.createElement('h2');
            postCard.appendChild(postTitle);

            let postText = document.createElement('p');
            postCard.appendChild(postText);

            postTitle.innerText = valueElement.title;

            postText.innerText = valueElement.body;
        }
    });





let userComents = document.getElementsByClassName('user-coments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const valueElement of value) {
            let coment = document.createElement('div');
            userComents.appendChild(coment);
            coment.innerText = valueElement.body;
        }
    });


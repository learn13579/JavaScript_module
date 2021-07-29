// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

const doFetch = async (url) => {
    const basicURL = 'https://jsonplaceholder.typicode.com';

    const response = await fetch(basicURL + url);
    return response.json();
}

(async () => {
    let usersBlock = document.getElementsByClassName('users')[0];

    const users = await doFetch('/users');
    for (const valueElement of users) {

        let user = document.createElement('div');
        usersBlock.appendChild(user);

        let userName = document.createElement('h3');
        user.appendChild(userName);

        userName.innerHTML = `<hr/>${valueElement.id} ${valueElement.name} ${valueElement.username}<hr/>`;

        let btnPosts = document.createElement('button');
        btnPosts.innerText = 'posts';

        user.append(btnPosts);
        btnPosts.onclick = () => {
            getPosts(valueElement.id, user)
            btnPosts.style = 'display: none';
        };
    }
})()

const getPosts = async (userId, parentElement)  => {
    const posts = await doFetch(`/posts?userId=${userId}`);

    for (const post of posts) {
        let postDiv = document.createElement('div');
        let btnComments = document.createElement('button');
        postDiv.innerHTML = `<b>${post.id}. ${post.body}</b>`;
        btnComments.innerText = 'comments';
        postDiv.append(btnComments);
        parentElement.append(postDiv);

        btnComments.onclick = () => {
            getComments(post.id, postDiv);
            btnComments.style = 'display: none';
        }
    }
}

const getComments = async (postId, parentElement) => {
    const comments = await doFetch(`/posts/${postId}/comments`);

    for (const comment of comments) {
        let commentDiv = document.createElement('div');
        commentDiv.innerHTML = `<hr/>${comment.id}. ${comment.body}<hr/>`;
        parentElement.append(commentDiv);
    }
}




//
// let users = document.getElementsByClassName('users')[0];
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         for (const valueElement of value) {
//
//             let user = document.createElement('div');
//             users.appendChild(user);
//
//             let userName = document.createElement('h3');
//             user.appendChild(userName);
//
//             userName.innerText = valueElement.id + " " + valueElement.name + " " + valueElement.username;
//
//             let btnPosts = document.createElement('button');
//             let btnComments = document.createElement('button');
//             btnPosts.innerText = 'posts';
//
//             user.append(btnPosts);
//             btnPosts.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts?userId=${valueElement.id}`)
//                     .then(value => value.json())
//                     .then(posts => {
//                         for (const post of posts) {
//                             let postDiv = document.createElement('div');
//                             postDiv.innerText = post.body;
//                             btnComments.innerText = 'comments';
//                             user.append(postDiv, btnComments);
//                             btnComments.onclick = () => {
//                                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                                     .then(value => value.json())
//                                     .then(comments => {
//                                         for (const comment of comments) {
//                                             let commentDiv = document.createElement('div');
//                                             commentDiv.innerText = comment.body;
//                                             user.append(commentDiv);
//                                         }
//                                     });
//                             }
//                         }
//                     });
//             }
//         }
//     });
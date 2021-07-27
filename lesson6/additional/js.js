// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let users = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const valueElement of value) {

            let user = document.createElement('div');
            users.appendChild(user);

            let userName = document.createElement('h3');
            user.appendChild(userName);

            userName.innerText =valueElement.id + " " + valueElement.name + " " + valueElement.username;

            let btnPosts = document.createElement('button');
            let btnComments = document.createElement('button');
            btnPosts.innerText = 'posts';
            btnComments.innerText = 'comments';
            user.append(btnPosts, btnComments);
            btnPosts.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${value.userId}`)
                    .then(value => value.json())
                    .then(value => {
                        let commentsBox = document.getElementsByClassName('comments')[0];
                        commentsBox.innerText = valueElement.body;
                        for (const commentsBox1 of commentsBox) {
                            
                        } 
                        // for (const commentItem of commentsBox) {
                        //     let commentDiv = document.createElement('div')[0];
                        //     commentDiv.innerText = valueElement.body;
                        //     user.append(commentDiv);
                        // }
                    });
            };






        }
    });
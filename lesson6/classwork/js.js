// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let posts = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (const valueElement of value) {

            let post = document.createElement('div');
            posts.appendChild(post);

            let postIdTitle = document.createElement('h4');
            let postText = document.createElement('p');
            post.append(postIdTitle, postText);

            postIdTitle.innerText = valueElement.id + " " + valueElement.title;
            postText.innerText = valueElement.body;

            let btn = document.createElement('button');
            btn.innerText = 'comments';
            post.append(btn);
            btn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${valueElement.id}`)
                    .then(value => value.json())
                    .then(value => {
                        for (const comment of value) {
                            let commentDiv = document.createElement('div');
                                commentDiv.innerText = comment.body;
                            post.append(commentDiv);
                        }
                });
            };
        }
    });

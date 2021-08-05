const url = new URL(location);
const JOSONUser = url.searchParams.get('post');
const post = JSON.parse(JOSONUser);

const posts = document.getElementsByClassName('posts')[0];
// console.log(post.id);

// div для постів
let postUser = document.createElement('div');
postUser.classList.add('postUser');
posts.appendChild(postUser);

let h = document.createElement('h3');
h.innerText = `${post.title}`;
let p = document.createElement('p');
p.innerText = `${post.body}`;
postUser.append(h, p);

// div для коментарів
let commentsUser = document.createElement('div');
commentsUser.classList.add('commentsUser');
posts.appendChild(commentsUser);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let divComment = document.createElement('div');
            divComment.classList.add('divComment');
            commentsUser.appendChild(divComment);

            let postId = document.createElement('h3');
            postId.innerText = `Comment Id: ${valueElement.id}`;

            let emailUser = document.createElement('h4');
            emailUser.innerText = `email user: ${valueElement.email}`;

            let comBody = document.createElement('p');
            comBody.innerText = `Comment: ${valueElement.body}`;

            divComment.append(postId, emailUser, comBody);
        }
    });
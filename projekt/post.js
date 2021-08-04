const url = new URL(location);
const JOSONUser = url.searchParams.get('post');
const post = JSON.parse(JOSONUser);

const posts = document.getElementsByClassName('posts')[0];

// div для постів
let postUser = document.createElement('div');
postUser.classList.add('postUser');
posts.appendChild(postUser);
let h = document.createElement('h3');
h.innerText = `${user.title}`;
let p = document.createElement('p');
p.innerText = `${user.body}`;
postUser.append(h, p);

// div для коментарів
let commentsUser = document.createElement('div');
commentsUser.classList.add('commentsUser');
posts.appendChild(commentsUser);

fetch(`https://jsonplaceholder.typicode.com/posts/${posts.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let postId = document.createElement("h3");
            postId.innerText = `Post Id: ${posts.id}`;

            let emailUser = document.createElement("h3");
            emailUser.innerText = `email: ${posts.email}  `;

            let comBody = document.createElement("p");
            // comBody.innerText = valueElement.body;
            comBody.innerText = `comment: ${posts.body}`;

            commentsUser.append(postId, emailUser, comBody);
        }
    });


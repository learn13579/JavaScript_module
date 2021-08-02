const usersCom = document.getElementsByClassName('users')[0];

fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(value => value.json())
    .then(posts => {
        console.log(posts);
        for (const user of users) {
            const userC = document.createElement('div');
            usersCom.append(userC);

            const btnPostTitle = document.createElement('button');
            btnPostTitle.innerText = 'post of current user';
            btnPostTitle.classList.add('btnPost');
            usersCom.append(btnPostTitle);
            btnPostTitle.onclick = `${user.title}`;

            const btnPost = document.createElement('button');
            btnPost.innerText = 'read the post';
            btnPost.classList.add('btnPost');
            usersCom.append(btnPost);
            btnPost.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${users.id}`)
                    .then(value => value.json())
                    .then(details => {
                        for (const detail of details) {
                            let detailsDiv = document.createElement('div');
                            btnPost.href = `post-details.html?user=${JSON.stringify(user)}`
                        }
                    });
            }
        }
    });


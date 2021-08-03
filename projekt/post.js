const doFetch = async (url) => {
    const basicURL = 'https://jsonplaceholder.typicode.com';

    const response = await fetch(basicURL + url);
    return response.json();
}

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
const url = new URL(location);
const JOSONUser = url.searchParams.get('user');
const user = JSON.parse(JOSONUser);


const usersCom = document.getElementsByClassName('users')[0];
let info = document.createElement("div");
info.classList.add('user');
usersCom.appendChild(info);

let h = document.createElement("h3");
h.innerText = `${user.id} ${user.name}   ${user.username} `;

let p = document.createElement("p");
p.innerText = `Email: ${user.email}, phone: ${user.phone},  website:  ${user.website}`;

let p2 = document.createElement("p");
p2.innerText = `Address: city: ${user.address.city}, street:  ${user.address.street}, suite: ${user.address.suite}, zipcode: ${user.address.zipcode}, GEO:  latitude:  ${user.address.geo.lat}, longitude:  ${user.address.geo.lng}`;

let p3 = document.createElement("p");
p3.innerText = `Company:  Name company: ${user.company.name}, Catch phrase: ${user.company.catchPhrase}, bs:${user.company.bs}`

info.append(h, p, p2, p3);


let btnPostTitle = document.createElement("button");
usersCom.appendChild(btnPostTitle);
btnPostTitle.innerText = 'post of current user';
btnPostTitle.classList.add('btnPostTittle');

let usersPostAll = document.createElement('div');
btnPostTitle.appendChild(usersPostAll);
usersPostAll.classList.add('usersPostAll');


btnPostTitle.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const valueElement of value) {

                let titlePosts = document.createElement("div");
                titlePosts.classList.add('titlePosts');
                usersPostAll.appendChild(titlePosts);

                let pPost = document.createElement('p');
                pPost.innerText = valueElement.title;

                let detailsDiv = document.createElement('div');
                detailsDiv.classList.add('detailsDiv');

                let aPost = document.createElement('a');
                aPost.classList.add('btnPost');
                aPost.innerText = 'read the post';

                titlePosts.append(pPost, detailsDiv, aPost);

                fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`)
                    .then(value => value.json())
                    .then(details => {
                        for (const detail of details) {
                            aPost.href = `post-details.html?post=${JSON.stringify(detail)}`
                        }
                    });
            }
        });
};





const url = new URL(location);
const JOSONUser = url.searchParams.get('user');
const user = JSON.parse(JOSONUser);
// console.log(user);


// document.body.innerText = `${user.id} ${user.name} ${user.username} .  Email: ${user.email}, address: ${user.address.street}${user.address.suite}${user.address.city}${user.address.zipcode}, GEO: latitude: ${user.address.geo.lat} longitude: ${user.address.geo.lng} ${user.phone}${user.website}${user.company} `;

// document.body.innerHTML = `<div class="user">
//     <h3> ${user.id} ${user.name}   ${user.username}  </h3>
//
//     <p> <b>Email:</b>  ${user.email} </br>
//     <b>phone:</b>  ${user.phone}</br>
//     <b>website:</b>  ${user.website}
//     </p>
//
//     <p>
//     <b>Address:
//     </br> street:</b>  ${user.address.street},
//     <b>suite:</b> ${user.address.suite}, <b>city:</b> ${user.address.city}, <b>zipcode:</b> ${user.address.zipcode},</br>
//     <b>GEO:</b>   latitude:  ${user.address.geo.lat}, longitude:  ${user.address.geo.lng}
//     </p>
//     <p> <b>Company:</b> </br>   <b>Name company:</b>${user.company.name} </br> <b>Catch phrase:</b> ${user.company.catchPhrase} </br> <b>bs:</b> ${user.company.bs}
//     </p>
//     </div>`;

const usersCom = document.getElementsByClassName('users')[0];
let info = document.createElement("div");
info.classList.add('user');
usersCom .appendChild(info);

let h = document.createElement("h3");
info.appendChild(h);
h.innerText = `${user.id} ${user.name}   ${user.username} `;

let p = document.createElement("p");
info.appendChild(p);
p.innerText = `Email: ${user.email}, phone: ${user.phone},  website:  ${user.website}`;

let p2 = document.createElement("p");
info.appendChild(p2);
p2.innerText = `Address: city: ${user.address.city}, street:  ${user.address.street}, suite: ${user.address.suite}, zipcode: ${user.address.zipcode}, GEO:  latitude:  ${user.address.geo.lat}, longitude:  ${user.address.geo.lng}`;

let p3 = document.createElement("p");
info.appendChild(p3);
p3.innerText = `Company:  Name company: ${user.company.name}, Catch phrase: ${user.company.catchPhrase}, bs:${user.company.bs}`


// const usersCom = document.createElement('div')[0];
let btnPostTitle=document.createElement("button");
usersCom.appendChild(btnPostTitle);
btnPostTitle.innerText = 'post of current user';
btnPostTitle.classList.add('btnPostTittle');

// дів для постів
let usersPostAll = document.createElement('div');
btnPostTitle.appendChild(usersPostAll);
usersPostAll.classList.add('usersPostAll');

// let btnPostTitle = document.getElementsByClassName('btnPostTittle')[0];

   btnPostTitle.onclick = ()  => {
    fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`)
        .then(value => value.json())
        .then( value=> {
            for (const valueElement of value) {

                let titlePosts = document.createElement("div");
                titlePosts.classList.add('titlePosts');
                usersPostAll.appendChild(titlePosts);

                let pPost = document.createElement('p');
                pPost.innerText = valueElement.title;
                titlePosts.appendChild(pPost);

                let btnPost = document.createElement('button');
                btnPost.classList.add('btnPost');
                titlePosts.appendChild(btnPost);
                btnPost.innerText = 'read the post';

                btnPost.onclick= () => {
                fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`)
                    .then(value => value.json())
                    .then(details => {
                        for (const detail of details) {
                            let detailsDiv = document.createElement('div');
                            titlePosts.appendChild(detailsDiv);
                            detailsDiv.classList.add('detailsDiv');
                            detailsDiv.innerText = detail.body;
                            btnPost.href = `post-details.html?user=${JSON.stringify(details)}`
                            // titlePosts.appendChild(btnPost);
                        }
                    });
            }
            }
        });
};

// const usersCom = document.getElementsByClassName('users')[0];

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json())
//     .then(posts => {
//         console.log(posts);
//         for (const post of posts) {
//             const userC = document.createElement('div');
//             usersCom.appendChild(userC);
//

//             const btnPost = document.createElement('button');
//             btnPost.innerText = 'read the post';
//             btnPost.classList.add('btnPost');
//             usersCom.append(btnPost);
//             btnPost.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/users/${users.id}`)
//                     .then(value => value.json())
//                     .then(details => {
//                         for (const detail of details) {
//                             let detailsDiv = document.createElement('div');
//                             btnPost.href = `post-details.html?user=${JSON.stringify(user)}`
//                         }
//                     });
//             }
//         }
//     });




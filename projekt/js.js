let usersN = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        console.log(users);
        for (const user of users) {
            let userOl = document.createElement('div');
            usersN.appendChild(userOl);
            userOl.classList.add('userOl');

            let userName = document.createElement('div');
            userOl.appendChild(userName);
            userName.classList.add('nameUser');
            userName.innerText = `${user.id}. ${user.name} ${user.username}`;

            let btnDetails = document.createElement('button');
            btnDetails.classList.add('btnDetails');
            userOl.append(btnDetails);

            let detailsLink= document.createElement('a');
            detailsLink.innerText = 'details';
            detailsLink.href =`user-details.html?user=${JSON.stringify(user)}`;
            btnDetails.appendChild(detailsLink);
        }
    });

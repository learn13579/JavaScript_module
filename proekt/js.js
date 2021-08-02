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
            // btnDetails.innerText = 'details';
            btnDetails.classList.add('btnDetails');
            userOl.append(btnDetails);

            let a = document.createElement('a');
            a.innerText = 'details';
            btnDetails.appendChild(a);
            a.href =`user-details.html?user=${JSON.stringify(user)}`;

        }
    });



function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user.email);
        const li = document.createElement('li');
        li.innerText = `name : ${user.name} \n email : ${user.email}`;
        ul.appendChild(li);
    }
}
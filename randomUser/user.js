const loadUser = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUser(data))
}
// loadUser();
const displayUser = results => {
    const userDiv = document.getElementById('load');
    results.results.forEach(result => {
        console.log(result);
        const div = document.createElement('div');
        div.classList.add('User');
        div.innerHTML = `
        <img width="200px" src="${result.picture.large}">
        <h5> ${result.name.first} ${result.name.last}</h5>

        `;
        userDiv.appendChild(div);
    })

}
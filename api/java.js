const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name.common);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
<h3>${country.name.common}</h3>
<p3>${country.capital}</p3>
<button onclick="loadDetail('${country.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });
}

const loadDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDtail(data[0]))
}
const displayCountryDtail = country => {
    const countryDiv = document.getElementById('countryDetail');
    console.log(country)
    countryDiv.innerHTML = `
    <h5>${country.name.common}</h5 >
    <p>population:${country.population}</p>
    <img  width="200px" src="${country.flags.svg}">
        `
}
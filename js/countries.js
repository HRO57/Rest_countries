const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);

    const countriesHTML = countries.map(country => getCountriesHTML(country));
    console.log(countriesHTML[0]);

    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join('');
}

// const getCountriesHTML = country => {
//     return `
//         <div class-"country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }

// ---------- destructuring &  and send data to html elements using props -------
const getCountriesHTML = ({ name, flags, area, region }) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area:${area}</p>
            <p>Continet:${region}</p>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();
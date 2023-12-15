const { npsUrl, apiKey } = require('../../config/connection');

const searchFormHandler = async (event) => {
    event.preventDefault();
    const searchState = document.querySelector('#search-state').value.trim();

    try {
        const response = await fetch(`/api/search/${searchState}`);
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/search');
        } else {
            alert(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}

document
    .querySelector('.search-form')
    .addEventListener('submit', searchFormHandler);

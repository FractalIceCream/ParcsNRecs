// const { npsUrl, apiKey } = require('../../config/connection');

// const { get_by_StateCode } = require('../../utils/helpers');


const searchFormHandler = async (event) => {
    event.preventDefault();
    const searchState = document.querySelector('#search-state').value.trim();

    try {
        // const data = await get_by_StateCode(searchState);
        
        const response = await fetch(`/search/${searchState}`);
        if (response.ok) {
            // If successful, redirect the browser to the search page
            document.location.replace(`/search/${searchState}`);
        } else {
            alert(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}
let searchBtnEl = document.querySelector('.search-form');
searchBtnEl.addEventListener('click', searchFormHandler);

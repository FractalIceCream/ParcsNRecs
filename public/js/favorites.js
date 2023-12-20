const addFavoritesHandler = async (event) => {
    event.preventDefault();
    // event.stopPropagation();
    // const searchState = document.querySelector('#add-favorites').value;

    try {
        // const data = await get_by_StateCode(searchState);
        const card = event.target;
        // console.log(card);
        const park_code = card.getAttribute('data-parkCode');
        const name = card.getAttribute('data-name');
        // console.log(parkCode);

        // const getUser = await fetch(`/api/user/`)
        const response = await fetch(`/api/parks`, {
            method: 'POST',
            body: JSON.stringify({ park_code, name }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            console.log('added parks');
        } else {
            alert(response.statusText);
        }

        // const userParks = await fetch('/api/userParks', {
        //     method: 'POST',
        //     body: JSON.stringify({})
        // });

        // const response = await fetch(`/search/${searchState}`);
        // if (response.ok) {
        //     // If successful, redirect the browser to the search page
        //     document.location.replace(`/search/${searchState}`);
        // } else {
        //     alert(response.statusText);
        // }
    } catch (error) {
        console.log(error);
    }
}
let addFavoritesBtnEl = document.querySelectorAll('.add-favorites');
addFavoritesBtnEl.forEach((btn) => btn.addEventListener('click', addFavoritesHandler));
const delFavoritesHandler = async (event) => {
  event.preventDefault();

  try {
    
    //get data-attribute parkCode
    const card = event.target;
    const park_code = card.getAttribute('data-parkCode');

    //delete request from api with park_code
    const response = await fetch(`/api/users/parks/${park_code}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('deleted park');
      document.location.replace('/profile'); //reload profile page
    } else {
      alert(response.statusText);
    }

  } catch (error) {
    console.log(error);
  }
}

//ensure buttons with delete-favorites class include event listener
let delFavoritesBtnEl = document.querySelectorAll('.delete-favorites');
delFavoritesBtnEl.forEach((btn) => btn.addEventListener('click', delFavoritesHandler));

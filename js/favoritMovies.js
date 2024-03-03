function getAllMovieTitles() {
  // const $movieTitleElements = document.querySelectorAll('.movieTitle');
  const $movieTitleElements = document.querySelectorAll('.movieTitle');
  const movieTitles = Array.from($movieTitleElements).map((titleElement) => titleElement.textContent);

  return movieTitles;
}

const titles = getAllMovieTitles();

const $favoriteMovies = document.querySelector('#favoriteMovies');
$favoriteMovies.innerHTML = titles
  .map((title) => `<li><input type='checkbox' class='favoriteMovieInput'/><label>${title}</label><li>`)
  .join('\n');

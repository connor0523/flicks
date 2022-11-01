//API "http://www.omdbapi.com/?i=tt3896198&apikey=f7efe69"

async function main() {
  const searchTerm = document.getElementById('input_id').value
  const movies = await fetch(`https://www.omdbapi.com/?apikey=f7efe69&s=${searchTerm}`);
  const moviesData = await movies.json();
  const moviesListEL = document.querySelector(".movies");
  moviesListEL.innerHTML = moviesData.Search.map((movie) =>movieHTML(movie)).join("");
}

document.getElementById('searchBtn').addEventListener('click', main)
document.getElementById('form').addEventListener('submit', e => e.preventDefault())


function movieHTML(movie) {
  return `<div class="movies">
  <div class="movie">
       <div class="movie__img--wrapper">
          <img class="poster" src="${movie.Poster}" alt="">
      </div>
  </div> 
</div>`
}



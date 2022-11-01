//API "http://www.omdbapi.com/?i=tt3896198&apikey=f7efe69"

async function main() {
  const movies = await fetch(`https://www.omdbapi.com/?apikey=f7efe69&s=fast`);
  const moviesData = await movies.json();
  const moviesListEL = document.querySelector(".movies");
  moviesListEL.innerHTML = moviesData.Search.map((movie) =>movieHTML(movie)).join("");
}

main();


function movieHTML(movie) {
  return `<div class="movies">
  <div class="movie">
       <div class="movie__img--wrapper">
          <img class="poster" src="${movie.Poster}" alt="">
      </div>
  </div> 
</div>`
}



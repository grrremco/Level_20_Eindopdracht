const addMovies = (Movies) => {
    
  const Ulist = document.getElementById("ulMovies");
  Ulist.innerHTML = "";
    
  Movies.forEach((movie) => {
    const Ulist = document.getElementById("ulMovies");
    const li = document.createElement("li");
    const movieImage = document.createElement("img");
    const movieLink = document.createElement("a");
    const movieTitle = document.createElement("div");
    const movieYear = document.createElement("div");
    movieTitle.classList.add("movieTitle");
    movieYear.classList.add("movieYear");
    movieLink.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
    movieLink.setAttribute("target", "_blank");
    movieImage.setAttribute("src", movie.Poster);
    movieTitle.appendChild(document.createTextNode(movie.Title));
    movieYear.appendChild(document.createTextNode(movie.Year));
    li.appendChild(movieLink);
    Ulist.appendChild(li);
    li.appendChild(movieTitle);
    li.appendChild(movieYear);
    movieLink.appendChild(movieImage);
  });
};
  
  
addMovies(movies);
  
  
const inputM = document.getElementsByName("filter_input");
inputM.forEach((radioB) => {
  radioB.addEventListener("change", (event) => {
    switch (event.target.value) {
      case "allmovies":
        addMovies(movies);
        break;
      case "latest":
        filterLatestMovies();
        break;
      case "xmen":
        filterMovies("X-Men");
        break;
      case "princess":
        filterMovies("Princess");
        break;
      case "batman":
        filterMovies("Batman");
        break;
      case "avengers":
        filterMovies("Avengers");
        break;
    }
  });
});
  
  
const filterMovies = (filteredMovie) => {
  const filtered = movies.filter((movie) => movie.Title.includes(filteredMovie));
  addMovies(filtered);
};
  
  
const filterLatestMovies = () => {
  const filteredLatest = movies.filter((movie) => movie.Year >= 2014);
  addMovies(filteredLatest);
};
  
  
const searchField = document.getElementById("searchInput");
  
searchField.addEventListener("keyup", (e) => {
  const inputField = e.target.value.toLowerCase();
  const movieSearch = movies.filter((movie) => {
  return movie.Title.toLowerCase().includes(inputField);
  });
  addMovies(movieSearch);
});
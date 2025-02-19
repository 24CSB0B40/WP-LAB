let movieList = [];
const movieInput = document.getElementById("movie-input");
const addMovieButton = document.getElementById("add-movie-btn");
const movieListElement = document.getElementById("movie-list");
const clearListButton = document.getElementById("clear-list-btn");
const totalMoviesElement = document.getElementById("total-movies");

function updateMovieList()
 {
    movieListElement.innerHTML = "";
    movieList.forEach((movie, index) => 
    {
        const li = document.createElement("li");
        li.textContent = movie;
        li.addEventListener("click", () =>
        {
            removeMovie(index);
        });
        movieListElement.appendChild(li);
    });
    totalMoviesElement.textContent = `Total Movies: ${movieList.length}`;
}

function addMovie()
 {
    const movieName = movieInput.value.trim();
    if (movieName === "")
    {
        alert("Please enter a movie name!");
        return;
    }
    movieList.push(movieName);
    movieInput.value = "";
    updateMovieList();
}

function removeMovie(index)
 {
    movieList.splice(index, 1);
    updateMovieList();
}
function clearList()
 {
    movieList = [];
    updateMovieList();
}

addMovieButton.addEventListener("click", addMovie);
clearListButton.addEventListener("click", clearList);

updateMovieList();
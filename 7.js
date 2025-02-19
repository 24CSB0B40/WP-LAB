let movieList = [];


const movieInput = document.getElementById("movie-input");
const addMovieButton = document.getElementById("add-movie-btn");
const movieListElement = document.getElementById("movie-list");
const clearListButton = document.getElementById("clear-list-btn");
const totalMoviesElement = document.getElementById("total-movies");

// Function to update the movie list UI
function updateMovieList() {
    // Clear the current movie list
    movieListElement.innerHTML = "";

    // Loop through the movieList array and create list items
    movieList.forEach((movie, index) => {
        const li = document.createElement("li");
        li.textContent = movie;

        // Allow users to remove a movie by clicking on it
        li.addEventListener("click", () => {
            removeMovie(index);
        });

        // Append the movie item to the list
        movieListElement.appendChild(li);
    });

    // Update the total number of movies
    totalMoviesElement.textContent = `Total Movies: ${movieList.length}`;
}

// Function to add a movie to the list
function addMovie() {
    const movieName = movieInput.value.trim();

    // Prevent adding empty inputs
    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }

    // Add the movie to the array
    movieList.push(movieName);

    // Clear the input field
    movieInput.value = "";

    // Update the movie list UI
    updateMovieList();
}

// Function to remove a movie from the list
function removeMovie(index) {
    // Remove the movie from the array
    movieList.splice(index, 1);

    // Update the movie list UI
    updateMovieList();
}

// Function to clear the entire movie list
function clearList() {
    // Empty the movieList array
    movieList = [];

    // Update the movie list UI
    updateMovieList();
}

// Add event listener to the "Add Movie" button
addMovieButton.addEventListener("click", addMovie);

// Add event listener to the "Clear List" button
clearListButton.addEventListener("click", clearList);

// Initial call to update the movie list (in case there are already some movies)
updateMovieList();
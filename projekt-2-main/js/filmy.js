

const movieSelect = document.getElementById("movie-select");

async function loadMovies(selectedCategory) {

    const moviesResponse = await fetch(`https://api.tvmaze.com/search/shows?q=${selectedCategory}`)

    const moviesData = await moviesResponse.json();

    const moviesListSection = document.getElementById("movies-list");

    moviesListSection.innerHTML = "";

    moviesData.forEach(function (movieItem) {
        const movieLink= document.createElement("a");
        movieLink.href = movieItem.show.url;
        movieLink.target = "_blank";
        const movieImg = document.createElement("img");

        if (movieItem.show.image == null) {
           movieImg.src = "https://placehold.co/210x295"
        } else {
            movieImg.src = movieItem.show.image.medium;
        }

        movieImg.alt = movieItem.show.name;
        movieLink.appendChild(movieImg);
        moviesListSection.appendChild(movieLink);
    });


}

loadMovies("girl");

movieSelect.addEventListener("change", async function (event) {
    const selectedCategory = event.target.value;
    loadMovies(selectedCategory);
})

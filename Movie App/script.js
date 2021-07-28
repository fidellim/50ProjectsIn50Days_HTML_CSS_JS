const API_KEY = "716f9955b88863a1b42c601755de830a";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.querySelector("#main");

const getMovies = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	updateMovies(data.results);
};

const updateMovies = (movies) => {
	main.innerHTML = "";

	movies
		.sort((a, b) => {
			return b.vote_average - a.vote_average;
		})
		.forEach((movie) => {
			const { title, vote_average, overview, poster_path } = movie;

			const movieEl = document.createElement("div");
			movieEl.classList.add("movie");

			movieEl.innerHTML = `
                <img class="movie__img" src=${
									IMG_PATH + poster_path
								} alt=${title}>
                <div class="movieInfo">
                    <h3 id="movieInfo__title">${title}</h3>
                    <span class="movieInfo__rating ${getRating(
											vote_average
										)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3 class="overview__title">Overview</h3>
                    <p class="overview__desc">
                        ${overview}
                    </p>
                </div>
        `;

			main.appendChild(movieEl);
		});
};

const getRating = (rating) => {
	return rating >= 8 ? "green" : rating >= 5 ? "orange" : "red";
};

getMovies(API_URL);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const searchedMovie = search.value;

	if (searchedMovie.trim() !== "") {
		getMovies(SEARCH_URL + searchedMovie);
		search.value = "";
	} else {
		window.location.reload();
	}
});

const joke = document.querySelector(".card__joke");
const jokeBtn = document.querySelector(".btn");

const displayJoke = async () => {
	const headerAPI = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch("https://icanhazdadjoke.com", headerAPI);
	const data = await res.json();
	joke.innerText = data.joke;
};

displayJoke();

jokeBtn.addEventListener("click", () => displayJoke());

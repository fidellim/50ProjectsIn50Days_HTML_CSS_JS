const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;

function generateImages() {
	for (let i = 0; i < rows * 3; i++) {
		const img = document.createElement("img");
		img.src = `${unsplashURL}${getRandomSize()}`;
		container.appendChild(img);
	}
}

function getRandomSize() {
	return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
	return Math.floor(Math.random() * 10) + 300;
}

btn.addEventListener("click", () => {
	container.replaceChildren();
	generateImages();
});

generateImages();

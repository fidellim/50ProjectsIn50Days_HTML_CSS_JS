const container = document.getElementById("container");
const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	square.addEventListener("mouseover", () => {
		setColor(square);
	});

	square.addEventListener("mouseout", () => {
		removeColor(square);
	});

	container.appendChild(square);
}

function setColor(elem) {
	const color = getRandomColor();
	elem.style.background = color;
	elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
	elem.style.background = "#1d1d1d";
	elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

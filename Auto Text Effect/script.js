const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "we love programming";

let idx = 1;
let speed = 300 / speedEl.value;

speedEl.addEventListener("keypress", (e) => {
	if (e.code === "Enter") {
		if (speedEl.value < 1) {
			speed = 300;
		} else {
			speed = 300 / speedEl.value;
		}
	}
});

const writeText = () => {
	textEl.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}
	setTimeout(writeText, speed);
};

writeText();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const clear = document.getElementById("clear");
const colorEl = document.getElementById("color");

let size = 20;
let color = "black";
let x;
let y;
let isPressed = false;
sizeEl.value = size;
colorEl.value = color;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

colorEl.addEventListener("input", (e) => {
	color = e.target.value;
});

clear.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

sizeEl.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		if (e.target.value > 0 && e.target.value < 21) {
			sizeEl.innerText = e.target.value;
			size = e.target.value;
		}
	}
});

sizeEl.addEventListener("change", (e) => {
	if (e.target.value > 0 && e.target.value < 21) {
		sizeEl.innerText = e.target.value;
		size = e.target.value;
	}
});

decrease.addEventListener("click", () => {
	if (size !== 0) {
		size--;
		sizeEl.value = size;
	}
});

increase.addEventListener("click", () => {
	if (size !== 20) {
		size++;
		sizeEl.value = size;
	}
});

canvas.addEventListener("mousedown", (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
	isPressed = false;

	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

const drawCircle = (x, y) => {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2, false);
	ctx.fillStyle = color;
	ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
};

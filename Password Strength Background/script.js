const password = document.getElementById("password");
const background = document.getElementById("background");
let blur = 20;

password.addEventListener("input", (e) => {
	const input = e.target.value;
	const length = input.length;
	const blueValue = blur - length * 2;

	background.style.filter = `blur(${blueValue}px)`;
});

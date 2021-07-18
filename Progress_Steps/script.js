const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeCircle = 1;

prev.addEventListener("click", () => {
	activeCircle--;
	update();
});

next.addEventListener("click", () => {
	activeCircle++;
	update();
});

const update = () => {
	//update circles
	circles.forEach((circle, idx) => {
		if (idx < activeCircle) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	// update progress bar
	const actives = document.querySelectorAll(".active");
	const progressWidth = ((actives.length - 1) / (circles.length - 1)) * 100;
	progress.style.width = `${progressWidth}%`;

	if (activeCircle === 1) {
		prev.disabled = true;
	} else if (activeCircle === 4) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
};

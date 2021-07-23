const boxes = document.querySelectorAll(".box");

const checkBox = () => {
	const screenHeight = window.innerHeight;

	boxes.forEach((box) => {
		// top pos of box relative to the viewport
		const boxPosTop = box.getBoundingClientRect().top;

		// show box if it is within the height of viewport
		if (boxPosTop < screenHeight) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
};

checkBox(); //run first time
window.addEventListener("scroll", checkBox);

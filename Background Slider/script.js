const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 1;

const color = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))";

const setBgImg = () => {
	body.style.background = `${color}, ${slides[activeSlide].style.backgroundImage}`;
};

const setActiveSlide = () => {
	slides.forEach((slide) => slide.classList.remove("active"));
	slides[activeSlide].classList.add("active");
};

rightBtn.addEventListener("click", () => {
	if (activeSlide === slides.length - 1) {
		activeSlide = slides.length - 1;
		rightBtn.disabled = true;
	} else {
		activeSlide++;
		leftBtn.disabled = false;
	}

	setBgImg();
	setActiveSlide();
});

leftBtn.addEventListener("click", () => {
	if (activeSlide === 0) {
		activeSlide = 0;
		leftBtn.disabled = true;
	} else {
		activeSlide--;
		rightBtn.disabled = false;
	}

	setBgImg();
	setActiveSlide();
});

setBgImg();
setActiveSlide();

const contents = document.querySelectorAll(".content");
const btnDown = document.querySelector(".btn--down");
const btnUp = document.querySelector(".btn--up");
const leftSide = document.querySelector(".leftSide");
const rightSide = document.querySelector(".rightSide");

const contentsLength = contents.length - 1;
let activeSlideLeft = contentsLength;
let activeSlideRight = 0;

leftSide.style.transform = `translateY(-${contentsLength * 100}%)`;

btnDown.addEventListener("click", () => slider("down"));

btnUp.addEventListener("click", () => slider("up"));

const slider = (arrow) => {
	if (arrow === "up") {
		if (activeSlideRight < contentsLength) {
			activeSlideRight++;
			activeSlideLeft--;
		} else {
			activeSlideRight = 0;
			activeSlideLeft = contentsLength;
		}
	} else {
		if (activeSlideLeft < contentsLength) {
			activeSlideLeft++;
			activeSlideRight--;
		} else {
			activeSlideLeft = 0;
			activeSlideRight = contentsLength;
		}
	}

	leftSide.style.transform = `translateY(-${activeSlideLeft * 100}%)`;
	rightSide.style.transform = `translateY(-${activeSlideRight * 100}%)`;
};

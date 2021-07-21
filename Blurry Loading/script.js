const load = document.querySelector(".load");
const bg = document.querySelector(".bg");

let loadValue = 0;

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers?answertab=active#tab-top
const scale = (number, inMin, inMax, outMin, outMax) => {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const blurEffect = () => {
	loadValue++;

	if (loadValue === 100) {
		clearInterval(loadBlur);
	}
	load.innerText = `${loadValue}%`;
	load.style.opacity = scale(loadValue, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(loadValue, 0, 100, 3, 0)}rem)`;
};

let loadBlur = setInterval(blurEffect, 30);

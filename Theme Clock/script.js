const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle--checkbox");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers?answertab=active#tab-top
const scale = (number, inMin, inMax, outMin, outMax) => {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// add dark/light mode
toggle.addEventListener("change", (e) => {
	if (e.target.checked === true) {
		document.body.classList.add("dark");
	} else {
		document.body.classList.remove("dark");
	}
});

const setTime = () => {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const mins = time.getMinutes();
	const secs = time.getSeconds();
	const ampm = hours >= 12 ? "PM" : "AM";

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;
	minEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		mins,
		0,
		59,
		0,
		360
	)}deg)`;
	secEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		secs,
		0,
		59,
		0,
		360
	)}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${
		mins < 10 ? `0${mins}` : mins
	} ${ampm}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`;
};

setTime();

setInterval(setTime, 1000);

const bigCupWave = document.querySelector(".bigCupWave");
const bigCupPercentage = document.querySelector(".percentage span");
const cupsSmall = document.querySelectorAll(".cupSmall");
const remained = document.getElementById("remained");
const literTitle = document.querySelector(".remained .liters");
const reminder = document.querySelector(".reminder");

cupsSmall.forEach((cup, idx) => {
	cup.addEventListener("click", () => pressedCup(idx, cupsSmall.length));
});

const pressedCup = (idx, totalCups) => {
	// checks if the next element is not full and if pressed element is full
	if (idx === totalCups - 1 && cupsSmall[idx].classList.contains("full")) {
		idx--;
	} else {
		if (
			cupsSmall[idx].classList.contains("full") &&
			!cupsSmall[idx].nextElementSibling.classList.contains("full")
		) {
			idx--;
		}
	}

	cupsSmall.forEach((cup, idx2) => {
		if (idx >= idx2) {
			cup.classList.add("full");
		} else {
			cup.classList.remove("full");
		}
	});

	updateBigCup();
};

const updateBigCup = () => {
	const fullCups = document.querySelectorAll(".cupSmall.full").length;
	const totalSmallCups = cupsSmall.length;

	if (fullCups === 0) {
		bigCupWave.style.top = "0px";
		bigCupPercentage.innerText = "";
		bigCupPercentage.parentElement.style.height = "0";
		reminder.style.transform = "translate(-50%, -50%)";
		literTitle.innerText = "";
	} else {
		const filledPercent = `${(fullCups / totalSmallCups) * 100}%`;
		bigCupWave.style.top = "-10px";
		bigCupPercentage.innerText = filledPercent;
		bigCupPercentage.parentElement.style.height = filledPercent;
		reminder.style.transform = "translate(-50%, -400%)";
		remained.style.visibility = "visible";
		literTitle.innerText = `${2 - (250 * fullCups) / 1000} L`;
	}

	if (fullCups === totalSmallCups) {
		bigCupWave.style.top = "0px";
		remained.style.height = "0";
		remained.style.visibility = "hidden";
	}
};

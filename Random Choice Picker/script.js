const inputField = document.getElementById("inputField");
const tagsContainer = document.querySelector(".tags");

// focus right from the start of program
inputField.focus();

const createTags = (e) => {
	const tags = e
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());

	tagsContainer.innerHTML = "";

	tags.forEach((tag) => {
		const tagEl = document.createElement("span");
		tagEl.classList.add("tag");
		tagEl.innerText = tag;
		tagsContainer.appendChild(tagEl);
	});
};

const selectRandomTag = () => {
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		chosenTag(randomTag);

		setTimeout(() => {
			removeChosenTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		// stops interval
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();
			chosenTag(randomTag);
		}, 100);
	}, times * 100);
};

const pickRandomTag = () => {
	const tags = document.querySelectorAll(".tag");
	return tags[Math.floor(Math.random() * tags.length)];
};

const chosenTag = (tag) => {
	tag.classList.add("chosen");
};

const removeChosenTag = (tag) => {
	tag.classList.remove("chosen");
};

inputField.addEventListener("keyup", (e) => {
	createTags(e.target.value);

	if (e.key == "Enter") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);
		selectRandomTag();
	}
});
